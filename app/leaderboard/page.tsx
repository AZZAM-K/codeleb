'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type User = {
  id: string
  name: string
  level: number
  xp: number
  image: string
}

export default function Leaderboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
          { cache: 'no-store' }
        )
        const data: User[] = await res.json()

        setUsers(data)
      } catch (err) {
        console.error('Error fetching users:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center py-50 text-gray-600 space-y-4'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500'></div>
        <p className='text-lg font-medium text-green-600'>
          Loading leaderboard...
        </p>
      </div>
    )
  }

  return (
    <section className='py-20 md:py-28 bg-gradient-to-b from-green-50 to-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight'>
            Leaderboard
          </h2>
          <p className='mt-2 text-gray-600'>Check out the top players!</p>
        </div>

        <div className='overflow-x-auto shadow-xl rounded-3xl border border-green-200 bg-white'>
          <table className='min-w-full rounded-3xl'>
            <thead className='bg-gradient-to-r from-green-600 to-green-500 text-white'>
              <tr>
                <th className='py-4 px-6 text-left text-lg'>Rank</th>
                <th className='py-4 px-6 text-left text-lg'>Profile</th>
                <th className='py-4 px-6 text-left text-lg'>Name</th>
                <th className='py-4 px-6 text-center text-lg'>Level</th>
                <th className='py-4 px-6 text-right text-lg'>XP</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`cursor-pointer group border-b last:border-none transition-all duration-300 hover:bg-green-50/60 ${
                    index < 3
                      ? 'bg-gradient-to-r from-green-100 to-green-50'
                      : ''
                  }`}
                >
                  <td className='py-4 px-6 font-bold text-green-700 flex items-center gap-2'>
                    #{index + 1}
                    {index === 0 && (
                      <span className='px-3 py-1 text-sm rounded-full bg-yellow-400 text-white shadow-md'>
                        🥇
                      </span>
                    )}
                    {index === 1 && (
                      <span className='px-3 py-1 text-sm rounded-full bg-gray-400 text-white shadow-md'>
                        🥈
                      </span>
                    )}
                    {index === 2 && (
                      <span className='px-3 py-1 text-sm rounded-full bg-orange-400 text-white shadow-md'>
                        🥉
                      </span>
                    )}
                  </td>
                  <td className='py-4 px-6 text-gray-900 font-medium group-hover:text-green-700'>
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={56}
                      height={56}
                      className='rounded-full border-2 border-gray-300 shadow-sm object-cover'
                    />
                  </td>
                  <td className='py-4 px-6 text-gray-900 font-medium group-hover:text-green-700'>
                    {user.name}
                  </td>
                  <td className='py-4 px-6 text-center text-gray-800 font-semibold'>
                    {user.level}
                  </td>
                  <td className='py-4 px-6 text-right text-gray-700 font-semibold'>
                    {user.xp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedUser && (
          <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeIn'>
            <div className='bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative'>
              <button
                onClick={() => setSelectedUser(null)}
                className='absolute top-3 right-3 text-gray-500 hover:text-green-600 text-xl'
              >
                ✖
              </button>
              <div className='flex flex-col items-center space-y-4'>
                <Image
                  src={selectedUser.image}
                  alt={selectedUser.name}
                  width={96}
                  height={96}
                  className='rounded-full border-4 border-green-200 shadow-lg object-cover'
                />
                <h3 className='text-2xl font-bold text-green-700'>
                  {selectedUser.name}
                </h3>
                <p className='text-lg text-gray-800'>
                  Level:{' '}
                  <span className='font-semibold text-green-600'>
                    {selectedUser.level}
                  </span>
                </p>
                <p className='text-lg text-gray-800'>
                  XP:{' '}
                  <span className='font-semibold text-green-600'>
                    {selectedUser.xp}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
