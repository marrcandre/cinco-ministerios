import { ref, watch, computed, onMounted } from 'vue'
import { useTheme as useVuetifyTheme } from 'vuetify'

type ThemeOption = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

const STORAGE_KEY = 'cinco-ministerios:theme'

const stored = localStorage.getItem(STORAGE_KEY) as ThemeOption | null
const current = ref<ThemeOption>(stored || 'system')

function getSystemPreference(): ResolvedTheme {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function resolveTheme(option: ThemeOption): ResolvedTheme {
  if (option === 'system') return getSystemPreference()
  return option
}

const resolvedTheme = computed<ResolvedTheme>(() => resolveTheme(current.value))

function applyTheme(theme: ResolvedTheme) {
  const html = document.documentElement
  if (theme === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

function setTheme(option: ThemeOption) {
  current.value = option
  localStorage.setItem(STORAGE_KEY, option)
}

let mediaQuery: MediaQueryList | null = null

export function useTheme() {
  const vuetifyTheme = useVuetifyTheme()

  function syncVuetify(theme: ResolvedTheme) {
    vuetifyTheme.global.name.value =
      theme === 'dark' ? 'cincoMinisteriosDark' : 'cincoMinisteriosLight'
  }

  watch(resolvedTheme, (theme) => {
    applyTheme(theme)
    syncVuetify(theme)
  })

  watch(current, (option) => {
    if (option === 'system' && !mediaQuery) {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', () => {
        if (current.value === 'system') {
          const resolved = getSystemPreference()
          applyTheme(resolved)
          syncVuetify(resolved)
        }
      })
    }
  })

  onMounted(() => {
    applyTheme(resolvedTheme.value)
    syncVuetify(resolvedTheme.value)

    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', () => {
      if (current.value === 'system') {
        const resolved = getSystemPreference()
        applyTheme(resolved)
        syncVuetify(resolved)
      }
    })
  })

  return {
    theme: current,
    resolvedTheme,
    setTheme,
    isDark: computed(() => resolvedTheme.value === 'dark'),
  }
}
