<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'
import AppLogo from '@/components/ui/AppLogo.vue'

const { resolvedTheme, setTheme } = useTheme()

const nextTheme = computed(() => {
  if (resolvedTheme.value === 'dark') return 'light'
  return 'dark'
})

function toggleTheme() {
  setTheme(nextTheme.value)
}
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <router-link to="/" class="app-header__brand">
        <AppLogo :size="28" />
        <span>Cinco Ministérios</span>
      </router-link>

      <nav class="app-header__nav">
        <router-link to="/" class="app-header__nav-link">Início</router-link>
        <router-link to="/sobre" class="app-header__nav-link">Sobre</router-link>
      </nav>

      <button class="app-header__toggle" :title="`Modo ${nextTheme}`" @click="toggleTheme">
        <v-icon
          :icon="resolvedTheme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'"
        />
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: var(--spacing-sm) var(--spacing-md);
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-left: auto;
  margin-right: var(--spacing-sm);
}

.app-header__nav-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.app-header__nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-overlay);
}

.app-header__nav-link.router-link-active {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.app-header__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: var(--radius-full);
  background-color: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.app-header__toggle:hover {
  background-color: var(--color-overlay);
  color: var(--color-text-primary);
}
</style>
