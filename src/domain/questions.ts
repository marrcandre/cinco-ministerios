import type { Question } from './types'

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Em qual situação você se sente mais realizado?',
    options: [
      {
        text: 'Estudando e explicando um texto bíblico em profundidade.',
        ministry: 'mestre',
      },
      {
        text: 'Compartilhando sua fé com alguém que não conhece a Deus.',
        ministry: 'evangelista',
      },
      {
        text: 'Cuidando de pessoas que estão passando por dificuldades.',
        ministry: 'pastor',
      },
      {
        text: 'Revelando uma verdade que ninguém havia percebido.',
        ministry: 'profeta',
      },
      {
        text: 'Liderando um novo projeto ou obra do zero.',
        ministry: 'apostolo',
      },
    ],
  },
  {
    id: 2,
    text: 'Como as pessoas geralmente descrevem você?',
    options: [
      {
        text: 'Acolhedor e paciente.',
        ministry: 'pastor',
      },
      {
        text: 'Visionário e empreendedor.',
        ministry: 'apostolo',
      },
      {
        text: 'Analítico e detalhista.',
        ministry: 'mestre',
      },
      {
        text: 'Sincero e direto ao ponto.',
        ministry: 'profeta',
      },
      {
        text: 'Comunicativo e inspirador.',
        ministry: 'evangelista',
      },
    ],
  },
  {
    id: 3,
    text: 'O que mais motiva você no ministério?',
    options: [
      {
        text: 'Estabelecer novas bases e estruturas.',
        ministry: 'apostolo',
      },
      {
        text: 'Ver pessoas crescendo em maturidade e fé.',
        ministry: 'pastor',
      },
      {
        text: 'Ver almas sendo salvas e vidas transformadas.',
        ministry: 'evangelista',
      },
      {
        text: 'Ver a verdade sendo restaurada e proclamada.',
        ministry: 'profeta',
      },
      {
        text: 'Ver pessoas compreendendo bem a Palavra.',
        ministry: 'mestre',
      },
    ],
  },
  {
    id: 4,
    text: 'Qual é a sua maior contribuição em uma equipe?',
    options: [
      {
        text: 'Unidade e harmonia entre os membros.',
        ministry: 'pastor',
      },
      {
        text: 'Entusiasmo e capacidade de mobilizar outros.',
        ministry: 'evangelista',
      },
      {
        text: 'Direção estratégica e visão de futuro.',
        ministry: 'apostolo',
      },
      {
        text: 'Discernimento e correção de rumo.',
        ministry: 'profeta',
      },
      {
        text: 'Fundamento bíblico e clareza doutrinária.',
        ministry: 'mestre',
      },
    ],
  },
  {
    id: 5,
    text: 'O que você mais valoriza em um líder?',
    options: [
      {
        text: 'Fé contagiante e paixão pelas almas.',
        ministry: 'evangelista',
      },
      {
        text: 'Amor genuíno e cuidado com as pessoas.',
        ministry: 'pastor',
      },
      {
        text: 'Sabedoria e precisão no ensino.',
        ministry: 'mestre',
      },
      {
        text: 'Integridade e coragem para falar a verdade.',
        ministry: 'profeta',
      },
      {
        text: 'Visão clara e capacidade de executar.',
        ministry: 'apostolo',
      },
    ],
  },
  {
    id: 6,
    text: 'Qual área de serviço mais se alinha com seus dons?',
    options: [
      {
        text: 'Discipulado e aconselhamento pastoral.',
        ministry: 'pastor',
      },
      {
        text: 'Ensino e preparação de conteúdo teológico.',
        ministry: 'mestre',
      },
      {
        text: 'Evangelismo e missões transculturais.',
        ministry: 'evangelista',
      },
      {
        text: 'Ministério profético e vida de oração.',
        ministry: 'profeta',
      },
      {
        text: 'Plantar igrejas ou iniciar novos ministérios.',
        ministry: 'apostolo',
      },
    ],
  },
]

export function getQuestionById(id: number): Question | undefined {
  return QUESTIONS.find((q) => q.id === id)
}
