<script setup lang="ts">
interface Props {
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 32,
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    class="app-logo"
    aria-hidden="true"
  >
    <path d="M29 17 h6 v12 h12 v6 h-12 v12 h-6 v-12 h-12 v-6 h12 z" />
    <circle cx="32" cy="12" r="2.5" />
    <circle cx="51" cy="25.1" r="2.5" />
    <circle cx="43.8" cy="48.2" r="2.5" />
    <circle cx="20.2" cy="48.2" r="2.5" />
    <circle cx="13" cy="25.1" r="2.5" />
  </svg>
</template>

<style scoped>
.app-logo {
  flex-shrink: 0;
  fill: var(--color-secondary);
}
</style>
