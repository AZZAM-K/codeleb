'use server'

import { prisma } from '@/lib/prisma'

interface CreateUserParams {
  clerkId: string
  email: string
  name: string
  image?: string
}

export async function createOrUpdateUser(params: CreateUserParams) {
  const { clerkId, email, name, image } = params

  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    return prisma.user.update({
      where: { email },
      data: { clerkId, name, image: image ?? existingUser.image },
    })
  }

  return prisma.user.create({
    data: { clerkId, email, name, image: image ?? '' },
  })
}
