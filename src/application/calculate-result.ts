import type { Answer, MinistryScore } from '@/domain/types'
import { calculateScores } from '@/domain/scoring'

export interface TestResult {
  scores: MinistryScore[]
}

export function calculateResult(answers: Answer[]): TestResult {
  const scores = calculateScores(answers)
  return { scores }
}
