<script setup lang="ts">
import { computed } from 'vue'
import type { MinistryScore } from '@/domain/types'
import { getMinistry } from '@/domain/ministries'
import { getTopMinistries } from '@/domain/scoring'

interface Props {
  scores: MinistryScore[]
}

const props = defineProps<Props>()

const topMinistries = getTopMinistries(props.scores)
const hasMultiple = computed(() => topMinistries.length > 1)
</script>

<template>
  <div class="ministry-highlights">
    <template v-if="hasMultiple">
      <p class="ministry-highlights__intro">
        Seu resultado indica afinidade semelhante com os seguintes ministérios:
      </p>
    </template>

    <div
      v-for="item in topMinistries"
      :key="item.ministry"
      class="ministry-highlights__card"
    >
      <p v-if="!hasMultiple" class="ministry-highlights__affinity">
        Você demonstra maior afinidade com o ministério de
        <strong>{{ getMinistry(item.ministry).name }}</strong>.
      </p>
      <p v-else class="ministry-highlights__name">
        {{ getMinistry(item.ministry).name }}
      </p>
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

.ministry-highlights__intro {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-relaxed);
  margin-bottom: calc(-1 * var(--spacing-xs));
}

.ministry-highlights__card {
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}

.ministry-highlights__affinity {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-xs);
}

.ministry-highlights__name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.ministry-highlights__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
</style>
