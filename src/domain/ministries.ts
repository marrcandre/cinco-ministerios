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
    description:
      'Pessoas com afinidade com o ministério de apóstolo costumam ter visão ampla e disposição para abrir novos caminhos. Elas enxergam possibilidades onde outros veem dificuldades e sentem alegria em iniciar projetos, mobilizar equipes e expandir o alcance do Reino. Geralmente são inquietas com o que já está estabelecido e buscam constantemente novos horizontes. Sua liderança é marcada pela capacidade de inspirar outros a seguirem rumos desconhecidos com fé e determinação. Não se trata de um título ou posição, mas de uma maneira de servir que valoriza o crescimento e a multiplicação.',
  },
  {
    id: 'profeta',
    name: 'Profeta',
    description:
      'Pessoas com afinidade com o ministério de profeta geralmente possuem sensibilidade espiritual aguçada e um desejo profundo de buscar a presença de Deus. Elas valorizam a verdade e a transparência, e percebem com clareza aquilo que precisa ser corrigido ou ajustado. Costumam ter um olhar atento para os sinais ao redor e se sentem responsáveis por trazer encorajamento, consolo e direção. Sua contribuição em comunidade é ajudar os outros a manterem o foco no essencial e a não se desviarem do propósito. É um ministério que flui na simplicidade de quem deseja ver a vontade de Deus revelada e vivida.',
  },
  {
    id: 'evangelista',
    name: 'Evangelista',
    description:
      'Pessoas com afinidade com o ministério de evangelista costumam ter um coração transbordante de amor pelas pessoas. Elas se sentem à vontade para conversar com desconhecidos, fazer novos contatos e compartilhar sua fé de forma natural e acolhedora. Sua alegria é contagiante e elas acreditam que cada pessoa é importante para Deus. Têm facilidade em aproximar visitantes, integrar novos membros e criar pontes entre diferentes grupos. O que as move é ver vidas sendo transformadas e pessoas descobrindo o amor de Cristo. Sua energia e entusiasmo inspiram outros a também se envolverem na missão.',
  },
  {
    id: 'pastor',
    name: 'Pastor',
    description:
      'Pessoas com afinidade com o ministério de pastor geralmente se importam genuinamente com o bem-estar e o crescimento espiritual dos outros. Elas têm paciência para ouvir, acolher e caminhar ao lado de quem está passando por dificuldades. Valorizam a unidade, o discipulado e o acompanhamento próximo, e sentem alegria em ver pessoas amadurecendo na fé. Costumam ser referência de confiança e segurança dentro de sua comunidade. Seu cuidado se expressa em gestos simples, presença constante e disposição para servir sem buscar reconhecimento. É um ministério que edifica e fortalece o corpo de Cristo com afeto e dedicação.',
  },
  {
    id: 'mestre',
    name: 'Mestre',
    description:
      'Pessoas com afinidade com o ministério de mestre geralmente sentem grande prazer em estudar as Escrituras e compreender a profundidade da Palavra. Elas gostam de organizar o conhecimento, buscar clareza doutrinária e compartilhar o que aprendem de forma didática e acessível. Sua contribuição é ajudar outros a firmarem suas convicções com base sólida e entenderem a verdade bíblica com mais profundidade. São naturalmente cuidadosas com os detalhes e valorizam a precisão no ensino. Seu amor pelo conhecimento não é intelectualismo, mas um desejo sincero de ver vidas transformadas pela compreensão da Palavra.',
  },
]

export function getMinistry(id: Ministry): MinistryInfo {
  const m = MINISTRIES.find((m) => m.id === id)
  if (!m) throw new Error(`Ministry not found: ${id}`)
  return m
}
