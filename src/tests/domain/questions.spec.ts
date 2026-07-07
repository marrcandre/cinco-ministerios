import { describe, it, expect } from 'vitest'
import { QUESTIONS, getQuestionById } from '@/domain/questions'
import { MINISTRIES } from '@/domain/ministries'
import type { Ministry } from '@/domain/types'

const GABARITO: Record<number, Ministry[]> = {
  1: ['mestre', 'evangelista', 'pastor', 'profeta', 'apostolo'],
  2: ['pastor', 'apostolo', 'mestre', 'profeta', 'evangelista'],
  3: ['apostolo', 'pastor', 'evangelista', 'profeta', 'mestre'],
  4: ['pastor', 'evangelista', 'apostolo', 'profeta', 'mestre'],
  5: ['evangelista', 'pastor', 'mestre', 'profeta', 'apostolo'],
  6: ['pastor', 'mestre', 'evangelista', 'profeta', 'apostolo'],
}

describe('questions', () => {
  const ministryIds = MINISTRIES.map((m) => m.id)

  it('should have exactly 6 questions', () => {
    expect(QUESTIONS).toHaveLength(6)
  })

  it('should have sequential unique ids starting from 1', () => {
    const ids = QUESTIONS.map((q) => q.id)
    expect(ids).toEqual([1, 2, 3, 4, 5, 6])
  })

  it.each(QUESTIONS)('question $id should have exactly 5 options', (question) => {
    expect(question.options).toHaveLength(5)
  })

  it.each(QUESTIONS)('question $id should have text defined', (question) => {
    expect(question.text).toBeTruthy()
    expect(typeof question.text).toBe('string')
  })

  it.each(QUESTIONS)(
    'question $id should have options with text and a valid ministry',
    (question) => {
      for (const option of question.options) {
        expect(option.text).toBeTruthy()
        expect(typeof option.text).toBe('string')
        expect(ministryIds).toContain(option.ministry)
      }
    },
  )

  it.each(QUESTIONS)(
    'question $id should have each ministry exactly once among its options',
    (question) => {
      const optionMinistries = question.options.map((o) => o.ministry).sort()
      expect(optionMinistries).toEqual([...ministryIds].sort())
    },
  )

  it('should return a question by id', () => {
    const q = getQuestionById(3)
    expect(q).toBeDefined()
    expect(q?.id).toBe(3)
  })

  it('should return undefined for non-existent id', () => {
    const q = getQuestionById(99)
    expect(q).toBeUndefined()
  })

  it('all ministry references should exist in MINISTRIES data', () => {
    const usedMinistries = new Set<Ministry>()

    for (const question of QUESTIONS) {
      for (const option of question.options) {
        usedMinistries.add(option.ministry)
      }
    }

    for (const id of usedMinistries) {
      const found = MINISTRIES.find((m) => m.id === id)
      expect(found).toBeDefined()
    }
  })

  describe('gabarito oficial', () => {
    it.each([1, 2, 3, 4, 5, 6] as const)(
      'question %d should have correct ministry at each position',
      (questionId) => {
        const question = getQuestionById(questionId)
        expect(question).toBeDefined()

        const expected = GABARITO[questionId]
        const actual = question!.options.map((o) => o.ministry)

        expect(actual).toEqual(expected)
      },
    )

    it('question 1 option A should be mestre', () => {
      expect(QUESTIONS[0].options[0].ministry).toBe('mestre')
    })

    it('question 1 option B should be evangelista', () => {
      expect(QUESTIONS[0].options[1].ministry).toBe('evangelista')
    })

    it('question 1 option C should be pastor', () => {
      expect(QUESTIONS[0].options[2].ministry).toBe('pastor')
    })

    it('question 1 option D should be profeta', () => {
      expect(QUESTIONS[0].options[3].ministry).toBe('profeta')
    })

    it('question 1 option E should be apostolo', () => {
      expect(QUESTIONS[0].options[4].ministry).toBe('apostolo')
    })
  })
})
