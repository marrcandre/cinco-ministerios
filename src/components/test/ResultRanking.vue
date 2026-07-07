<script setup lang="ts">
import type { Ministry, MinistryScore } from '@/domain/types'
import { MINISTRIES } from '@/domain/ministries'
import { getTopMinistries } from '@/domain/scoring'

interface Props {
  scores: MinistryScore[]
}

const props = defineProps<Props>()

const topMinistries = getTopMinistries(props.scores)
const topIds = new Set(topMinistries.map((s) => s.ministry))

function getMinistryName(ministry: string): string {
  const m = MINISTRIES.find((m) => m.id === ministry)
  return m?.name ?? ministry
}

function isTop(ministry: Ministry): boolean {
  return topIds.has(ministry)
}
</script>

<template>
  <div class="result-ranking">
    <div
      v-for="(score, index) in scores"
      :key="score.ministry"
      class="result-ranking__item"
      :class="{ 'result-ranking__item--top': isTop(score.ministry) }"
    >
      <div class="result-ranking__position">
        {{ index + 1 }}º
      </div>
      <span class="result-ranking__name">{{ getMinistryName(score.ministry) }}</span>
      <span class="result-ranking__score">{{ score.score }} pontos</span>
    </div>
  </div>
</template>

<style scoped>
.result-ranking {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.result-ranking__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}

.result-ranking__item--top {
  border-color: var(--color-secondary);
  background-color: color-mix(in srgb, var(--color-secondary) 6%, var(--color-surface));
}

.result-ranking__position {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
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

.result-ranking__name {
  flex: 1;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.result-ranking__score {
  flex-shrink: 0;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
</style>
