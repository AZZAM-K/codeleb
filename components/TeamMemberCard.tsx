const TeamMemberCard = ({
  name,
  colorClasses,
  short,
}: {
  name: string
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
  </div>
)

export default TeamMemberCard
