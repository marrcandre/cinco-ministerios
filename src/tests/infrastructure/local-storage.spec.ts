import { describe, it, expect, beforeEach } from 'vitest'
import {
  saveSession,
  loadSession,
  clearSession,
  saveResult,
  loadResult,
  clearResult,
  clearAll,
} from '@/infrastructure/storage/local-storage'
import type { Session } from '@/application/test-session'
import type { TestResult } from '@/application/calculate-result'

beforeEach(() => {
  clearAll()
})

describe('session storage', () => {
  it('should return null when no session is saved', () => {
    expect(loadSession()).toBeNull()
  })

  it('should save and load a session', () => {
    const session: Session = {
      answers: [{ questionId: 1, ministry: 'mestre' }],
    }
    saveSession(session)
    const loaded = loadSession()
    expect(loaded).toEqual(session)
  })

  it('should save and load a session with multiple answers', () => {
    const session: Session = {
      answers: [
        { questionId: 1, ministry: 'mestre' },
        { questionId: 2, ministry: 'pastor' },
        { questionId: 3, ministry: 'apostolo' },
      ],
    }
    saveSession(session)
    expect(loadSession()).toEqual(session)
  })

  it('should clear a saved session', () => {
    const session: Session = {
      answers: [{ questionId: 1, ministry: 'evangelista' }],
    }
    saveSession(session)
    clearSession()
    expect(loadSession()).toBeNull()
  })

  it('should save an empty session', () => {
    const session: Session = { answers: [] }
    saveSession(session)
    expect(loadSession()).toEqual(session)
  })
})

describe('result storage', () => {
  it('should return null when no result is saved', () => {
    expect(loadResult()).toBeNull()
  })

  it('should save and load a result', () => {
    const result: TestResult = {
      scores: [
        { ministry: 'apostolo', score: 3 },
        { ministry: 'pastor', score: 2 },
        { ministry: 'mestre', score: 1 },
        { ministry: 'evangelista', score: 0 },
        { ministry: 'profeta', score: 0 },
      ],
    }
    saveResult(result)
    expect(loadResult()).toEqual(result)
  })

  it('should clear a saved result', () => {
    const result: TestResult = {
      scores: [{ ministry: 'mestre', score: 6 }],
    }
    saveResult(result)
    clearResult()
    expect(loadResult()).toBeNull()
  })
})

describe('clearAll', () => {
  it('should clear both session and result', () => {
    saveSession({ answers: [{ questionId: 1, ministry: 'mestre' }] })
    saveResult({ scores: [{ ministry: 'mestre', score: 1 }] })

    clearAll()

    expect(loadSession()).toBeNull()
    expect(loadResult()).toBeNull()
  })
})

describe('edge cases', () => {
  it('should handle invalid JSON in localStorage gracefully', () => {
    localStorage.setItem('cinco-ministerios:session', 'not-valid-json')
    expect(loadSession()).toBeNull()
  })

  it('should handle null value in localStorage gracefully', () => {
    localStorage.setItem('cinco-ministerios:result', 'null')
    expect(loadResult()).toBeNull()
  })

  it('should handle empty string in localStorage gracefully', () => {
    localStorage.setItem('cinco-ministerios:session', '')
    expect(loadSession()).toBeNull()
  })

  it('should not throw when saving with circular reference', () => {
    const circular: Record<string, unknown> = { self: null }
    circular.self = circular
    expect(() =>
      localStorage.setItem('test', JSON.stringify(circular)),
    ).toThrow()
  })
})
