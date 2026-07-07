import type { Ministry } from './types'

export interface MinistryInfo {
  id: Ministry
  name: string
  description: string
}

export const MINISTRIES: MinistryInfo[] = [
  {
    id: 'apostolo',
    name: 'Apóstolo',
    description: 'Visão, pioneirismo, fundação de novas obras.',
  },
  {
    id: 'profeta',
    name: 'Profeta',
    description: 'Revelação, discernimento, correção e verdade.',
  },
  {
    id: 'evangelista',
    name: 'Evangelista',
    description: 'Paixão por almas, comunicação, mobilização.',
  },
  {
    id: 'pastor',
    name: 'Pastor',
    description: 'Pastoreio, cuidado, aconselhamento, edificação.',
  },
  {
    id: 'mestre',
    name: 'Mestre',
    description: 'Ensino, doutrina, estudo, precisão teológica.',
  },
]

export function getMinistry(id: Ministry): MinistryInfo {
  const m = MINISTRIES.find((m) => m.id === id)
  if (!m) throw new Error(`Ministry not found: ${id}`)
  return m
}
