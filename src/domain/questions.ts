import type { Question } from './types'

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'O que você gosta de fazer no seu tempo livre?',
    options: [
      {
        text: 'Gosto de ler um bom livro',
        ministry: 'mestre',
      },
      {
        text: 'Gosto de estar com pessoas diferentes',
        ministry: 'evangelista',
      },
      {
        text: 'Gosto de estar com meus amigos e parentes',
        ministry: 'pastor',
      },
      {
        text: 'Gosto de tirar um tempo para contemplar a natureza e/ou ouvir a Deus',
        ministry: 'profeta',
      },
      {
        text: 'Gosto de pensar em novas estratégias',
        ministry: 'apostolo',
      },
    ],
  },
  {
    id: 2,
    text: 'Em caso de mudança de cidade, qual sua primeira reação?',
    options: [
      {
        text: 'Você fica triste por que você vai estar longe das pessoas que você via sempre',
        ministry: 'pastor',
      },
      {
        text: 'Você já começa a pensar em iniciar um GP na cidade em que você está indo',
        ministry: 'apostolo',
      },
      {
        text: 'Você começa a pesquisar sobre o lugar em que você está se mudando',
        ministry: 'mestre',
      },
      {
        text: 'Você pergunta para Deus o que ele tem pra esse novo tempo',
        ministry: 'profeta',
      },
      {
        text: 'Você já cria expectativa para as novas pessoas que você vai conhecer',
        ministry: 'evangelista',
      },
    ],
  },
  {
    id: 3,
    text: 'Seu GP vai multiplicar, quem é você?',
    options: [
      {
        text: 'A pessoa que está animada pois o reino está crescendo',
        ministry: 'apostolo',
      },
      {
        text: 'A pessoa que já está com saudades dos que não vão continuar com você',
        ministry: 'pastor',
      },
      {
        text: 'A pessoa que está pensando em que convidados trazer para a festa da multiplicação',
        ministry: 'evangelista',
      },
      {
        text: 'A pessoa que pensou que a lembrancinha pode ser uma palavra profética',
        ministry: 'profeta',
      },
      {
        text: 'A pessoa que está preocupada se todo GP entendeu a importância da multiplicação',
        ministry: 'mestre',
      },
    ],
  },
  {
    id: 4,
    text: 'No dia-a-dia do seu GP, quem é você?',
    options: [
      {
        text: 'Você é a pessoa que se preocupa se todos estão bem e se sentindo parte no GP',
        ministry: 'pastor',
      },
      {
        text: 'É a pessoa que está sempre preocupada em trazer visitantes e receber eles bem',
        ministry: 'evangelista',
      },
      {
        text: 'É a pessoa que está o tempo todo pensando em como manter o foco em Jesus no GP',
        ministry: 'apostolo',
      },
      {
        text: 'É a pessoa que sempre tenta trazer encorajamento, consolo e edificação para as pessoas do GP',
        ministry: 'profeta',
      },
      {
        text: 'Ou é a pessoa que está o tempo todo tentando buscar as respostas na palavra de Deus',
        ministry: 'mestre',
      },
    ],
  },
  {
    id: 5,
    text: 'Na celebração Siloé, quem é você?',
    options: [
      {
        text: 'A pessoa que está preocupada com as pessoas que estão nos visitando em recebê-los bem e se alguém se converte é a primeira a estar ali na frente com a pessoa.',
        ministry: 'evangelista',
      },
      {
        text: 'A pessoa preocupada se o seu GP está servindo, se todos vieram a celebração e se estão realmente vivendo o que está acontecendo.',
        ministry: 'pastor',
      },
      {
        text: 'A pessoa que está realmente interessada na palavra, anota tudo detalhadamente para depois conferir e colocar em prática.',
        ministry: 'mestre',
      },
      {
        text: 'A pessoa que vem para ouvir Deus, em tudo, desde a entrada até a saída, que entende a celebração como um encontro com Deus.',
        ministry: 'profeta',
      },
      {
        text: 'A pessoa que entra na celebração com uma incomodação santa, pensando em quantas outras pessoas precisavam viver e experimentar o que estamos vivendo, e como você pode fazer parte disso.',
        ministry: 'apostolo',
      },
    ],
  },
  {
    id: 6,
    text: 'Se te soltar no meio de um lugar desconhecido lotado, o que você faz?',
    options: [
      {
        text: 'Vai procurar um rosto conhecido',
        ministry: 'pastor',
      },
      {
        text: 'Pega seu celular pra se informar onde você está e como sair dali',
        ministry: 'mestre',
      },
      {
        text: 'Vai pedir informação para qualquer pessoa',
        ministry: 'evangelista',
      },
      {
        text: 'Vai orar pedindo ajuda para Deus',
        ministry: 'profeta',
      },
      {
        text: 'Vai pensar como você pode começar um movimento de Deus naquele lugar',
        ministry: 'apostolo',
      },
    ],
  },
]

export function getQuestionById(id: number): Question | undefined {
  return QUESTIONS.find((q) => q.id === id)
}
