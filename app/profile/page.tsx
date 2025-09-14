import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Page = async () => {
  const user = await currentUser()

  if (!user) {
    redirect('/login')
  }

  return <div>Page</div>
}

export default Page
