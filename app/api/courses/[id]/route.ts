import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await context.params
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const course = await prisma.studyPlan.findUnique({
      where: { id },
      include: {
        sections: {
          orderBy: {
            order: 'asc',
          },
          include: {
            subsections: true,
            completions: { where: { user: { clerkId: userId } } },
          },
        },
        challenges: {
          orderBy: {
            difficulty: 'asc',
          },
          select: {
            id: true,
            title: true,
            difficulty: true,
            completions: { where: { user: { clerkId: userId } } },
          },
        },
      },
    })

    if (!course) return new NextResponse('Course not found', { status: 404 })

    const sectionsWithCompletion = course.sections.map(section => ({
      ...section,
      completed: section.completions.length > 0,
    }))

    const challengesWithCompletion = course.challenges.map(challenge => ({
      ...challenge,
      completed: challenge.completions.length > 0,
    }))

    return new NextResponse(
      JSON.stringify({
        ...course,
        sections: sectionsWithCompletion,
        challenges: challengesWithCompletion,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
