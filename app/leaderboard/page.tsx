'use client'

import React, { useEffect, useState } from 'react'

type User = {
  id: string
  name: string
  level: number
  xp: number
}

export default function Leaderboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users')
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
      <div className='flex flex-col items-center justify-center py-20 text-gray-600 space-y-4'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500'></div>
        <p className='text-lg font-medium text-green-600'>
          Loading leaderboard...
        </p>
      </div>
    )
  }

  return (
    <section className='py-20 md:py-28 bg-gradient-to-b from-white to-green-50'>
      <div className='container mx-auto px-6'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900'>
            Leaderboard
          </h2>
        </div>

        {/* Table */}
        <div className='overflow-x-auto shadow-xl rounded-2xl border border-green-100 bg-white'>
          <table className='min-w-full rounded-2xl'>
            <thead className='bg-gradient-to-r from-green-600 to-green-500 text-white'>
              <tr>
                <th className='py-4 px-6 text-left text-lg'>Rank</th>
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
                  className={`cursor-pointer group border-b last:border-none transition hover:bg-green-50/60 ${
                    index < 3 ? 'bg-green-50' : ''
                  }`}
                >
                  <td className='py-4 px-6 font-bold text-green-700 flex items-center gap-2'>
                    #{index + 1}
                    {index === 0 && (
                      <span className='px-2 py-1 text-xs rounded-full bg-yellow-400 text-white'>
                        🥇
                      </span>
                    )}
                    {index === 1 && (
                      <span className='px-2 py-1 text-xs rounded-full bg-gray-400 text-white'>
                        🥈
                      </span>
                    )}
                    {index === 2 && (
                      <span className='px-2 py-1 text-xs rounded-full bg-orange-400 text-white'>
                        🥉
                      </span>
                    )}
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

        {/* Modal */}
        {selectedUser && (
          <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
            <div className='bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative'>
              <button
                onClick={() => setSelectedUser(null)}
                className='absolute top-3 right-3 text-gray-500 hover:text-green-600'
              >
                ✖
              </button>
              <h3 className='text-2xl font-bold text-green-700 mb-4 text-center'>
                Player Details
              </h3>
              <div className='space-y-4 text-center'>
                <p className='text-lg font-medium text-gray-900'>
                  Name:{' '}
                  <span className='text-green-600'>{selectedUser.name}</span>
                </p>
                <p className='text-lg font-medium text-gray-900'>
                  Level:{' '}
                  <span className='text-green-600'>{selectedUser.level}</span>
                </p>
                <p className='text-lg font-medium text-gray-900'>
                  XP: <span className='text-green-600'>{selectedUser.xp}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
