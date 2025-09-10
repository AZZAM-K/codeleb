import Image from 'next/image'
import Link from 'next/link'
import { teamMembers } from '@/constants'
import TeamMemberCard from '@/components/TeamMemberCard'
import FeatureCard from '@/components/FeatureCard'

const features = [
  {
    title: 'Learn Programming Languages',
    desc: 'Start learning the most important programming languages step by step with clear explanations and practical examples.',
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M16.88 3.549L7.12 20.451M4 8h16M4 16h16'
      />
    ),
  },
  {
    title: 'Build Real Projects',
    desc: 'Not just theory — apply what you learn by building real-world projects to become job-ready.',
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3 7h18M3 12h18M3 17h18'
      />
    ),
  },
  {
    title: 'Become a Strong Programmer',
    desc: 'Through practice and support, you’ll reach a professional level and unlock real career opportunities.',
    icon: (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M12 4.354l2.121 4.243 4.678.68-3.399 3.31.802 4.661L12 15.347l-4.202 2.201.802-4.661-3.399-3.31 4.678-.68L12 4.354z'
      />
    ),
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className='relative overflow-hidden bg-gray-50'>
        <div className='container mx-auto px-6 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center md:items-start gap-10'>
          <div className='md:w-2/3 max-w-3xl text-center md:text-left'>
            <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight'>
              We&apos;re on a mission to make coding accessible to everyone.
            </h1>
            <p className='mt-6 text-lg text-gray-700 leading-relaxed'>
              CodeLeb was founded on a simple principle: anyone with curiosity
              and dedication can learn to code. We&apos;re passionate about
              breaking down barriers and empowering the next generation of
              builders, innovators, and problem-solvers.
            </p>
          </div>

          <div className='md:w-1/3 flex justify-center md:justify-end'>
            <div className='relative w-full max-w-sm h-auto mx-auto'>
              <Image
                width={2200}
                height={2200}
                src='/future-cedar.png'
                alt='CodeLeb Logo - Programming Languages Learning Platform'
                className='object-contain'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 md:py-28 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Why CodeLeb?
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              We&apos;ve built a learning experience designed for your success.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {features.map(({ title, desc, icon }, i) => (
              <FeatureCard key={i} title={title} desc={desc} icon={icon} />
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 md:py-28 bg-slate-50'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              Meet the Team
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              We&apos;re a small, dedicated team that loves to code and teach.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
            {teamMembers.map(member => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                colorClasses={member.colorClasses}
                short={member.short}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-r from-green-600 to-green-700'>
        <div className='container mx-auto px-6 py-20 text-center text-white'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Ready to Start Your Journey?
          </h2>
          <p className='mt-4 text-lg max-w-2xl mx-auto opacity-90'>
            Join thousands of learners and take the first step towards mastering
            your future.
          </p>
        </div>
        <div className='text-center pb-10'>
          <Link
            href={'/courses'}
            className=' bg-white text-center text-green-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </main>
  )
}
