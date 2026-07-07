import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue],

  test: {
    environment: 'jsdom',

    coverage: {
      enabled: true,
      provider: 'v8',

      reporter: [
        'text',
        'html',
        'lcov'
      ],

      reportsDirectory: './coverage',

      exclude: [
        'node_modules/',
        'dist/',
        'coverage/',
        'src/tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/main.ts'
      ]
    }
  }
})