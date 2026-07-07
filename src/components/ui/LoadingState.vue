<script setup lang="ts">
interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: 'Carregando...',
})
</script>

<template>
  <div class="loading-state">
    <v-progress-circular indeterminate color="primary" size="48" />
    <p class="loading-state__text">{{ text }}</p>
  </div>
</template>

<style scoped>
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-md);
  gap: var(--spacing-md);
}

.loading-state__text {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}
</style>
