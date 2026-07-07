import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { clearAll } from '@/infrastructure/storage/local-storage'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/test', name: 'test', component: { template: '<div/>' } },
    { path: '/result', name: 'result', component: { template: '<div/>' } },
  ],
})

beforeEach(() => {
  clearAll()
})

describe('HomeView', () => {
  it('should render the title', () => {
    const wrapper = shallowMount(HomeView, {
      global: { plugins: [router] },
    })
    expect(wrapper.text()).toContain('Cinco Ministérios')
  })

  it('should render the main message', () => {
    const wrapper = shallowMount(HomeView, {
      global: { plugins: [router] },
    })
    expect(wrapper.text()).toContain(
      'Descubra quais ministérios de Cristo fluem mais naturalmente através de você.',
    )
  })

  it('should render instructions about the test', () => {
    const wrapper = shallowMount(HomeView, {
      global: { plugins: [router] },
    })
    expect(wrapper.text()).toContain('6 perguntas')
    expect(wrapper.text()).toContain('primeiro impulso')
    expect(wrapper.text()).toContain('respostas certas ou erradas')
  })

  it('should have a start button', () => {
    const wrapper = shallowMount(HomeView, {
      global: { plugins: [router] },
    })
    const button = wrapper.findComponent({ name: 'AppButton' })
    expect(button.exists()).toBe(true)
  })
})
