import type { Session } from '@/application/test-session'
import type { TestResult } from '@/application/calculate-result'

const SESSION_KEY = 'cinco-ministerios:session'
const RESULT_KEY = 'cinco-ministerios:result'

function safeGetItem<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function safeSetItem(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage full or unavailable — silently fail
  }
}

function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    // Silently fail
  }
}

export function saveSession(session: Session): void {
  safeSetItem(SESSION_KEY, session)
}

export function loadSession(): Session | null {
  return safeGetItem<Session>(SESSION_KEY)
}

export function clearSession(): void {
  safeRemoveItem(SESSION_KEY)
}

export function saveResult(result: TestResult): void {
  safeSetItem(RESULT_KEY, result)
}

export function loadResult(): TestResult | null {
  return safeGetItem<TestResult>(RESULT_KEY)
}

export function clearResult(): void {
  safeRemoveItem(RESULT_KEY)
}

export function clearAll(): void {
  safeRemoveItem(SESSION_KEY)
  safeRemoveItem(RESULT_KEY)
}
