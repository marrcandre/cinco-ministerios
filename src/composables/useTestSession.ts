import { ref, computed, readonly } from 'vue'
import {
  createSession,
  addAnswer,
  isCompleted as checkCompleted,
  getAnswers,
} from '@/application/test-session'
import { calculateResult } from '@/application/calculate-result'
import {
  saveSession,
  loadSession,
  saveResult,
  loadResult,
  clearAll,
  clearSession,
} from '@/infrastructure/storage/local-storage'
import { QUESTIONS } from '@/domain/questions'
import type { Ministry } from '@/domain/types'

export function useTestSession() {
  const saved = loadSession()
  const initialSession = saved ?? createSession()
  const initialIndex = saved ? saved.answers.length : 0

  const session = ref(initialSession)
  const currentIndex = ref(initialIndex)
  const result = ref(loadResult())

  const hasExistingSession = computed(() => saved !== null)

  const currentQuestion = computed(() => QUESTIONS[currentIndex.value])
  const totalQuestions = QUESTIONS.length
  const isLastQuestion = computed(() => currentIndex.value >= totalQuestions - 1)
  const isFirstQuestion = computed(() => currentIndex.value === 0)
  const progress = computed(() => ((currentIndex.value + 1) / totalQuestions) * 100)
  const completed = computed(() => checkCompleted(session.value))

  function startNew() {
    clearAll()
    session.value = createSession()
    currentIndex.value = 0
    result.value = null
  }

  function loadExisting() {
    const savedSession = loadSession()
    if (savedSession) {
      session.value = savedSession
      currentIndex.value = savedSession.answers.length
      result.value = null
    }
  }

  function answer(ministry: Ministry) {
    const question = QUESTIONS[currentIndex.value]
    const existing = session.value.answers.find((a) => a.questionId === question.id)
    if (existing) {
      session.value = {
        answers: session.value.answers.map((a) =>
          a.questionId === question.id ? { questionId: question.id, ministry } : a,
        ),
      }
    } else {
      session.value = addAnswer(session.value, question.id, ministry)
    }
    saveSession(session.value)
  }

  function next() {
    if (currentIndex.value < totalQuestions - 1) {
      currentIndex.value++
    }
  }

  function previous() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  function complete() {
    const answers = getAnswers(session.value)
    result.value = calculateResult(answers)
    saveResult(result.value)
    clearSession()
  }

  return {
    session: readonly(session),
    currentIndex: readonly(currentIndex),
    result: readonly(result),
    hasExistingSession,
    currentQuestion,
    totalQuestions,
    isLastQuestion,
    isFirstQuestion,
    progress,
    completed,
    startNew,
    loadExisting,
    answer,
    next,
    previous,
    complete,
  }
}
