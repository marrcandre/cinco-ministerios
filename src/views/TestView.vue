<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTestSession } from '@/composables/useTestSession'
import QuestionCard from '@/components/test/QuestionCard.vue'
import TestProgress from '@/components/test/TestProgress.vue'
import AppButton from '@/components/ui/AppButton.vue'
import LoadingState from '@/components/ui/LoadingState.vue'
import type { Ministry } from '@/domain/types'

const router = useRouter()
const route = useRoute()

const {
  session,
  currentIndex,
  currentQuestion,
  totalQuestions,
  isLastQuestion,
  isFirstQuestion,
  hasExistingSession,
  startNew,
  loadExisting,
  answer,
  next,
  previous,
  complete,
} = useTestSession()

const ready = ref(false)
const transitioning = ref(false)
let autoAdvanceTimer: ReturnType<typeof setTimeout> | null = null

const selectedMinistry = computed(() => {
  const q = currentQuestion.value
  if (!q) return null
  return session.value.answers.find((a) => a.questionId === q.id)?.ministry ?? null
})

const hasAnsweredCurrent = computed(() => {
  const q = currentQuestion.value
  if (!q) return false
  return session.value.answers.some((a) => a.questionId === q.id)
})

onMounted(() => {
  if (route.query.continue === 'true' && hasExistingSession.value) {
    loadExisting()
  } else {
    startNew()
  }
  ready.value = true
})

onUnmounted(() => {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer)
    autoAdvanceTimer = null
  }
})

function cancelAutoAdvance() {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer)
    autoAdvanceTimer = null
  }
}

function handleSelect(ministry: Ministry) {
  if (transitioning.value) return

  transitioning.value = true
  answer(ministry)

  const delay = currentIndex.value === totalQuestions - 1 ? 600 : 400

  autoAdvanceTimer = setTimeout(() => {
    autoAdvanceTimer = null
    if (currentIndex.value === totalQuestions - 1) {
      complete()
      router.push('/result')
    } else {
      next()
      transitioning.value = false
    }
  }, delay)
}

function goToNext() {
  if (hasAnsweredCurrent.value) {
    cancelAutoAdvance()
    if (isLastQuestion.value) {
      complete()
      router.push('/result')
    } else {
      next()
    }
  }
}

function goToPrevious() {
  cancelAutoAdvance()
  previous()
  transitioning.value = false
}
</script>

<template>
  <div class="test-view">
    <LoadingState v-if="!ready" />

    <template v-else-if="currentQuestion">
      <TestProgress
        :current="currentIndex + 1"
        :total="totalQuestions"
      />

      <QuestionCard
        :question="currentQuestion"
        :selected-ministry="selectedMinistry"
        :disabled="transitioning"
        @select="handleSelect"
      />

      <div class="navigation">
        <AppButton
          v-if="!isFirstQuestion"
          variant="outline"
          @click="goToPrevious"
        >
          Anterior
        </AppButton>

        <AppButton
          variant="primary"
          :disabled="!hasAnsweredCurrent"
          @click="goToNext"
        >
          {{ isLastQuestion ? 'Finalizar' : 'Próxima' }}
        </AppButton>
      </div>
    </template>
  </div>
</template>

<style scoped>
.test-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-3xl);
  padding-top: var(--spacing-lg);
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-md);
}
</style>
