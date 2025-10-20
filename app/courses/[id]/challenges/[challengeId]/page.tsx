import Editor from '@/components/Editor'
import { ChallengeResponse } from '@/types'
import { currentUser } from '@clerk/nextjs/server'
import { ArrowLeft, Check } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const ChallengePage = async ({
  params,
}: {
  params: Promise<{
    challengeId: string
  }>
}) => {
  const user = await currentUser()

  if (!user) {
    redirect('/login')
  }
  const cookie = await cookies()
  const { challengeId } = await params

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/challenges/${challengeId}`,
    {
      headers: {
        cookie: cookie.toString(),
      },
    }
  )

  const challenge = (await data.json()) as ChallengeResponse

  return (
    <div className='bg-gray-50 min-h-screen'>
      <header className='bg-white border-b border-gray-200 sticky top-0 z-10'>
        <div className='container max-w-7xl mx-auto px-6 py-3 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link
              href={`/courses/${challenge.studyPlanId}`}
              title='Return to course'
              className='text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full p-2 transition-colors duration-200'
            >
              <ArrowLeft size={20} />
            </Link>
            <div className='flex items-center space-x-3'>
              <h1 className='text-xl font-semibold text-gray-800'>
                {challenge.title}
              </h1>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                  challenge.difficulty === 'EASY'
                    ? 'bg-green-200 text-green-800'
                    : challenge.difficulty === 'MEDIUM'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-red-200 text-red-800'
                }`}
              >
                {challenge.difficulty}
              </span>
              {challenge.isCompleted && (
                <span className='text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 flex items-center'>
                  <Check size={14} className='mr-1' />
                  Completed
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className='container max-w-7xl mx-auto px-6 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
              <h2 className='text-lg font-bold text-gray-900 mb-3'>
                Description
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                {challenge.description}
              </p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
              <h2 className='text-lg font-bold text-gray-900 mb-4'>Examples</h2>
              <div className='space-y-4'>
                {challenge.examples.map((example, index) => (
                  <div
                    key={example.id}
                    className='bg-gray-50 border border-gray-200 p-4 rounded-lg'
                  >
                    <p className='text-sm font-semibold text-gray-600 mb-2'>
                      Example {index + 1}
                    </p>
                    <div className='flex items-center space-x-4'>
                      <div className='flex-1'>
                        <p className='text-xs text-gray-500 font-medium'>
                          Input
                        </p>
                        <code className='text-gray-800 text-sm'>
                          {example.input}
                        </code>
                      </div>
                      <div className='text-gray-300'>→</div>
                      <div className='flex-1'>
                        <p className='text-xs text-gray-500 font-medium'>
                          Output
                        </p>
                        <code className='text-gray-800 text-sm'>
                          {example.output}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Editor
            starterCode={challenge.starterCode}
            challengeId={challenge.id}
            language={challenge.language}
          />
        </div>
      </main>
    </div>
  )
}

export default ChallengePage
