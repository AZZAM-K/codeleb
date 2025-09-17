import React from "react"
import { CheckCircle, Lock, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Subsection {
  id: string
  title: string
  type: "learn" | "practice"
  locked: boolean
}

interface Section {
  id: string
  order: number
  title: string
  subsections: Subsection[]
  completed: boolean
}

interface Course {
  id: string
  title: string
  description: string
  img: string
  sections: Section[]
}

interface PageProps {
  params: Promise<{ id: string }>
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params

  async function getCourse(courseId: string): Promise<Course> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/${courseId}`,
      {
        cache: "no-store",
        headers: { "user-id": "123" },
      }
    )
    if (!res.ok) throw new Error("Failed to fetch course")
    return res.json()
  }

  const course = await getCourse(id)

  const totalLessons = course.sections.reduce(
    (sum, section) => sum + section.subsections.length,
    0
  )
  const completedLessons = course.sections.reduce(
    (sum, section) =>
      sum + (section.completed ? section.subsections.length : 0),
    0
  )
  const courseProgress =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className='bg-gray-100 text-gray-900 font-sans py-4 px-4'>
      <div className='flex md:flex-row flex-col gap-8'>
        <aside className='w-full md:w-1/3 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center'>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <div className='md:w-1/3 h-20 md:h-32 rounded-full overflow-hidden border-2 border-green-500'>
              <Image
                src={course.img}
                alt={course.title}
                width={196}
                height={196}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='w-full md:w-2/3 text-center md:text-left'>
              <h3 className='text-2xl font-semibold mb-2 text-gray-900'>
                {course.title}
              </h3>
              <p className='text-gray-600 mb-6'>{course.description}</p>
            </div>
          </div>

          <div className='w-full mt-6'>
            <h4 className='text-lg font-bold mb-1'>Course Progress</h4>
            <div className='relative h-2 mt-5 bg-gray-300 rounded-full'>
              <div
                className='absolute inset-y-0 left-0 bg-purple-600 rounded-full'
                style={{ width: `${courseProgress}%` }}
              />
              <span className='absolute right-0 top-1/2 -translate-y-1/2 text-sm font-semibold text-white bg-green-600 px-2 py-1 rounded-full'>
                {courseProgress}%
              </span>
            </div>
          </div>
        </aside>

        <main className='w-full md:w-2/3 p-6 bg-white rounded-xl shadow-lg max-h-[80vh] overflow-y-auto'>
          <h2 className='text-xs uppercase tracking-wider text-gray-500 mb-4'>
            Course Sections
          </h2>
          <ul className='space-y-2'>
            {course.sections.map((section, index) => {
              const sectionTotal = section.subsections.length
              const prevSection = index > 0 ? course.sections[index - 1] : null
              const isLocked = index > 0 && !prevSection?.completed

              return (
                <li key={section.id}>
                  {isLocked ? (
                    <div className='flex justify-between items-center py-3 px-4 rounded-lg bg-gray-100 cursor-not-allowed'>
                      <span className='text-sm font-semibold text-gray-500'>
                        {section.order}. {section.title}
                      </span>
                      <div className='flex items-center space-x-2'>
                        <span className='text-xs font-bold px-2 py-1 rounded border border-gray-400 text-gray-500'>
                          {sectionTotal} Lessons
                        </span>
                        <Lock size={16} />
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={`/courses/${id}/${section.id}`}
                      className={`flex justify-between items-center w-full rounded-lg py-3 px-4 transition-colors duration-300 ${
                        section.completed
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-green-100 hover:bg-green-200"
                      }`}
                    >
                      <span className='text-sm font-semibold text-gray-900'>
                        {section.order}. {section.title}
                      </span>
                      <div className='flex items-center space-x-2'>
                        <span className='text-xs font-bold px-2 py-1 rounded border border-green-400 text-green-600'>
                          {sectionTotal} Lessons
                        </span>
                        {section.completed ? (
                          <CheckCircle size={16} className='text-green-600' />
                        ) : (
                          <BookOpen size={16} className='text-green-600' />
                        )}
                      </div>
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </main>
      </div>
    </div>
  )
}

export default Page
