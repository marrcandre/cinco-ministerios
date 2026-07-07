import { describe, it, expect } from 'vitest'
import { calculateScores, getTopMinistries } from '@/domain/scoring'
import type { Answer } from '@/domain/types'

describe('scoring', () => {
  it('should return zero for all ministries with no answers', () => {
    const result = calculateScores([])

    expect(result).toHaveLength(5)

    for (const score of result) {
      expect(score.score).toBe(0)
    }
  })

  it('should add 1 point to the correct ministry for a single answer', () => {
    const answers: Answer[] = [{ questionId: 1, ministry: 'apostolo' }]
    const result = calculateScores(answers)

    const apostolo = result.find((s) => s.ministry === 'apostolo')
    expect(apostolo?.score).toBe(1)

    for (const score of result) {
      if (score.ministry !== 'apostolo') {
        expect(score.score).toBe(0)
      }
    }
  })

  it('should accumulate points across multiple answers', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'apostolo' },
      { questionId: 2, ministry: 'apostolo' },
      { questionId: 3, ministry: 'profeta' },
    ]

    const result = calculateScores(answers)

    expect(result.find((s) => s.ministry === 'apostolo')?.score).toBe(2)
    expect(result.find((s) => s.ministry === 'profeta')?.score).toBe(1)
    expect(result.find((s) => s.ministry === 'evangelista')?.score).toBe(0)
    expect(result.find((s) => s.ministry === 'pastor')?.score).toBe(0)
    expect(result.find((s) => s.ministry === 'mestre')?.score).toBe(0)
  })

  it('should sort results by score descending', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'mestre' },
      { questionId: 2, ministry: 'mestre' },
      { questionId: 3, ministry: 'mestre' },
      { questionId: 4, ministry: 'pastor' },
      { questionId: 5, ministry: 'pastor' },
      { questionId: 6, ministry: 'evangelista' },
    ]

    const result = calculateScores(answers)

    expect(result[0].ministry).toBe('mestre')
    expect(result[0].score).toBe(3)
    expect(result[1].ministry).toBe('pastor')
    expect(result[1].score).toBe(2)
    expect(result[2].ministry).toBe('evangelista')
    expect(result[2].score).toBe(1)
  })

  it('should handle a full 6-answer test with one per ministry', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'apostolo' },
      { questionId: 2, ministry: 'profeta' },
      { questionId: 3, ministry: 'evangelista' },
      { questionId: 4, ministry: 'pastor' },
      { questionId: 5, ministry: 'mestre' },
      { questionId: 6, ministry: 'apostolo' },
    ]

    const result = calculateScores(answers)

    expect(result.find((s) => s.ministry === 'apostolo')?.score).toBe(2)
    expect(result.find((s) => s.ministry === 'profeta')?.score).toBe(1)
    expect(result.find((s) => s.ministry === 'evangelista')?.score).toBe(1)
    expect(result.find((s) => s.ministry === 'pastor')?.score).toBe(1)
    expect(result.find((s) => s.ministry === 'mestre')?.score).toBe(1)
  })

  it('should detect a tie', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'apostolo' },
      { questionId: 2, ministry: 'profeta' },
      { questionId: 3, ministry: 'apostolo' },
      { questionId: 4, ministry: 'profeta' },
    ]

    const result = calculateScores(answers)
    const top = getTopMinistries(result)

    expect(top).toHaveLength(2)
    expect(top.map((s) => s.ministry).sort()).toEqual(['apostolo', 'profeta'])
  })

  it('should return all ministries with same score when all tie', () => {
    const answers: Answer[] = [
      { questionId: 1, ministry: 'apostolo' },
      { questionId: 2, ministry: 'profeta' },
      { questionId: 3, ministry: 'evangelista' },
      { questionId: 4, ministry: 'pastor' },
      { questionId: 5, ministry: 'mestre' },
    ]

    const result = calculateScores(answers)
    const top = getTopMinistries(result)

    expect(top).toHaveLength(5)
  })

  it('should return empty array for getTopMinistries with empty scores', () => {
    const top = getTopMinistries([])
    expect(top).toHaveLength(0)
  })
})
