import type { Answer, Ministry, MinistryScore } from './types'

const ALL_MINISTRIES: Ministry[] = ['apostolo', 'profeta', 'evangelista', 'pastor', 'mestre']

export function calculateScores(answers: Answer[]): MinistryScore[] {
  const scores: Record<Ministry, number> = {
    apostolo: 0,
    profeta: 0,
    evangelista: 0,
    pastor: 0,
    mestre: 0,
  }

  for (const answer of answers) {
    if (scores[answer.ministry] !== undefined) {
      scores[answer.ministry]++
    }
  }

  return ALL_MINISTRIES.map((ministry) => ({
    ministry,
    score: scores[ministry],
  })).sort((a, b) => b.score - a.score)
}

export function getTopMinistries(scores: MinistryScore[]): MinistryScore[] {
  if (scores.length === 0) return []

  const maxScore = scores[0].score
  return scores.filter((s) => s.score === maxScore)
}
