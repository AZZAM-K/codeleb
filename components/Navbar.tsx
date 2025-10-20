'use client'

import { useState, useEffect } from 'react'
import { useUser, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import { createOrUpdateUser, getProfileUser } from '@/lib/actions'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Zap } from 'lucide-react'

export default function Navbar() {
  const { user, isSignedIn } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userData, setUserData] = useState<{ streak: number } | null>(null)

  // Sync user with DB and fetch streak
  useEffect(() => {
    if (isSignedIn && user) {
      createOrUpdateUser({
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.username || `user-${user.id}`,
        image: user.imageUrl || '',
      })
        .then(() => getProfileUser()) // fetch updated user from DB
        .then(res => setUserData(res))
        .catch(err => console.error(err))
    }
  }, [isSignedIn, user])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/about-us', label: 'About Us' },
  ]
  const pathname = usePathname()

  return (
    <header className='bg-white backdrop-blur-md sticky top-0 z-50 border-b border-gray-200'>
      <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2 mr-3'>
          <Image
            src='/logo.png'
            alt='CodeLeb Logo'
            width={200}
            height={200}
            className='rounded-md'
            priority
          />
        </Link>

        <nav className='hidden md:flex items-center space-x-8'>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  isActive
                    ? 'text-green-600 font-semibold border-b-2 border-green-600 pb-1'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className='hidden md:flex gap-3 items-center'>
          <SignedIn>
            {userData && (
              <div className='flex items-center gap-1 px-2 py-1'>
                <Zap color='orange' size={20} />
                <span className='text-sm font-medium text-gray-800'>
                  {userData.streak}
                </span>
              </div>
            )}
            <div className='flex items-center gap-3'>
              <Link href='/profile' className='flex items-center gap-2'>
                <Image
                  src={user?.imageUrl || '/default-avatar.png'}
                  alt='Profile'
                  width={35}
                  height={35}
                  className='rounded-full'
                />
              </Link>
              <SignOutButton>
                <button className='px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition'>
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          </SignedIn>

          <SignedOut>
            <div className='flex items-center text-white gap-3 bg-gray-900 rounded-2xl px-5 py-2 shadow-md'>
              <Link
                href='/login'
                className=' rounded-lg  font-medium  transition'
              >
                Login
              </Link>

              <span className='text-gray-400 font-semibold'>/</span>

              <Link href='/sign-up' className='font-medium transition'>
                Sign Up
              </Link>
            </div>
          </SignedOut>
        </div>

        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className='md:hidden text-gray-800 focus:outline-none'
          aria-expanded={isMenuOpen}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? (
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden mt-2 px-6 pb-4 space-y-2 border-t border-gray-200'>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`block py-2 text-sm rounded transition ${
                  isActive
                    ? 'text-green-600 font-semibold  pb-1'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {label}
              </Link>
            )
          })}

          <div className='pt-2 border-t border-gray-200 flex flex-col gap-2'>
            <SignedIn>
              <div className='flex items-center gap-3'>
                <Link href='/profile' className='flex items-center gap-2'>
                  <Image
                    src={user?.imageUrl || '/default-avatar.png'}
                    alt='Profile'
                    width={35}
                    height={35}
                    className='rounded-full'
                  />
                  <span className='font-semibold'>{user?.username}</span>
                </Link>
                {userData && (
                  <div className='flex items-center gap-1 px-2 py-1'>
                    <Zap color='orange' size={20} />
                    <span className='text-sm font-medium text-gray-800'>
                      {userData.streak}
                    </span>
                  </div>
                )}
              </div>
              <SignOutButton>
                <button className='w-full px-3 py-1 mt-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition'>
                  Sign Out
                </button>
              </SignOutButton>
            </SignedIn>

            <SignedOut>
              <Link
                href='/login'
                className='block text-center px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition'
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href='/sign-up'
                className='block text-center px-3 py-1 bg-green-600 rounded-lg hover:bg-green-700 transition text-white'
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  )
}
