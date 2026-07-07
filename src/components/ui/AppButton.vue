<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  block?: boolean
  icon?: string
  to?: string
  href?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  block: false,
})
</script>

<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    class="app-button"
    :class="[
      `app-button--${variant}`,
      `app-button--${size}`,
      { 'app-button--block': block, 'app-button--loading': loading },
    ]"
    :disabled="disabled || loading"
  >
    <v-icon v-if="icon" :icon="icon" class="app-button__icon" />
    <span v-if="$slots.default" class="app-button__text">
      <slot />
    </span>
  </component>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-semibold);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border-radius: var(--radius-lg);
}

.app-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.app-button--sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.app-button--md {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-base);
}

.app-button--lg {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-lg);
}

.app-button--primary {
  background-color: var(--color-primary);
  color: #ffffff;
}

.app-button--primary:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
}

.app-button--secondary {
  background-color: var(--color-secondary);
  color: #ffffff;
}

.app-button--secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-hover);
}

.app-button--outline {
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.app-button--outline:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: #ffffff;
}

.app-button--text {
  background-color: transparent;
  color: var(--color-primary);
}

.app-button--text:hover:not(:disabled) {
  background-color: var(--color-overlay);
}

.app-button--block {
  width: 100%;
}

.app-button--loading {
  position: relative;
}

.app-button__icon {
  font-size: 1.25em;
}
</style>
