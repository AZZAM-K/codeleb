'use client'
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <SignUp
        appearance={{
          variables: {
            colorPrimary: '#16a34a',
            colorBackground: '#ffffff',
            colorText: '#111827',
            borderRadius: '1rem',
          },
          layout: {
            socialButtonsVariant: 'iconButton',
          },
        }}
        signInUrl='/login'
      />
    </div>
  )
}
