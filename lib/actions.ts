"use server"

import { prisma } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

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
    data: { clerkId, email, name, image: image ?? "" },
  })
}

export const checkAnswers = async (
  sectionId: string,
  prevState: { message: string | null; success?: boolean },
  formData: FormData
) => {
  const clerkUser = await currentUser()
  if (!clerkUser) throw new Error("Unauthorized")

  const exercises = await prisma.exercise.findMany({ where: { sectionId } })
  let allCorrect = true

  for (const exercise of exercises) {
    const key =
      exercise.type === "MCQ"
        ? "mcq"
        : exercise.type === "TRUE_FALSE"
        ? "true-false"
        : "fill-blank"

    const answer = formData.get(key)?.toString() || ""

    if (exercise.type === "MCQ" || exercise.type === "FILL_BLANK") {
      if (answer !== exercise.answer) allCorrect = false
    } else if (exercise.type === "TRUE_FALSE") {
      if ((answer === "true") !== (exercise.answer === "true"))
        allCorrect = false
    }
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  })
  if (!user) throw new Error("User not found")

  const completion = await prisma.sectionCompletion.findFirst({
    where: { userId: user.id, sectionId },
  })

  if (completion) {
    return { success: false, message: "Section already completed" }
  }

  if (allCorrect) {
    const section = await prisma.section.findUnique({
      where: { id: sectionId },
    })
    if (!section) throw new Error("Section not found")

    await prisma.sectionCompletion.create({
      data: {
        userId: user.id,
        sectionId,
        studyPlanId: section.studyPlanId,
        completedAt: new Date(),
      },
    })

    await updateStreak(user.id)

    await prisma.user.update({
      where: { id: user.id },
      data: { xp: { increment: section.xp } },
    })

    revalidatePath(`/courses/${section.studyPlanId}/${sectionId}`)

    return {
      success: true,
      message: `All answers correct! Section completed and ${section.xp} XP added.`,
    }
  }

  return { success: false, message: "Some answers are incorrect, try again" }
}

export async function getProfileUser() {
  const user = await currentUser()
  if (!user) throw new Error("Not authenticated")

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: {
      sectionCompletions: true,
      challengeCompletions: true,
    },
  })

  if (!dbUser) throw new Error("User not found")

  await updateStreak(dbUser.id)

  const profile = await prisma.user.findUnique({
    where: { clerkId: user.id },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      level: true,
      xp: true,
      streak: true,
      lastStudiedAt: true,
      rank: true,
      challengeCompletions: {
        select: {
          id: true,
          completedAt: true,
          challenge: {
            select: { id: true, title: true, difficulty: true, xp: true },
          },
          studyPlan: { select: { id: true, title: true } },
        },
      },
      sectionCompletions: {
        select: {
          id: true,
          completedAt: true,
          section: { select: { id: true, title: true, order: true } },
          studyPlan: { select: { id: true, title: true } },
        },
      },
    },
  })

  if (!profile) throw new Error("User profile not found")

  return profile
}

function getLevelFromTotalXP(totalXP: number) {
  let level = 1
  let xpLeft = totalXP
  let xpNeeded = 100

  while (xpLeft >= xpNeeded) {
    xpLeft -= xpNeeded
    level++
    xpNeeded = Math.floor(xpNeeded * 1.2)
  }

  return level
}

export async function updateUserLevel(userId: string, totalXP: number) {
  const newLevel = getLevelFromTotalXP(totalXP)

  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error("User not found")

  if (newLevel > user.level) {
    await prisma.user.update({
      where: { id: userId },
      data: { level: newLevel },
    })
  }

  return newLevel
}

export async function updateStreak(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })

  if (!user) throw new Error("User not found")

  const now = new Date()

  const today = new Date(now)
  today.setHours(0, 0, 0, 0)

  const lastStudiedAt = user.lastStudiedAt ? new Date(user.lastStudiedAt) : null
  let newStreak = user.streak ?? 0

  if (!lastStudiedAt) {
    newStreak = 1
  } else {
    const lastDay = new Date(lastStudiedAt)
    lastDay.setHours(0, 0, 0, 0)

    const diffDays = Math.floor(
      (today.getTime() - lastDay.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (diffDays === 0) {
      newStreak = user.streak
    } else if (diffDays === 1) {
      newStreak = user.streak + 1
    } else {
      newStreak = 0
    }
  }

  return await prisma.user.update({
    where: { id: userId },
    data: {
      streak: newStreak,
      lastStudiedAt: now,
    },
  })
}
