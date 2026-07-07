export type Ministry = 'apostolo' | 'profeta' | 'evangelista' | 'pastor' | 'mestre'

export interface Option {
  text: string
  ministry: Ministry
}

export interface Question {
  id: number
  text: string
  options: [Option, Option, Option, Option, Option]
}

export interface Answer {
  questionId: number
  ministry: Ministry
}

export interface MinistryScore {
  ministry: Ministry
  score: number
}
