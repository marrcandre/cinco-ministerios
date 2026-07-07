<script setup lang="ts">
interface Props {
  padding?: 'sm' | 'md' | 'lg' | 'none'
  variant?: 'elevated' | 'outlined' | 'flat'
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
  variant: 'elevated',
})
</script>

<template>
  <div class="app-card" :class="[`app-card--${variant}`, `app-card--padding-${padding}`]">
    <slot />
  </div>
</template>

<style scoped>
.app-card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  transition: box-shadow 0.2s ease;
}

.app-card--elevated {
  box-shadow: var(--shadow-md);
}

.app-card--outlined {
  border: 1px solid var(--color-border);
}

.app-card--flat {
  box-shadow: none;
}

.app-card--padding-sm {
  padding: var(--spacing-sm);
}

.app-card--padding-md {
  padding: var(--spacing-md);
}

.app-card--padding-lg {
  padding: var(--spacing-lg);
}

.app-card--padding-none {
  padding: 0;
}
</style>
