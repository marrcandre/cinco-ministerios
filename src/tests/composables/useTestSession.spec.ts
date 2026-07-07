import { describe, it, expect, beforeEach } from 'vitest'
import { useTestSession } from '@/composables/useTestSession'
import { clearAll } from '@/infrastructure/storage/local-storage'

beforeEach(() => {
  clearAll()
})

describe('useTestSession', () => {
  it('should start with no existing session', () => {
    const { hasExistingSession } = useTestSession()
    expect(hasExistingSession.value).toBe(false)
  })

  it('should start with current question at index 0', () => {
    const { currentIndex, currentQuestion } = useTestSession()
    expect(currentIndex.value).toBe(0)
    expect(currentQuestion.value).toBeDefined()
    expect(currentQuestion.value.id).toBe(1)
  })

  it('should have 6 total questions', () => {
    const { totalQuestions } = useTestSession()
    expect(totalQuestions).toBe(6)
  })

  it('should mark first question correctly', () => {
    const { isFirstQuestion, isLastQuestion } = useTestSession()
    expect(isFirstQuestion.value).toBe(true)
    expect(isLastQuestion.value).toBe(false)
  })

  it('should answer a question', () => {
    const session = useTestSession()
    session.answer('mestre')
    expect(session.session.value.answers).toHaveLength(1)
    expect(session.session.value.answers[0].ministry).toBe('mestre')
  })

  it('should persist session after answering', () => {
    const session = useTestSession()
    session.answer('mestre')

    const { session: restored } = useTestSession()
    expect(restored.value.answers).toHaveLength(1)
  })

  it('should advance to next question after answer', () => {
    const session = useTestSession()
    session.answer('mestre')
    session.next()
    expect(session.currentIndex.value).toBe(1)
  })

  it('should answer and advance through all questions', () => {
    const session = useTestSession()
    const ministries = ['mestre', 'pastor', 'apostolo', 'profeta', 'evangelista', 'mestre']

    for (let i = 0; i < ministries.length; i++) {
      expect(session.currentQuestion.value).toBeDefined()
      session.answer(ministries[i] as never)
      if (i < ministries.length - 1) {
        session.next()
      }
    }

    expect(session.completed.value).toBe(true)
  })

  it('should complete and calculate result on last question', () => {
    const session = useTestSession()
    const ministries = ['mestre', 'pastor', 'apostolo', 'profeta', 'evangelista', 'mestre']

    for (let i = 0; i < ministries.length; i++) {
      session.answer(ministries[i] as never)
      if (i < ministries.length - 1) {
        session.next()
      }
    }

    session.complete()
    expect(session.result.value).toBeDefined()
    expect(session.result.value!.scores).toHaveLength(5)
  })

  it('should clear session after complete', () => {
    const session = useTestSession()
    const ministries = ['mestre', 'pastor', 'apostolo', 'profeta', 'evangelista', 'mestre']

    for (let i = 0; i < ministries.length; i++) {
      session.answer(ministries[i] as never)
      if (i < ministries.length - 1) {
        session.next()
      }
    }

    session.complete()

    const { session: freshSession } = useTestSession()
    expect(freshSession.value.answers).toHaveLength(0)
  })

  it('should keep result after complete across sessions', () => {
    const session = useTestSession()
    const ministries = ['mestre', 'pastor', 'apostolo', 'profeta', 'evangelista', 'mestre']

    for (let i = 0; i < ministries.length; i++) {
      session.answer(ministries[i] as never)
      if (i < ministries.length - 1) {
        session.next()
      }
    }

    session.complete()

    const { result } = useTestSession()
    expect(result.value).toBeDefined()
    expect(result.value!.scores).toHaveLength(5)
  })

  it('should go back to previous question', () => {
    const session = useTestSession()
    session.answer('mestre')
    session.next()
    session.previous()
    expect(session.currentIndex.value).toBe(0)
  })

  it('should not go before first question', () => {
    const session = useTestSession()
    session.previous()
    expect(session.currentIndex.value).toBe(0)
  })

  it('should not go after last question', () => {
    const session = useTestSession()
    for (let i = 0; i < 10; i++) {
      session.next()
    }
    expect(session.currentIndex.value).toBe(5)
  })

  it('should start new test clearing previous state', () => {
    const session = useTestSession()
    session.answer('mestre')
    expect(session.session.value.answers).toHaveLength(1)

    session.startNew()
    expect(session.session.value.answers).toHaveLength(0)
    expect(session.currentIndex.value).toBe(0)
    expect(session.result.value).toBeNull()
  })

  it('should detect existing session after saving', () => {
    const session = useTestSession()
    session.answer('mestre')

    const { hasExistingSession } = useTestSession()
    expect(hasExistingSession.value).toBe(true)
  })

  it('should load existing session', () => {
    const session = useTestSession()
    session.answer('mestre')

    const loaded = useTestSession()
    loaded.loadExisting()
    expect(loaded.session.value.answers).toHaveLength(1)
    expect(loaded.session.value.answers[0].ministry).toBe('mestre')
  })

  it('should have correct progress percentage', () => {
    const session = useTestSession()
    expect(session.progress.value).toBeCloseTo(16.67, 0)

    session.answer('mestre')
    session.next()
    expect(session.progress.value).toBeCloseTo(33.33, 0)
  })

  it('should replace existing answer when answering same question again', () => {
    const session = useTestSession()
    session.answer('mestre')
    session.answer('pastor')
    expect(session.session.value.answers).toHaveLength(1)
    expect(session.session.value.answers[0].ministry).toBe('pastor')
  })

  it('should persist replaced answer', () => {
    const session = useTestSession()
    session.answer('mestre')
    session.answer('pastor')

    const { session: restored } = useTestSession()
    expect(restored.value.answers).toHaveLength(1)
    expect(restored.value.answers[0].ministry).toBe('pastor')
  })

  it('should go back and change answer', () => {
    const session = useTestSession()
    session.answer('mestre')
    session.next()
    session.answer('pastor')
    session.previous()

    expect(session.currentIndex.value).toBe(0)
    expect(session.session.value.answers[0].ministry).toBe('mestre')

    session.answer('profeta')
    expect(session.session.value.answers).toHaveLength(2)
    expect(session.session.value.answers[0].ministry).toBe('profeta')
    expect(session.session.value.answers[1].ministry).toBe('pastor')
  })

  it('should retain other answers when changing one', () => {
    const session = useTestSession()
    session.answer('mestre')
    session.next()
    session.answer('pastor')
    session.next()
    session.answer('apostolo')
    session.previous()

    session.answer('evangelista')
    expect(session.session.value.answers).toHaveLength(3)
    expect(session.session.value.answers[0].ministry).toBe('mestre')
    expect(session.session.value.answers[1].ministry).toBe('evangelista')
    expect(session.session.value.answers[2].ministry).toBe('apostolo')
  })

  it('should complete correctly after changing answers', () => {
    const session = useTestSession()
    const ministries = ['mestre', 'pastor', 'apostolo', 'profeta', 'evangelista', 'mestre']

    for (let i = 0; i < ministries.length; i++) {
      session.answer(ministries[i] as never)
      if (i < ministries.length - 1) {
        session.next()
      }
    }

    session.previous()
    session.answer('pastor')

    session.complete()
    expect(session.result.value).toBeDefined()
    expect(session.result.value!.scores).toHaveLength(5)
  })
})
