import { BarChart3, Code, Target } from 'lucide-react'

const howItWorksSteps = [
  {
    title: 'Pick a Course',
    description: 'Choose from our curated study plans for popular languages.',
    icon: <Target size={32} strokeWidth={2} />,
  },
  {
    title: 'Learn with Challenges',
    description: 'Engage with interactive exercises and build real projects.',
    icon: <Code size={32} strokeWidth={2} />,
  },
  {
    title: 'Track Progress & Earn XP',
    description:
      'Watch your skills grow and level up with every challenge you complete.',
    icon: <BarChart3 size={32} strokeWidth={2} />,
  },
]

const HowItWorksSection = () => {
  return (
    <section className='py-16 md:py-24 bg-gray-50'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          How It Works
        </h2>
        <div className='grid md:grid-cols-3 gap-12 mt-12'>
          {howItWorksSteps.map((step, i) => (
            <div key={i} className='flex flex-col items-center'>
              <div className='bg-green-100 text-green-600 rounded-full h-16 w-16 flex items-center justify-center mb-4'>
                {step.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
