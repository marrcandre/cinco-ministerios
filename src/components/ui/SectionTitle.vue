<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="section-title">
    <h2 class="section-title__title">{{ title }}</h2>
    <p v-if="subtitle" class="section-title__subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: var(--spacing-lg);
}

.section-title__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.section-title__subtitle {
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}
</style>
