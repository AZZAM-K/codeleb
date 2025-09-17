'use server'

import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

interface CreateUserParams {
  clerkId: string
  email: string
  name: string
  image?: string
}

export async function createOrUpdateUser(params: CreateUserParams) {
  const { clerkId, email, name, image } = params

  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    return prisma.user.update({
      where: { email },
      data: { clerkId, name, image: image ?? existingUser.image },
    })
  }

  return prisma.user.create({
    data: { clerkId, email, name, image: image ?? '' },
  })
}

export const checkAnswers = async (
  sectionId: string,
  prevState: { message: string | null; success?: boolean },
  formData: FormData
) => {
  const clerkUser = await currentUser()
  if (!clerkUser) throw new Error('Unauthorized')

  const exercises = await prisma.exercise.findMany({ where: { sectionId } })

  let allCorrect = true

  for (const exercise of exercises) {
    const key =
      exercise.type === 'MCQ'
        ? 'mcq'
        : exercise.type === 'TRUE_FALSE'
        ? 'true-false'
        : 'fill-blank'

    const answer = formData.get(key)?.toString() || ''

    if (exercise.type === 'MCQ' || exercise.type === 'FILL_BLANK') {
      if (answer !== exercise.answer) allCorrect = false
    } else if (exercise.type === 'TRUE_FALSE') {
      if ((answer === 'true') !== (exercise.answer === 'true'))
        allCorrect = false
    }
  }
  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  })
  if (!user) throw new Error('User not found')

  const completion = await prisma.sectionCompletion.findFirst({
    where: {
      userId: user.id,
      sectionId,
    },
  })

  if (completion) {
    return { success: false, message: 'Section already completed' }
  }

  if (allCorrect) {
    const section = await prisma.section.findUnique({
      where: { id: sectionId },
    })
    await prisma.sectionCompletion.create({
      data: {
        userId: user.id,
        sectionId,
        studyPlanId: section!.studyPlanId,
      },
    })
    revalidatePath(`/courses/${section?.studyPlanId}/${sectionId}`)
    return {
      success: true,
      message: 'All answers correct! Section completed',
    }
  }

  return { success: false, message: 'Some answers are incorrect, try again' }
}
