<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <header class="page-header">
    <h1 class="page-header__title">{{ title }}</h1>
    <p v-if="description" class="page-header__description">
      {{ description }}
    </p>
  </header>
</template>

<style scoped>
.page-header {
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
}

.page-header__title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1.2;
}

.page-header__description {
  margin-top: var(--spacing-sm);
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}
</style>
