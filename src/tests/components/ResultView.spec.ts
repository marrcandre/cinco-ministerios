import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import ResultView from '@/views/ResultView.vue'
import { saveResult } from '@/infrastructure/storage/local-storage'
import type { TestResult } from '@/application/calculate-result'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div/>' } },
    { path: '/result', name: 'result', component: ResultView },
  ],
})

beforeEach(() => {
  localStorage.clear()
})

describe('ResultView', () => {
  it('should show empty state when no result is saved', () => {
    const wrapper = mount(ResultView, {
      global: { plugins: [router] },
    })
    expect(wrapper.text()).toContain('Nenhum resultado')
  })

  it('should render ranking when result exists', async () => {
    const result: TestResult = {
      scores: [
        { ministry: 'pastor', score: 6 },
        { ministry: 'mestre', score: 5 },
        { ministry: 'evangelista', score: 4 },
        { ministry: 'profeta', score: 3 },
        { ministry: 'apostolo', score: 2 },
      ],
    }
    saveResult(result)

    const wrapper = mount(ResultView, {
      global: { plugins: [router] },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Ranking dos seus ministérios')
  })

  it('should show singular section title when there is a clear winner', async () => {
    const result: TestResult = {
      scores: [
        { ministry: 'pastor', score: 6 },
        { ministry: 'mestre', score: 5 },
        { ministry: 'evangelista', score: 4 },
        { ministry: 'profeta', score: 3 },
        { ministry: 'apostolo', score: 2 },
      ],
    }
    saveResult(result)

    const wrapper = mount(ResultView, {
      global: { plugins: [router] },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Conheça seu ministério em destaque')
    expect(wrapper.text()).not.toContain('Conheça seus ministérios em destaque')
  })

  it('should show plural section title on a tie', async () => {
    const result: TestResult = {
      scores: [
        { ministry: 'pastor', score: 3 },
        { ministry: 'mestre', score: 3 },
        { ministry: 'evangelista', score: 2 },
        { ministry: 'profeta', score: 2 },
        { ministry: 'apostolo', score: 2 },
      ],
    }
    saveResult(result)

    const wrapper = mount(ResultView, {
      global: { plugins: [router] },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Conheça seus ministérios em destaque')
  })
})
