import type { Answer, Ministry } from '@/domain/types'
import { QUESTIONS } from '@/domain/questions'
import { MINISTRIES } from '@/domain/ministries'

export interface Session {
  answers: Answer[]
}

const VALID_MINISTRIES = MINISTRIES.map((m) => m.id)

export function createSession(): Session {
  return { answers: [] }
}

export function addAnswer(session: Session, questionId: number, ministry: Ministry): Session {
  const question = QUESTIONS.find((q) => q.id === questionId)
  if (!question) {
    throw new Error(`Question ${questionId} does not exist`)
  }

  if (!VALID_MINISTRIES.includes(ministry)) {
    throw new Error(`Invalid ministry: "${ministry}"`)
  }

  const alreadyAnswered = session.answers.some((a) => a.questionId === questionId)
  if (alreadyAnswered) {
    throw new Error(`Question ${questionId} has already been answered`)
  }

  return {
    answers: [...session.answers, { questionId, ministry }],
  }
}

export function isCompleted(session: Session): boolean {
  const answeredIds = new Set(session.answers.map((a) => a.questionId))
  return QUESTIONS.every((q) => answeredIds.has(q.id))
}

export function getAnswers(session: Session): Answer[] {
  return [...session.answers]
}
