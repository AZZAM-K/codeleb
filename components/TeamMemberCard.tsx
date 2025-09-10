const TeamMemberCard = ({
  name,
  role,
  colorClasses,
  short,
}: {
  name: string
  role: string
  colorClasses: string
  short: string
}) => (
  <div className='text-center'>
    <div
      className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center shadow-md ${colorClasses}`}
    >
      <span className='text-4xl font-bold'>{short}</span>
    </div>
    <h4 className='mt-4 text-xl font-semibold text-gray-900'>{name}</h4>
    <p className='text-gray-500'>{role}</p>
  </div>
)

export default TeamMemberCard
