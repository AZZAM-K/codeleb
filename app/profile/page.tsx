'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  BarChart2,
  Award,
  Zap,
  CheckCircle,
  Trophy,
  Activity,
} from 'lucide-react'

import { getProfileUser, updateUserLevel } from '@/lib/actions'

import { SafeUser } from '@/types'

export default function ProfilePage() {
  const [user, setUser] = useState<SafeUser | null>(null)

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getProfileUser()

        const newLevel = await updateUserLevel(data.id, data.xp)
        data.level = newLevel

        setUser(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchUser()
  }, [])

  const formatDate = (date: Date | null | undefined) => {
    if (!date) return 'N/A'
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  function getXPForLevel(level: number) {
    let xp = 100
    for (let i = 1; i < level; i++) {
      xp = Math.floor(xp * 1.2)
    }
    return xp
  }

  function getLevelFromTotalXP(totalXP: number) {
    let level = 1
    let xpLeft = totalXP
    let xpNeeded = getXPForLevel(level)

    while (xpLeft >= xpNeeded) {
      xpLeft -= xpNeeded
      level++
      xpNeeded = getXPForLevel(level)
    }

    return level
  }

  function getCurrentLevelXP(totalXP: number) {
    let level = 1
    let xpLeft = totalXP
    let xpNeeded = getXPForLevel(level)

    while (xpLeft >= xpNeeded) {
      xpLeft -= xpNeeded
      level++
      xpNeeded = getXPForLevel(level)
    }

    return xpLeft
  }

  function getLevelProgress(totalXP: number) {
    const level = getLevelFromTotalXP(totalXP)
    const currentXP = getCurrentLevelXP(totalXP)
    const xpNeeded = getXPForLevel(level)
    return Math.max(Math.min((currentXP / xpNeeded) * 100, 100), 0)
  }

  function getXPToNextLevel(totalXP: number) {
    const level = getLevelFromTotalXP(totalXP)
    const currentXP = getCurrentLevelXP(totalXP)
    const xpNeeded = getXPForLevel(level)
    return Math.max(xpNeeded - currentXP, 0)
  }

  if (!user)
    return <p className='text-center text-xl mt-20 text-gray-500'>Loading...</p>

  const rank = (() => {
    const lvl = user.level
    if (lvl >= 90) return 'LEGEND'
    if (lvl >= 70) return 'MASTER'
    if (lvl >= 50) return 'EXPERT'
    if (lvl >= 30) return 'SENIOR'
    if (lvl >= 15) return 'MID'
    if (lvl >= 3) return 'JUNIOR'
    return 'BEGINNER'
  })()

  const rankBorder = {
    BEGINNER: '',
    JUNIOR: 'ring-2 ring-blue-500',
    MID: 'ring-2 ring-green-500',
    SENIOR: 'ring-2 ring-purple-500',
    EXPERT: 'ring-4 ring-yellow-400 shadow-yellow-400 animate-pulse',
    MASTER: 'ring-4 ring-red-400 shadow-red-400 animate-pulse',
    LEGEND: 'ring-4 ring-indigo-500 shadow-indigo-500 animate-pulse',
  }[rank]

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 text-gray-800 p-6 sm:p-10'>
      <header className='flex flex-col items-center justify-center text-center mb-10'>
        <div
          className={`w-32 h-32 rounded-full bg-white/60 backdrop-blur-lg flex items-center justify-center text-4xl text-gray-500 mb-4 border-4 border-white shadow-xl ${rankBorder}`}
        >
          <Image
            src={user.image}
            alt={user.name}
            width={120}
            height={120}
            className='rounded-full object-cover'
          />
        </div>
        <h1 className='text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-lg'>
          {user.name}
        </h1>
        <p className='text-lg text-gray-600 mt-2'>{user.email}</p>
        <span className='mt-2 px-4 py-1 rounded-full bg-white/70 text-sm font-semibold text-gray-700 shadow'>
          Rank: <span className='text-purple-600'>{rank}</span>
        </span>
      </header>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 border border-purple-200'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='p-3 rounded-full bg-purple-100 text-purple-600 shadow'>
              <Award size={28} />
            </div>
            <h2 className='text-xl font-bold text-gray-800'>Level</h2>
          </div>
          <p className='text-6xl font-black text-purple-500'>{user.level}</p>
          <div className='w-full md:h-3 h-6 bg-purple-100 rounded-full mt-4 shadow-inner'>
            <div className='w-full h-3 bg-purple-100 rounded-full mt-4 shadow-inner'>
              <div className='w-full h-3 bg-purple-100 rounded-full mt-4 shadow-inner'>
                <div className='w-full h-3 bg-purple-100 rounded-full mt-4 shadow-inner'>
                  <div className='w-full h-3 bg-purple-100 rounded-full mt-4 shadow-inner'>
                    <div
                      className='md:h-3 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500'
                      style={{ width: `${getLevelProgress(user.xp)}%` }}
                    ></div>
                    <p className='text-sm text-gray-500 md:py-1 text-center'>
                      {getXPToNextLevel(user.xp)} XP to next level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 border border-blue-200'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='p-3 rounded-full bg-blue-100 text-blue-600 shadow'>
              <BarChart2 size={28} />
            </div>
            <h2 className='text-xl font-bold text-gray-800'>Total XP</h2>
          </div>
          <p className='text-6xl font-black text-blue-500'>{user.xp}</p>
        </div>

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 border border-green-200'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='p-3 rounded-full bg-green-100 text-green-600 shadow'>
              <Trophy size={28} />
            </div>
            <h2 className='text-xl font-bold text-gray-800'>Global Rank</h2>
          </div>
          <p className='text-4xl font-black text-green-500'>#{rank}</p>
        </div>

        <div className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 border border-orange-200'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='p-3 rounded-full bg-orange-100 text-orange-600 shadow'>
              <Zap size={28} />
            </div>
            <h2 className='text-xl font-bold text-gray-800'>Current Streak</h2>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='text-6xl font-black text-orange-500'>
              {user.streak} days
            </p>
            <p className='text-sm text-gray-500 mt-2 text-center'>
              Last Studied: {formatDate(user.lastStudiedAt)}
            </p>
          </div>
        </div>
      </section>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <section
          className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100'
          style={{ maxHeight: '400px', overflowY: 'auto' }}
        >
          <h2 className='text-3xl font-bold text-gray-900 flex items-center gap-3 mb-6'>
            <Activity size={28} className='text-blue-500' /> Section Completions
          </h2>
          <ul className='space-y-4'>
            {user.sectionCompletions.length === 0 && (
              <li className='text-gray-500 text-center py-8'>
                No section complete
              </li>
            )}
            {user.sectionCompletions.map(sc => (
              <li
                key={sc.id}
                className='bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 flex justify-between items-center shadow'
              >
                <div className='flex flex-col'>
                  <span className='text-lg font-semibold text-gray-800'>
                    {sc.section.title}
                  </span>
                  <div className='flex items-center gap-2 mt-1 text-sm text-gray-600'>
                    <span className='text-xs font-medium text-gray-500'>
                      Course: {sc.studyPlan.title} -
                    </span>
                    <span className='flex items-center gap-1 text-gray-500'>
                      <CheckCircle size={14} /> Completed:{' '}
                      {sc.completedAt ? formatDate(sc.completedAt) : 'Not yet'}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section
          className='bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-green-100'
          style={{ maxHeight: '400px', overflowY: 'auto' }}
        >
          <h2 className='text-3xl font-bold text-gray-900 flex items-center gap-3 mb-6'>
            <Trophy size={28} className='text-green-500' /> Challenge
            Completions
          </h2>
          <ul className='space-y-4'>
            {user.challengeCompletions.length === 0 ? (
              <li className='text-gray-500 text-center py-8'>
                No challenge complete
              </li>
            ) : (
              user.challengeCompletions.map(cc => (
                <li
                  key={cc.id}
                  className='bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg p-4 flex justify-between items-center shadow'
                >
                  <div className='flex flex-col'>
                    <span className='text-lg font-semibold text-gray-800'>
                      {cc.challenge.title}
                    </span>
                    <div className='flex items-center gap-2 mt-1 text-sm text-gray-600'>
                      <span className='text-xs font-medium text-gray-500'>
                        Course: {cc.studyPlan.title} -
                      </span>
                      <span className='flex items-center gap-1 text-gray-500'>
                        <CheckCircle size={14} /> Completed:{' '}
                        {cc.completedAt
                          ? formatDate(cc.completedAt)
                          : 'Not yet'}
                      </span>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
    </div>
  )
}
