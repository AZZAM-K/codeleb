import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const section = await prisma.section.findUnique({
    where: { id: params.id },
    include: {
      subsections: true,
      exercises: true,
    },
  })

  if (!section) {
    return NextResponse.json({ error: 'Section not found' }, { status: 404 })
  }

  const completion = await prisma.sectionCompletion.findFirst({
    where: {
      sectionId: params.id,
      user: {
        clerkId: userId,
      },
    },
  })

  return NextResponse.json({
    ...section,
    isCompleted: Boolean(completion),
  })
}
