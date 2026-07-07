import { describe, it, expect } from 'vitest'
import { getMinistry, MINISTRIES } from '@/domain/ministries'

describe('getMinistry', () => {
  it('should return pastor data for pastor id', () => {
    const result = getMinistry('pastor')
    expect(result).toEqual({
      id: 'pastor',
      name: 'Pastor',
      description: expect.any(String),
    })
  })

  it('should return apostolo data for apostolo id', () => {
    const result = getMinistry('apostolo')
    expect(result.id).toBe('apostolo')
    expect(result.name).toBe('Apóstolo')
    expect(result.description).toBeTruthy()
  })

  it('should return profeta data for profeta id', () => {
    const result = getMinistry('profeta')
    expect(result.id).toBe('profeta')
    expect(result.name).toBe('Profeta')
    expect(result.description).toBeTruthy()
  })

  it('should return evangelista data for evangelista id', () => {
    const result = getMinistry('evangelista')
    expect(result.id).toBe('evangelista')
    expect(result.name).toBe('Evangelista')
    expect(result.description).toBeTruthy()
  })

  it('should return mestre data for mestre id', () => {
    const result = getMinistry('mestre')
    expect(result.id).toBe('mestre')
    expect(result.name).toBe('Mestre')
    expect(result.description).toBeTruthy()
  })

  it('should throw for invalid ministry id', () => {
    expect(() => getMinistry('bispo' as never)).toThrow(Error)
  })

  it('should throw with the invalid id in the error message', () => {
    expect(() => getMinistry('invalid' as never)).toThrow('invalid')
  })

  it('should not have slug field in ministry data', () => {
    for (const ministry of MINISTRIES) {
      expect(ministry).not.toHaveProperty('slug')
    }
  })
})
