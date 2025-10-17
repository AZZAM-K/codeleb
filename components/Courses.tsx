import { courseCard } from "@/types"
import Image from "next/image"
import { coursesColors } from "@/constants"
import Link from "next/link"

const Courses = async ({ limit }: { limit?: number }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses${
      limit ? `?limit=${limit}` : ""
    }`
  )
  const courses = (await data.json()) as courseCard[]

  return (
    <section className='container mx-auto px-6 py-10 sm:py-10'> 
      
      <div className='mb-12 md:mb-16 text-left'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight'>
          <span className="text-green-600">Master Your Goals</span>
          <br />
          with Featured Study Plans
        </h2>
        <p className='mt-3 text-lg text-gray-600 max-w-2xl'>
          Explore our curated learning pathways designed by experts to help you achieve mastery quickly and efficiently.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
        {courses.map(course => (
          <div
            key={course.id}
            className={`rounded-2xl shadow-sm overflow-hidden group p-8 text-center flex flex-col items-center ${
              coursesColors[course.title as keyof typeof coursesColors].bg
            } transition-shadow duration-300 ${
              coursesColors[course.title as keyof typeof coursesColors].shadow
            }`}
          >
            <Image
              src={course.img}
              alt={`${course.title} logo`}
              width={80}
              height={80}
              className='w-20 h-20 mb-6 object-contain'
            />
            <div className='flex flex-col flex-grow'>
              <h3 className='text-2xl font-semibold mb-2 text-gray-900'>
                {course.title}
              </h3>
              <p className='text-gray-600 mb-6 flex-grow'>
                {course.description}
              </p>
              <Link
                href={`/courses/${course.id}`}
                className={`font-semibold ${
                  coursesColors[course.title as keyof typeof coursesColors]
                    .button
                } transition duration-300 mt-auto`}
              >
                Start Now &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses