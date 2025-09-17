import { SectionResponse } from '@/types'
import { currentUser } from '@clerk/nextjs/server'
import { ArrowLeft, CheckCircle2, FileCode } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import Exercises from '@/components/Exercises'

const SectionPage = async ({
  params,
}: {
  params: Promise<{
    id: string
    sectionId: string
  }>
}) => {
  const user = await currentUser()

  if (!user) {
    redirect('/login')
  }
  const cookie = await cookies()
  const { sectionId, id: courseId } = await params
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sections/${sectionId}`,
    {
      headers: {
        cookie: cookie.toString(),
      },
    }
  )
  const section = (await data.json()) as SectionResponse

  if (!section) {
    notFound()
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='container max-w-4xl mx-auto px-6 py-12'>
        {/* Section Header */}
        <header className='mb-12'>
          <div className='flex items-center space-x-3'>
            <Link
              href={`/courses/${courseId}`}
              className='text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full p-2 transition-colors duration-200'
            >
              <ArrowLeft size={24} />
            </Link>
            <h1 className='text-3xl font-bold text-gray-900'>
              {section.title}
            </h1>
            {section.isCompleted && (
              <span className='text-green-600 bg-green-100 rounded-full px-3 py-1 text-sm font-semibold flex items-center'>
                <CheckCircle2 size={16} className='mr-1.5' />
                Completed
              </span>
            )}
          </div>
        </header>

        {/* Subsections List */}
        <main className='space-y-10'>
          {section.subsections.map(subsection => (
            <article
              key={subsection.id}
              className='bg-white p-8 rounded-xl shadow-sm border border-gray-200'
            >
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                {subsection.title}
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                {subsection.content}
              </p>
              <div>
                <div className='flex items-center text-sm font-semibold text-gray-500 mb-2'>
                  <FileCode size={16} className='mr-2' />
                  <span>Example</span>
                </div>
                <pre className='bg-gray-100 text-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto'>
                  <code>{subsection.example}</code>
                </pre>
              </div>
            </article>
          ))}
        </main>

        {/* Exercises Section */}
        <section className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Check Your Understanding
          </h2>
          <Exercises exercises={section.exercises} sectionId={sectionId} />
        </section>
      </div>
    </div>
  )
}

export default SectionPage
