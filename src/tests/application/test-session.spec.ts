import { describe, it, expect } from 'vitest'
import { createSession, addAnswer, isCompleted, getAnswers } from '@/application/test-session'

describe('TestSession', () => {
  describe('createSession', () => {
    it('should create an empty session', () => {
      const session = createSession()
      expect(session.answers).toEqual([])
    })

    it('should not be completed initially', () => {
      const session = createSession()
      expect(isCompleted(session)).toBe(false)
    })
  })

  describe('addAnswer', () => {
    it('should add a valid answer', () => {
      const session = createSession()
      const updated = addAnswer(session, 1, 'mestre')
      expect(updated.answers).toHaveLength(1)
      expect(updated.answers[0]).toEqual({ questionId: 1, ministry: 'mestre' })
    })

    it('should not mutate the original session', () => {
      const session = createSession()
      addAnswer(session, 1, 'mestre')
      expect(session.answers).toHaveLength(0)
    })

    it('should accumulate multiple answers', () => {
      let session = createSession()
      session = addAnswer(session, 1, 'mestre')
      session = addAnswer(session, 2, 'pastor')
      expect(session.answers).toHaveLength(2)
    })

    it('should reject answer for non-existent question', () => {
      const session = createSession()
      expect(() => addAnswer(session, 99, 'mestre')).toThrow(
        'Question 99 does not exist',
      )
    })

    it('should reject invalid ministry value', () => {
      const session = createSession()
      expect(() => addAnswer(session, 1, 'bispo' as never)).toThrow(
        'Invalid ministry: "bispo"',
      )
    })

    it('should reject duplicate answer for the same question', () => {
      let session = createSession()
      session = addAnswer(session, 1, 'mestre')
      expect(() => addAnswer(session, 1, 'apostolo')).toThrow(
        'has already been answered',
      )
    })

    it('should accept answers for all questions', () => {
      let session = createSession()
      session = addAnswer(session, 1, 'apostolo')
      session = addAnswer(session, 2, 'profeta')
      session = addAnswer(session, 3, 'evangelista')
      session = addAnswer(session, 4, 'pastor')
      session = addAnswer(session, 5, 'mestre')
      session = addAnswer(session, 6, 'apostolo')
      expect(session.answers).toHaveLength(6)
    })
  })

  describe('isCompleted', () => {
    it('should return false with no answers', () => {
      const session = createSession()
      expect(isCompleted(session)).toBe(false)
    })

    it('should return false with partial answers', () => {
      let session = createSession()
      session = addAnswer(session, 1, 'mestre')
      session = addAnswer(session, 2, 'pastor')
      expect(isCompleted(session)).toBe(false)
    })

    it('should return true when all 6 questions are answered', () => {
      let session = createSession()
      session = addAnswer(session, 1, 'mestre')
      session = addAnswer(session, 2, 'pastor')
      session = addAnswer(session, 3, 'apostolo')
      session = addAnswer(session, 4, 'pastor')
      session = addAnswer(session, 5, 'evangelista')
      session = addAnswer(session, 6, 'pastor')
      expect(isCompleted(session)).toBe(true)
    })

    it('should return false if only 5 questions are answered', () => {
      let session = createSession()
      for (let i = 1; i <= 5; i++) {
        session = addAnswer(session, i, 'apostolo')
      }
      expect(isCompleted(session)).toBe(false)
    })
  })

  describe('getAnswers', () => {
    it('should return a copy of the answers array', () => {
      let session = createSession()
      session = addAnswer(session, 1, 'mestre')
      const answers = getAnswers(session)
      expect(answers).toHaveLength(1)
      answers.push({ questionId: 99, ministry: 'apostolo' })
      expect(session.answers).toHaveLength(1)
    })

    it('should return empty array for new session', () => {
      const session = createSession()
      expect(getAnswers(session)).toEqual([])
    })
  })
})
