<script setup lang="ts">
import type { MinistryScore } from '@/domain/types'
import { MINISTRIES } from '@/domain/ministries'

interface Props {
  scores: MinistryScore[]
}

defineProps<Props>()

function getMinistryName(ministry: string): string {
  const m = MINISTRIES.find((m) => m.id === ministry)
  return m?.name ?? ministry
}

function getMinistryDescription(ministry: string): string {
  const m = MINISTRIES.find((m) => m.id === ministry)
  return m?.description ?? ''
}
</script>

<template>
  <div class="result-ranking">
    <div
      v-for="(score, index) in scores"
      :key="score.ministry"
      class="result-ranking__item"
      :class="{ 'result-ranking__item--top': index === 0 }"
    >
      <div class="result-ranking__position">{{ index + 1 }}°</div>
      <div class="result-ranking__info">
        <span class="result-ranking__name">{{ getMinistryName(score.ministry) }}</span>
        <span class="result-ranking__description">{{ getMinistryDescription(score.ministry) }}</span>
      </div>
      <div class="result-ranking__score">
        <div
          class="result-ranking__score-bar"
          :style="{ width: `${(score.score / scores[0].score) * 100}%` }"
        />
        <span class="result-ranking__score-value">{{ score.score }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-ranking {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.result-ranking__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;
}

.result-ranking__item--top {
  border-color: var(--color-secondary);
  background-color: color-mix(in srgb, var(--color-secondary) 6%, var(--color-surface));
}

.result-ranking__position {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background-color: var(--color-border);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.result-ranking__item--top .result-ranking__position {
  background-color: var(--color-secondary);
  color: #ffffff;
}

.result-ranking__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.result-ranking__name {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.result-ranking__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.result-ranking__score {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 5rem;
}

.result-ranking__score-bar {
  height: 0.5rem;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}

.result-ranking__item--top .result-ranking__score-bar {
  background-color: var(--color-secondary);
}

.result-ranking__score-value {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  min-width: 1.5rem;
  text-align: right;
}
</style>
