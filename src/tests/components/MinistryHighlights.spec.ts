import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MinistryHighlights from '@/components/result/MinistryHighlights.vue'
import type { MinistryScore } from '@/domain/types'

describe('MinistryHighlights', () => {
  it('should show a single card when there is a clear winner', () => {
    const scores: MinistryScore[] = [
      { ministry: 'pastor', score: 6 },
      { ministry: 'mestre', score: 5 },
      { ministry: 'evangelista', score: 4 },
      { ministry: 'profeta', score: 3 },
      { ministry: 'apostolo', score: 2 },
    ]
    const wrapper = mount(MinistryHighlights, {
      props: { scores },
    })
    const cards = wrapper.findAll('.ministry-highlights__card')
    expect(cards).toHaveLength(1)
    expect(cards[0].text()).toContain('Pastor')
  })

  it('should show single-ministry affinity text when there is a clear winner', () => {
    const scores: MinistryScore[] = [
      { ministry: 'mestre', score: 5 },
      { ministry: 'pastor', score: 4 },
      { ministry: 'evangelista', score: 3 },
      { ministry: 'profeta', score: 2 },
      { ministry: 'apostolo', score: 1 },
    ]
    const wrapper = mount(MinistryHighlights, {
      props: { scores },
    })
    expect(wrapper.text()).toContain('Você demonstra maior afinidade com o ministério de')
    expect(wrapper.text()).toContain('Mestre')
    expect(wrapper.text()).not.toContain('afinidade semelhante')
  })

  it('should show tie intro when two ministries are tied', () => {
    const scores: MinistryScore[] = [
      { ministry: 'pastor', score: 3 },
      { ministry: 'mestre', score: 3 },
      { ministry: 'evangelista', score: 2 },
      { ministry: 'profeta', score: 2 },
      { ministry: 'apostolo', score: 2 },
    ]
    const wrapper = mount(MinistryHighlights, {
      props: { scores },
    })
    expect(wrapper.text()).toContain('Seu resultado indica afinidade semelhante com os seguintes ministérios')
  })

  it('should show two cards on a two-way tie', () => {
    const scores: MinistryScore[] = [
      { ministry: 'pastor', score: 3 },
      { ministry: 'mestre', score: 3 },
      { ministry: 'evangelista', score: 2 },
      { ministry: 'profeta', score: 2 },
      { ministry: 'apostolo', score: 2 },
    ]
    const wrapper = mount(MinistryHighlights, {
      props: { scores },
    })
    const cards = wrapper.findAll('.ministry-highlights__card')
    expect(cards).toHaveLength(2)
    expect(cards[0].text()).toContain('Pastor')
    expect(cards[1].text()).toContain('Mestre')
  })

  it('should show all five cards when all ministries tie', () => {
    const scores: MinistryScore[] = [
      { ministry: 'pastor', score: 1 },
      { ministry: 'mestre', score: 1 },
      { ministry: 'evangelista', score: 1 },
      { ministry: 'profeta', score: 1 },
      { ministry: 'apostolo', score: 1 },
    ]
    const wrapper = mount(MinistryHighlights, {
      props: { scores },
    })
    const cards = wrapper.findAll('.ministry-highlights__card')
    expect(cards).toHaveLength(5)
    expect(wrapper.text()).toContain('afinidade semelhante')
  })

  it('should show description for each highlighted ministry', () => {
    const scores: MinistryScore[] = [
      { ministry: 'pastor', score: 6 },
      { ministry: 'mestre', score: 5 },
      { ministry: 'evangelista', score: 4 },
      { ministry: 'profeta', score: 3 },
      { ministry: 'apostolo', score: 2 },
    ]
    const wrapper = mount(MinistryHighlights, {
      props: { scores },
    })
    const desc = wrapper.find('.ministry-highlights__description')
    expect(desc.text()).toBeTruthy()
  })
})
