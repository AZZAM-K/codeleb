"use client"
import { useState, useEffect, useRef } from "react"
import { useUser, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs"
import { createOrUpdateUser } from "@/lib/actions"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const { user, isSignedIn } = useUser()
  const [showLogin, setShowLogin] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isSignedIn && user) {
      createOrUpdateUser({
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName || user.username || `user-${user.id}`,
        image: user.imageUrl || "",
      })
        .then(res => console.log("User saved:", res))
        .catch(err => console.error(err))
    }
  }, [isSignedIn, user])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowLogin(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className='bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-lg'>
      <div className='text-2xl font-extrabold tracking-tight'>MyApp</div>

      <div className='flex gap-3 items-center relative'>
        <SignedIn>
          <div className='flex items-center gap-2'>
            <Image
              src={user?.imageUrl || "/default-avatar.png"}
              alt='Profile'
              className='w-9 h-9 rounded-full border-2 border-green-500'
            />
            <span className='font-semibold'>
              {user?.fullName || user?.username || "User"}
            </span>

            <SignOutButton>
              <button className='px-3 py-1 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition'>
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </SignedIn>

        <SignedOut>
          <Link
            href={"/login"}
            className='px-3 py-1 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition'
          >
            Login
          </Link>

          <Link
            href={"sign-up"}
            className='px-3 py-1 bg-green-600 rounded-lg hover:bg-green-700 transition text-white'
          >
            Sign Up
          </Link>
        </SignedOut>
      </div>
    </nav>
  )
}
