import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = searchParams.get('limit')
  try {
    const courses = await prisma.studyPlan.findMany({
      take: limit ? parseInt(limit) : undefined,
    })
    return new Response(JSON.stringify(courses), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Error fetching courses', { status: 500 })
  }
}
