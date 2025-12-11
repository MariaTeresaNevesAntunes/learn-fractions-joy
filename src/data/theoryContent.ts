export interface TheoryModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: {
    sections: {
      title: string;
      text: string;
      example?: {
        problem: string;
        solution: string;
      };
    }[];
  };
}

export const theoryModules: TheoryModule[] = [
  {
    id: 'module-1',
    title: 'O que são Frações?',
    description: 'Conceito fundamental e representação visual',
    icon: '🎯',
    content: {
      sections: [
        {
          title: 'Definição',
          text: 'Uma fração representa uma parte de um todo. É composta por dois números: o numerador (em cima) indica quantas partes temos, e o denominador (em baixo) indica em quantas partes o todo foi dividido.',
          example: {
            problem: 'Se uma pizza foi dividida em 8 partes iguais e você comeu 3, qual fração representa o que você comeu?',
            solution: '3/8 - O numerador é 3 (partes comidas) e o denominador é 8 (total de partes).',
          },
        },
        {
          title: 'Representação Visual',
          text: 'Frações podem ser representadas de várias formas: como partes de um círculo (pizza), barras divididas, ou pontos em uma reta numérica. Cada representação ajuda a visualizar o conceito de diferentes maneiras.',
        },
        {
          title: 'Leitura de Frações',
          text: 'Para ler uma fração, dizemos primeiro o numerador e depois o denominador com terminação específica: 1/2 = um meio, 1/3 = um terço, 1/4 = um quarto, 1/5 = um quinto, etc.',
        },
      ],
    },
  },
  {
    id: 'module-2',
    title: 'Tipos de Frações',
    description: 'Próprias, impróprias e aparentes',
    icon: '📊',
    content: {
      sections: [
        {
          title: 'Frações Próprias',
          text: 'São frações onde o numerador é menor que o denominador. Representam uma quantidade menor que 1 inteiro.',
          example: {
            problem: 'Exemplos de frações próprias',
            solution: '1/2, 3/4, 5/8, 2/7 - Em todas, o número de cima é menor que o de baixo.',
          },
        },
        {
          title: 'Frações Impróprias',
          text: 'São frações onde o numerador é maior ou igual ao denominador. Representam uma quantidade igual ou maior que 1 inteiro.',
          example: {
            problem: 'Exemplos de frações impróprias',
            solution: '5/3, 8/4, 11/5 - O número de cima é maior ou igual ao de baixo.',
          },
        },
        {
          title: 'Frações Aparentes',
          text: 'São frações impróprias especiais onde o numerador é múltiplo do denominador, resultando em um número inteiro.',
          example: {
            problem: 'Exemplos de frações aparentes',
            solution: '4/2 = 2, 9/3 = 3, 15/5 = 3 - Dividindo, obtemos números inteiros.',
          },
        },
      ],
    },
  },
  {
    id: 'module-3',
    title: 'Frações Equivalentes',
    description: 'Simplificação e equivalência',
    icon: '⚖️',
    content: {
      sections: [
        {
          title: 'O que são Frações Equivalentes?',
          text: 'Frações equivalentes são frações que representam a mesma quantidade, mesmo tendo numeradores e denominadores diferentes. Por exemplo, 1/2 e 2/4 representam a mesma parte.',
          example: {
            problem: 'Encontre uma fração equivalente a 2/3',
            solution: 'Multiplicando numerador e denominador por 2: 2×2/3×2 = 4/6. Portanto, 2/3 = 4/6.',
          },
        },
        {
          title: 'Simplificação de Frações',
          text: 'Simplificar uma fração significa encontrar uma fração equivalente com os menores números possíveis. Dividimos numerador e denominador pelo mesmo número (MDC).',
          example: {
            problem: 'Simplifique 12/18',
            solution: 'MDC(12,18) = 6. Dividindo: 12÷6/18÷6 = 2/3. A fração simplificada é 2/3.',
          },
        },
        {
          title: 'Fração Irredutível',
          text: 'Uma fração está na forma irredutível quando não pode mais ser simplificada, ou seja, o numerador e denominador só têm o número 1 como divisor comum.',
        },
      ],
    },
  },
  {
    id: 'module-4',
    title: 'Comparação de Frações',
    description: 'Ordenar e comparar frações',
    icon: '🔍',
    content: {
      sections: [
        {
          title: 'Mesmo Denominador',
          text: 'Quando duas frações têm o mesmo denominador, a maior é aquela com maior numerador. É simples: mais partes do mesmo tamanho = quantidade maior.',
          example: {
            problem: 'Compare 3/7 e 5/7',
            solution: 'Como 5 > 3, então 5/7 > 3/7.',
          },
        },
        {
          title: 'Mesmo Numerador',
          text: 'Quando duas frações têm o mesmo numerador, a maior é aquela com menor denominador. Quanto mais partes, menores elas são.',
          example: {
            problem: 'Compare 2/5 e 2/8',
            solution: 'Como 5 < 8, então 2/5 > 2/8. Dividir em menos partes = partes maiores.',
          },
        },
        {
          title: 'Denominadores Diferentes',
          text: 'Para comparar frações com denominadores diferentes, encontramos o MMC e convertemos ambas para frações equivalentes com mesmo denominador.',
          example: {
            problem: 'Compare 2/3 e 3/4',
            solution: 'MMC(3,4) = 12. 2/3 = 8/12 e 3/4 = 9/12. Como 9 > 8, então 3/4 > 2/3.',
          },
        },
      ],
    },
  },
  {
    id: 'module-5',
    title: 'Soma e Subtração',
    description: 'Operações básicas com frações',
    icon: '➕',
    content: {
      sections: [
        {
          title: 'Mesmo Denominador',
          text: 'Quando as frações têm o mesmo denominador, somamos ou subtraímos apenas os numeradores, mantendo o denominador.',
          example: {
            problem: 'Calcule 2/5 + 1/5',
            solution: '2/5 + 1/5 = (2+1)/5 = 3/5',
          },
        },
        {
          title: 'Denominadores Diferentes',
          text: 'Quando os denominadores são diferentes, precisamos encontrar o MMC para criar frações equivalentes com mesmo denominador.',
          example: {
            problem: 'Calcule 1/3 + 1/4',
            solution: 'MMC(3,4) = 12. 1/3 = 4/12 e 1/4 = 3/12. Soma: 4/12 + 3/12 = 7/12.',
          },
        },
        {
          title: 'Subtração',
          text: 'O processo é idêntico à soma, mas subtraímos os numeradores em vez de somar.',
          example: {
            problem: 'Calcule 3/4 - 1/2',
            solution: 'MMC(4,2) = 4. 3/4 = 3/4 e 1/2 = 2/4. Subtração: 3/4 - 2/4 = 1/4.',
          },
        },
      ],
    },
  },
  {
    id: 'module-6',
    title: 'Multiplicação e Divisão',
    description: 'Operações avançadas com frações',
    icon: '✖️',
    content: {
      sections: [
        {
          title: 'Multiplicação de Frações',
          text: 'Para multiplicar frações, multiplicamos numerador por numerador e denominador por denominador. Não precisa de MMC!',
          example: {
            problem: 'Calcule 2/3 × 4/5',
            solution: '2/3 × 4/5 = (2×4)/(3×5) = 8/15',
          },
        },
        {
          title: 'Divisão de Frações',
          text: 'Para dividir frações, multiplicamos a primeira fração pelo inverso da segunda (invertemos a segunda fração).',
          example: {
            problem: 'Calcule 3/4 ÷ 2/5',
            solution: '3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8',
          },
        },
        {
          title: 'Fração de um Número',
          text: 'Para calcular a fração de um número, multiplicamos o número pela fração.',
          example: {
            problem: 'Quanto é 3/4 de 80?',
            solution: '3/4 × 80 = (3 × 80)/4 = 240/4 = 60',
          },
        },
      ],
    },
  },
  {
    id: 'module-7',
    title: 'Números Mistos',
    description: 'Conversões e operações',
    icon: '🔄',
    content: {
      sections: [
        {
          title: 'O que são Números Mistos?',
          text: 'Um número misto é formado por uma parte inteira e uma fração própria. Por exemplo, 2 e 3/4 (dois inteiros e três quartos).',
          example: {
            problem: 'Represente 11/4 como número misto',
            solution: '11 ÷ 4 = 2 resto 3. Portanto, 11/4 = 2 e 3/4.',
          },
        },
        {
          title: 'Converter para Fração Imprópria',
          text: 'Para converter um número misto em fração imprópria, multiplicamos o inteiro pelo denominador, somamos o numerador e mantemos o denominador.',
          example: {
            problem: 'Converta 3 e 2/5 para fração imprópria',
            solution: '3 e 2/5 = (3×5 + 2)/5 = 17/5',
          },
        },
        {
          title: 'Operações com Números Mistos',
          text: 'Para realizar operações com números mistos, geralmente é mais fácil convertê-los primeiro para frações impróprias.',
        },
      ],
    },
  },
  {
    id: 'module-8',
    title: 'Problemas do Dia a Dia',
    description: 'Aplicações práticas de frações',
    icon: '🌍',
    content: {
      sections: [
        {
          title: 'Frações em Receitas',
          text: 'Receitas frequentemente usam frações. Saber operar com frações ajuda a dobrar receitas, dividi-las pela metade ou ajustar porções.',
          example: {
            problem: 'Uma receita pede 3/4 de xícara de farinha. Quanto preciso para fazer metade da receita?',
            solution: '3/4 × 1/2 = 3/8 de xícara de farinha.',
          },
        },
        {
          title: 'Porcentagens e Frações',
          text: 'Porcentagens são frações com denominador 100. Por exemplo, 25% = 25/100 = 1/4.',
          example: {
            problem: 'Converta 75% para fração simplificada',
            solution: '75% = 75/100 = 3/4 (dividindo por 25).',
          },
        },
        {
          title: 'Problemas de Proporção',
          text: 'Frações são fundamentais para resolver problemas de proporção, divisão de quantidades e distribuição.',
          example: {
            problem: 'João ganhou 2/5 de um prêmio de R$500. Quanto ele recebeu?',
            solution: '2/5 × 500 = 1000/5 = R$200.',
          },
        },
      ],
    },
  },
];
