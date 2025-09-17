import Courses from "@/components/Courses"
import HowItWorksSection from "@/components/HowItWorksSection"
import Loader from "@/components/Loader"
import { testimonials } from "@/constants"
import { ChevronsUp } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className='bg-white text-gray-800'>
      <section className='relative text-center py-24 md:py-32 bg-gradient-to-br from-green-50 to-cyan-50 overflow-hidden'>
        <div className='container mx-auto px-6 z-10 relative'>
          <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight'>
            Learn programming step by step with CodeLeb
          </h1>
          <p className='mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
            Our mission is to make coding accessible and fun through interactive
            challenges, clear roadmaps, and a gamified learning experience.
          </p>
          <Link
            href='/courses'
            className='mt-8 inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105'
          >
            Start Learning
          </Link>
        </div>
        <div className='absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full opacity-20 -translate-x-16 -translate-y-16'></div>
      </section>

      <section className='py-16 md:py-24'>
        <Suspense fallback={<Loader />}>
          <Courses limit={4} />
        </Suspense>
      </section>

      <HowItWorksSection />

      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='bg-green-600 text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left'>
            <div className='md:w-1/2'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Level Up Your Skills
              </h2>
              <p className='mt-4 text-lg opacity-90'>
                Earn XP and climb the ranks as you master new concepts. Turn
                learning into an adventure!
              </p>
            </div>
            <div className='flex items-center space-x-6 mt-8 md:mt-0'>
              <span className='text-xl font-semibold'>Learn</span>
              <ChevronsUp size={40} strokeWidth={2} />
              <span className='text-xl font-semibold'>Practice</span>
              <ChevronsUp size={40} strokeWidth={2} />
              <span className='text-xl font-semibold'>Grow</span>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center'>
            What Our Learners Say
          </h2>
          <div className='grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto'>
            {testimonials.map(testimonial => (
              <blockquote
                key={testimonial.name}
                className='bg-white p-8 rounded-xl shadow-sm'
              >
                <p className='text-gray-600 italic'>
                  &quot;{testimonial.quote}&quot;
                </p>
                <footer className='mt-4 font-semibold text-gray-900'>
                  — {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 text-center bg-gray-100'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Ready to start coding?
          </h2>
          <p className='mt-4 text-lg text-gray-600 max-w-xl mx-auto'>
            Join a community of learners and take the first step towards your
            career in tech today.
          </p>
          <Link
            href='/courses'
            className='mt-8 inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105'
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </main>
  )
}
