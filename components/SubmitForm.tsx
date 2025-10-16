import { Play } from 'lucide-react'
import { useActionState } from 'react'
import { submitChallenge } from '@/lib/actions'

const SubmitForm = ({
  challengeId,
  solution,
}: {
  challengeId: string
  solution: string
}) => {
  const [state, formAction, isPending] = useActionState(
    submitChallenge.bind(null, challengeId),
    null
  )
  return (
    <form action={formAction}>
      <input type='hidden' name='solution' value={solution} />
      <div className='mt-4'>
        <button
          className='w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300
         flex items-center justify-center text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-green-300'
          disabled={isPending}
        >
          <Play size={18} className='mr-2' />
          {isPending ? 'Submitting...' : 'Submit Solution'}
        </button>
      </div>
      <div className='bg-white mt-6 rounded-xl shadow-sm border border-gray-200'>
        <div className='p-3 border-b border-gray-200'>
          <h2 className='text-lg font-bold text-gray-900'>Output</h2>
        </div>
        <div className='p-4 bg-gray-50 rounded-b-xl min-h-[80px]'>
          <p
            className={`text-gray-500 text-sm ${
              state?.success === false ? 'text-red-600' : ''
            } whitespace-pre-wrap`}
          >
            {state ? state.output : 'Your output will be displayed here.'}
          </p>
        </div>
      </div>
    </form>
  )
}

export default SubmitForm
