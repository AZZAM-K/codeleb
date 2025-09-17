import Courses from '@/components/Courses'
import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <section className='py-16 md:py-24'>
              <Suspense fallback={<Loader />}>
                <Courses />
              </Suspense>
            </section>
    </div>
  )
}

export default page