"use client"
import { SignIn } from "@clerk/nextjs"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#16a34a", 
            colorBackground: "#ffffff",
            colorText: "#111827",
            borderRadius: "1rem",
          },
          layout: {
            socialButtonsVariant: "iconButton",
          },
        }}
        afterSignInUrl="/"
        afterSignUpUrl="/"
      />
    </div>
  )
}
