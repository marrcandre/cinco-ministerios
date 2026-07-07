<script setup lang="ts">
import type { Question, Ministry } from '@/domain/types'
import QuestionOption from './QuestionOption.vue'

interface Props {
  question: Question
  selectedMinistry: Ministry | null
  disabled?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  select: [ministry: Ministry]
}>()
</script>

<template>
  <div class="question-card">
    <h2 class="question-card__text">{{ question.text }}</h2>
    <div class="question-card__options">
      <QuestionOption
        v-for="option in question.options"
        :key="option.ministry"
        :text="option.text"
        :ministry="option.ministry"
        :selected="selectedMinistry === option.ministry"
        :disabled="disabled"
        @select="emit('select', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.question-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.question-card__text {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}

.question-card__options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
</style>
