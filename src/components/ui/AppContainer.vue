<script setup lang="ts">
interface Props {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

withDefaults(defineProps<Props>(), {
  maxWidth: 'lg',
})
</script>

<template>
  <div class="app-container" :class="`app-container--${maxWidth}`">
    <slot />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  margin: 0 auto;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
}

.app-container--sm {
  max-width: 640px;
}

.app-container--md {
  max-width: 768px;
}

.app-container--lg {
  max-width: 1024px;
}

.app-container--xl {
  max-width: 1280px;
}

.app-container--full {
  max-width: 100%;
}
</style>
