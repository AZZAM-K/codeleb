import { JSX } from 'react'

const FeatureCard = ({
  title,
  desc,
  icon,
}: {
  title: string
  desc: string
  icon: JSX.Element
}) => {
  return (
    <div className='bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center'>
      <div className='bg-green-100 text-green-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold mb-3'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{desc}</p>
    </div>
  )
}

export default FeatureCard
