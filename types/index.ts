import { ExerciseType } from "@prisma/client"
import { Difficulty, ExerciseType } from '@prisma/client'

export type courseCard = {
  id: string
  description: string
  img: string
  title: string
}

export type SectionResponse = {
  id: string
  studyPlanId: string
  title: string
  order: number
  subsections: {
    id: string
    sectionId: string
    title: string
    content: string
    example: string
    xp?: number
  }[]
  exercises: {
    id: string
    sectionId: string
    type: ExerciseType
    question: string
    answer: string
    options: string[]
  }[]
  isCompleted: boolean
}

export type Exercise = {
  id: string
  type: "MCQ" | "TRUE_FALSE" | "FILL_BLANK"
  answer: string
  question: string
  options?: string[]
}
// types/user.ts
export interface SafeUser {
  id: string
  name: string
  email: string
  image: string
  level: number
  xp: number
  streak: number
  lastStudiedAt: Date | null
  rank: string
  sectionCompletions: {
    id: string
    completedAt: Date | null
    xpAdded?: boolean // ← اجعلها optional
    section: { id: string; title: string; order: number }
    studyPlan: { id: string; title: string }
  }[]

  challengeCompletions: {
    id: string
    completedAt: Date | null
    xpAdded?: boolean // ← اجعلها optional
    challenge: { id: string; title: string; difficulty: string; xp: number }
    studyPlan: { id: string; title: string }
  }[]
}
export type SafeUserWithProgress = SafeUser & {
  nextLevelXP: number
  progress: number

export type ChallengeResponse = {
  id: string
  title: string
  xp: number
  studyPlanId: string
  description: string
  language: string
  difficulty: Difficulty
  starterCode: string
  functionName: string
  examples: {
    challengeId: string
    id: string
    input: string
    output: string
  }[]
  isCompleted: boolean
}

export interface PistonExecuteRequest {
  language: string
  version: string
  files: {
    name: string
    content: string
  }[]
  stdin: string
}

export interface PistonExecuteResponse {
  language: string
  version: string
  run: {
    stdout: string
    stderr: string
    code: number
    signal: string | null
    output: string
  }
}
