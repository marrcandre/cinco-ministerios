import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResultRanking from '@/components/test/ResultRanking.vue'
import type { MinistryScore } from '@/domain/types'

describe('ResultRanking', () => {
  const scores: MinistryScore[] = [
    { ministry: 'pastor', score: 6 },
    { ministry: 'mestre', score: 5 },
    { ministry: 'evangelista', score: 4 },
    { ministry: 'profeta', score: 3 },
    { ministry: 'apostolo', score: 2 },
  ]

  it('should render all 5 scores', () => {
    const wrapper = mount(ResultRanking, {
      props: { scores },
    })
    const items = wrapper.findAll('.result-ranking__item')
    expect(items).toHaveLength(5)
  })

  it('should keep the order received via props', () => {
    const wrapper = mount(ResultRanking, {
      props: { scores },
    })
    const names = wrapper.findAll('.result-ranking__name').map((el) => el.text())
    expect(names).toEqual(['Pastor', 'Mestre', 'Evangelista', 'Profeta', 'Apóstolo'])
  })

  it('should show the correct position for each item', () => {
    const wrapper = mount(ResultRanking, {
      props: { scores },
    })
    const positions = wrapper.findAll('.result-ranking__position').map((el) => el.text())
    expect(positions).toEqual(['1º', '2º', '3º', '4º', '5º'])
  })

  it('should show score with "pontos" suffix', () => {
    const wrapper = mount(ResultRanking, {
      props: { scores },
    })
    const scoreEls = wrapper.findAll('.result-ranking__score')
    expect(scoreEls[0].text()).toBe('6 pontos')
    expect(scoreEls[1].text()).toBe('5 pontos')
    expect(scoreEls[4].text()).toBe('2 pontos')
  })

  it('should highlight the first item', () => {
    const wrapper = mount(ResultRanking, {
      props: { scores },
    })
    const items = wrapper.findAll('.result-ranking__item')
    expect(items[0].classes()).toContain('result-ranking__item--top')
    expect(items[1].classes()).not.toContain('result-ranking__item--top')
  })
})
