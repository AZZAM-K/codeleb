import { SectionResponse } from '@/types'
import { currentUser } from '@clerk/nextjs/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SectionPage = async ({
  params,
}: {
  params: Promise<{
    sectionId: string
  }>
}) => {
  const user = await currentUser()

  if (!user) {
    redirect('/login')
  }

  const { sectionId } = await params
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sections/${sectionId}`,
    {
      headers: {
        cookie: cookies().toString(), // <-- forward cookies
      },
    }
  )
  const section = (await data.json()) as SectionResponse
  console.log(section)

  return (
    <div>
      {section.title} {section.isCompleted}
    </div>
  )
}

export default SectionPage
