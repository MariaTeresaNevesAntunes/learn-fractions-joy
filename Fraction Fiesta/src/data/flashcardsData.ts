export interface Flashcard {
  id: string;
  moduleId: string;
  front: string;
  back: string;
  category: string;
}

export const flashcards: Flashcard[] = [
  // Conceitos Básicos
  {
    id: 'fc-1',
    moduleId: 'module-1',
    front: 'O que é o NUMERADOR?',
    back: 'O número de cima da fração. Indica quantas partes temos do todo.',
    category: 'Conceitos Básicos',
  },
  {
    id: 'fc-2',
    moduleId: 'module-1',
    front: 'O que é o DENOMINADOR?',
    back: 'O número de baixo da fração. Indica em quantas partes iguais o todo foi dividido.',
    category: 'Conceitos Básicos',
  },
  {
    id: 'fc-3',
    moduleId: 'module-2',
    front: 'O que é uma FRAÇÃO PRÓPRIA?',
    back: 'Fração onde o numerador é MENOR que o denominador. Exemplo: 2/5, 3/4',
    category: 'Tipos de Frações',
  },
  {
    id: 'fc-4',
    moduleId: 'module-2',
    front: 'O que é uma FRAÇÃO IMPRÓPRIA?',
    back: 'Fração onde o numerador é MAIOR ou IGUAL ao denominador. Exemplo: 7/3, 5/5',
    category: 'Tipos de Frações',
  },
  {
    id: 'fc-5',
    moduleId: 'module-2',
    front: 'O que é uma FRAÇÃO APARENTE?',
    back: 'Fração imprópria que resulta em número inteiro. O numerador é múltiplo do denominador. Exemplo: 8/4 = 2',
    category: 'Tipos de Frações',
  },
  // Equivalência e Simplificação
  {
    id: 'fc-6',
    moduleId: 'module-3',
    front: 'Como encontrar FRAÇÕES EQUIVALENTES?',
    back: 'Multiplicando ou dividindo numerador E denominador pelo MESMO número. Exemplo: 1/2 = 2/4 = 3/6',
    category: 'Equivalência',
  },
  {
    id: 'fc-7',
    moduleId: 'module-3',
    front: 'Como SIMPLIFICAR uma fração?',
    back: 'Dividir numerador e denominador pelo MDC (Máximo Divisor Comum). Exemplo: 6/9 ÷ 3 = 2/3',
    category: 'Equivalência',
  },
  {
    id: 'fc-8',
    moduleId: 'module-3',
    front: 'O que é FRAÇÃO IRREDUTÍVEL?',
    back: 'Fração que não pode mais ser simplificada. MDC entre numerador e denominador é 1.',
    category: 'Equivalência',
  },
  // Comparação
  {
    id: 'fc-9',
    moduleId: 'module-4',
    front: 'Como comparar frações com MESMO DENOMINADOR?',
    back: 'A fração com MAIOR numerador é a maior. Exemplo: 5/8 > 3/8',
    category: 'Comparação',
  },
  {
    id: 'fc-10',
    moduleId: 'module-4',
    front: 'Como comparar frações com MESMO NUMERADOR?',
    back: 'A fração com MENOR denominador é a maior. Exemplo: 3/4 > 3/7',
    category: 'Comparação',
  },
  {
    id: 'fc-11',
    moduleId: 'module-4',
    front: 'Como comparar frações com denominadores DIFERENTES?',
    back: 'Encontrar o MMC dos denominadores e converter para frações equivalentes.',
    category: 'Comparação',
  },
  // Operações
  {
    id: 'fc-12',
    moduleId: 'module-5',
    front: 'Como SOMAR frações com mesmo denominador?',
    back: 'Somar os numeradores e manter o denominador. Exemplo: 2/5 + 1/5 = 3/5',
    category: 'Operações',
  },
  {
    id: 'fc-13',
    moduleId: 'module-5',
    front: 'Como SOMAR frações com denominadores diferentes?',
    back: '1) Encontrar MMC dos denominadores\n2) Converter para frações equivalentes\n3) Somar os numeradores',
    category: 'Operações',
  },
  {
    id: 'fc-14',
    moduleId: 'module-6',
    front: 'Como MULTIPLICAR frações?',
    back: 'Multiplicar numerador × numerador e denominador × denominador. Exemplo: 2/3 × 4/5 = 8/15',
    category: 'Operações',
  },
  {
    id: 'fc-15',
    moduleId: 'module-6',
    front: 'Como DIVIDIR frações?',
    back: 'Multiplicar a primeira pelo INVERSO da segunda. Exemplo: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12',
    category: 'Operações',
  },
  // Números Mistos
  {
    id: 'fc-16',
    moduleId: 'module-7',
    front: 'O que é um NÚMERO MISTO?',
    back: 'Número formado por parte inteira + fração própria. Exemplo: 2 e 3/4',
    category: 'Números Mistos',
  },
  {
    id: 'fc-17',
    moduleId: 'module-7',
    front: 'Como converter NÚMERO MISTO para fração imprópria?',
    back: '(Inteiro × Denominador + Numerador) / Denominador. Exemplo: 3 e 2/5 = (3×5+2)/5 = 17/5',
    category: 'Números Mistos',
  },
  {
    id: 'fc-18',
    moduleId: 'module-7',
    front: 'Como converter FRAÇÃO IMPRÓPRIA para número misto?',
    back: 'Dividir numerador pelo denominador. Quociente = inteiro, Resto = novo numerador. Exemplo: 11/4 = 2 e 3/4',
    category: 'Números Mistos',
  },
  // Aplicações
  {
    id: 'fc-19',
    moduleId: 'module-8',
    front: 'Como converter PORCENTAGEM para fração?',
    back: 'Colocar sobre 100 e simplificar. Exemplo: 75% = 75/100 = 3/4',
    category: 'Aplicações',
  },
  {
    id: 'fc-20',
    moduleId: 'module-8',
    front: 'Como calcular a FRAÇÃO de um número?',
    back: 'Multiplicar o número pela fração. Exemplo: 2/5 de 100 = 2/5 × 100 = 40',
    category: 'Aplicações',
  },
];
