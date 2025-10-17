import Courses from '@/components/Courses'
import CoursesTitle from '@/components/CoursesTitle'

const page = () => {
  return (
    <div>
      <section className='container mx-auto px-6 text-center pb-10'>
        <CoursesTitle />
        <Courses />
      </section>
    </div>
  )
}

export default page
