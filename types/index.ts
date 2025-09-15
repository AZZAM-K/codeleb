import { ExerciseType } from '@prisma/client'

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
