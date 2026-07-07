<script setup lang="ts">
import type { MinistryScore } from '@/domain/types'
import { getMinistry } from '@/domain/ministries'
import { getTopMinistries } from '@/domain/scoring'

interface Props {
  scores: MinistryScore[]
}

const props = defineProps<Props>()

const topMinistries = getTopMinistries(props.scores)
</script>

<template>
  <div class="ministry-highlights">
    <div
      v-for="item in topMinistries"
      :key="item.ministry"
      class="ministry-highlights__card"
    >
      <span class="ministry-highlights__name">
        {{ getMinistry(item.ministry).name }}
      </span>
      <p class="ministry-highlights__description">
        {{ getMinistry(item.ministry).description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.ministry-highlights {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.ministry-highlights__card {
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}

.ministry-highlights__name {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: var(--color-primary);
}

.ministry-highlights__description {
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}
</style>
