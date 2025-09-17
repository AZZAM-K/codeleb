'use client'

import { checkAnswers } from '@/lib/actions'
import { Exercise } from '@/types'
import { MessageSquare, PencilLine, Target } from 'lucide-react'
import { useActionState } from 'react'

export default function Exercises({
  exercises,
  sectionId,
}: {
  exercises: Exercise[]
  sectionId: string
}) {
  const [state, formAction, isPending] = useActionState(
    checkAnswers.bind(null, sectionId),
    { message: '', success: false }
  )

  return (
    <form action={formAction}>
      <div className='space-y-6'>
        {exercises.map(exercise => {
          switch (exercise.type) {
            case 'MCQ':
              return <McqExercise key={exercise.id} exercise={exercise} />
            case 'TRUE_FALSE':
              return <TrueFalseExercise key={exercise.id} exercise={exercise} />
            case 'FILL_BLANK':
              return <FillBlankExercise key={exercise.id} exercise={exercise} />
            default:
              return null
          }
        })}
      </div>
      <div className='mt-8 gap-7 flex justify-center items-center'>
        <button
          className='bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300
         text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-green-300'
          disabled={isPending}
        >
          {isPending ? 'Checking...' : 'Submit Answers'}
        </button>
      </div>
      {state.message && (
        <p
          className={`mt-3 text-center font-medium ${
            state.success ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  )
}

const McqExercise = ({ exercise }: { exercise: Exercise }) => (
  <div className='border border-gray-200 rounded-lg p-6 shadow-sm bg-white'>
    <div className='flex items-center mb-4'>
      <div className='bg-green-100 text-green-700 rounded-full h-8 w-8 flex items-center justify-center mr-3'>
        <MessageSquare size={18} />
      </div>
      <h4 className='font-semibold text-gray-800'>{exercise.question}</h4>
    </div>
    <div className='space-y-3 pl-11'>
      {exercise.options?.map((option, index) => (
        <label
          key={index}
          className='flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer'
        >
          <input
            type='radio'
            name='mcq'
            value={option}
            className='h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500'
          />
          <span className='ml-3 text-gray-700'>{option}</span>
        </label>
      ))}
    </div>
  </div>
)

const TrueFalseExercise = ({ exercise }: { exercise: Exercise }) => (
  <div className='border border-gray-200 rounded-lg p-6 shadow-sm bg-white'>
    <div className='flex items-center mb-4'>
      <div className='bg-green-100 text-green-700 rounded-full h-8 w-8 flex items-center justify-center mr-3'>
        <Target size={18} />
      </div>
      <h4 className='font-semibold text-gray-800'>{exercise.question}</h4>
    </div>
    <div className='space-y-3 pl-11'>
      <label className='flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
        <input
          type='radio'
          name='true-false'
          value='True'
          className='h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500'
        />
        <span className='ml-3 text-gray-700'>True</span>
      </label>
      <label className='flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer'>
        <input
          type='radio'
          name='true-false'
          value='False'
          className='h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500'
        />
        <span className='ml-3 text-gray-700'>False</span>
      </label>
    </div>
  </div>
)

const FillBlankExercise = ({ exercise }: { exercise: Exercise }) => (
  <div className='border border-gray-200 rounded-lg p-6 shadow-sm bg-white'>
    <div className='flex items-center mb-4'>
      <div className='bg-green-100 text-green-700 rounded-full h-8 w-8 flex items-center justify-center mr-3'>
        <PencilLine size={18} />
      </div>
      <h4 className='font-semibold text-gray-800'>{exercise.question}</h4>
    </div>
    <div className='pl-11'>
      <input
        type='text'
        name='fill-blank'
        placeholder='Type your answer here...'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-none transition-shadow'
      />
    </div>
  </div>
)
