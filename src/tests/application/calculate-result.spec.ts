import { describe, it, expect } from 'vitest'
import { calculateResult } from '@/application/calculate-result'
import type { Answer } from '@/domain/types'

describe('calculateResult', () => {
  it('should return zero scores for empty answers', () => {
    const result = calculateResult([])
    expect(result.scores).toHaveLength(5)
    for (const score of result.scores) {
      expect(score.score).toBe(0)
    }
  })

  it('should calculate scores for a complete test', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'mestre' },
      { questionId: 2, ministry: 'mestre' },
      { questionId: 3, ministry: 'mestre' },
      { questionId: 4, ministry: 'pastor' },
      { questionId: 5, ministry: 'pastor' },
      { questionId: 6, ministry: 'evangelista' },
    ]

    const result = calculateResult(answers)

    expect(result.scores.find((s) => s.ministry === 'mestre')?.score).toBe(3)
    expect(result.scores.find((s) => s.ministry === 'pastor')?.score).toBe(2)
    expect(result.scores.find((s) => s.ministry === 'evangelista')?.score).toBe(1)
    expect(result.scores.find((s) => s.ministry === 'apostolo')?.score).toBe(0)
    expect(result.scores.find((s) => s.ministry === 'profeta')?.score).toBe(0)
  })

  it('should return scores sorted descending', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'apostolo' },
      { questionId: 2, ministry: 'apostolo' },
      { questionId: 3, ministry: 'apostolo' },
      { questionId: 4, ministry: 'profeta' },
      { questionId: 5, ministry: 'profeta' },
      { questionId: 6, ministry: 'mestre' },
    ]

    const result = calculateResult(answers)

    expect(result.scores[0].ministry).toBe('apostolo')
    expect(result.scores[0].score).toBe(3)
    expect(result.scores[1].ministry).toBe('profeta')
    expect(result.scores[1].score).toBe(2)
    expect(result.scores[2].ministry).toBe('mestre')
    expect(result.scores[2].score).toBe(1)
  })

  it('should handle ties correctly', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'apostolo' },
      { questionId: 2, ministry: 'pastor' },
      { questionId: 3, ministry: 'apostolo' },
      { questionId: 4, ministry: 'pastor' },
    ]

    const result = calculateResult(answers)

    expect(result.scores[0].score).toBe(2)
    expect(result.scores[1].score).toBe(2)
    expect(result.scores[0].ministry).toBe('apostolo')
    expect(result.scores[1].ministry).toBe('pastor')
  })

  it('should return only domain types, no UI data', () => {
    const answers: Answer[] = [{ questionId: 1, ministry: 'mestre' }]
    const result = calculateResult(answers)

    expect(result).not.toHaveProperty('ministryNames')
    expect(result).not.toHaveProperty('descriptions')
    expect(result).not.toHaveProperty('formattedText')

    for (const score of result.scores) {
      expect(score).toHaveProperty('ministry')
      expect(score).toHaveProperty('score')
      expect(Object.keys(score)).toEqual(['ministry', 'score'])
    }
  })
})
