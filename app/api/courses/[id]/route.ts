import { prisma } from "@/lib/prisma"
import { NextRequest } from "next/server"

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await context.params
  const userId = req.headers.get("user-id")

  if (!userId) return new Response("Unauthorized", { status: 401 })

  try {
    const course = await prisma.studyPlan.findUnique({
      where: { id },
      include: {
        sections: {
          include: {
            subsections: true,
            completions: { where: { userId } },
          },
        },
      },
    })

    if (!course) return new Response("Course not found", { status: 404 })

    const sectionsWithCompletion = course.sections.map(section => ({
      ...section,
      completed: section.completions.length > 0,
    }))

    return new Response(
      JSON.stringify({ ...course, sections: sectionsWithCompletion }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error(error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
