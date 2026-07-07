<script setup lang="ts">
interface Props {
  icon?: string
  title: string
  message?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'mdi-inbox-outline',
})
</script>

<template>
  <div class="empty-state">
    <v-icon :icon="icon" class="empty-state__icon" size="64" />
    <h3 class="empty-state__title">{{ title }}</h3>
    <p v-if="message" class="empty-state__message">{{ message }}</p>
    <div v-if="$slots.action" class="empty-state__action">
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-md);
  text-align: center;
}

.empty-state__icon {
  color: var(--color-text-disabled);
  margin-bottom: var(--spacing-md);
}

.empty-state__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.empty-state__message {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  max-width: 400px;
}

.empty-state__action {
  margin-top: var(--spacing-lg);
}
</style>
