<script setup lang="ts">
interface Props {
  current: number
  total: number
}

defineProps<Props>()
</script>

<template>
  <div class="test-progress">
    <span class="test-progress__label">
      Pergunta {{ current }} de {{ total }}
    </span>
    <div class="test-progress__bar">
      <div
        class="test-progress__fill"
        :style="{ width: `${(current / total) * 100}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
.test-progress {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.test-progress__label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.test-progress__bar {
  width: 100%;
  height: 0.5rem;
  background-color: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.test-progress__fill {
  height: 100%;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
}
</style>
