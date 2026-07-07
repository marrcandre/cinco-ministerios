import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MinistryHighlights from '@/components/result/MinistryHighlights.vue'
import type { MinistryScore } from '@/domain/types'

describe('MinistryHighlights', () => {
  it('should show a single top ministry when there is a clear winner', () => {
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
    expect(cards[0].find('.ministry-highlights__name').text()).toBe('Pastor')
  })

  it('should show multiple top ministries on a tie', () => {
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
    expect(cards[0].find('.ministry-highlights__name').text()).toBe('Pastor')
    expect(cards[1].find('.ministry-highlights__name').text()).toBe('Mestre')
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
