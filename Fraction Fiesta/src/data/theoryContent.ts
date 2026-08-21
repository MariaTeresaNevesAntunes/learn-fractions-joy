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
    title: 'O que é uma Fração?',
    description: 'Conceito fundamental e representação visual',
    icon: '🌟',
    content: {
      sections: [
        {
          title: 'Ideia Principal',
          text: 'Uma fração representa uma parte de um todo. É formada por dois números separados por uma barra: o numerador (em cima) indica quantas partes estamos a considerar, e o denominador (em baixo) indica em quantas partes iguais o todo foi dividido.',
        },
        {
          title: 'Exemplos Simples',
          text: 'Vamos ver alguns exemplos práticos de frações no dia a dia.',
          example: {
            problem: '1/2 representa que parte?',
            solution: '1/2 significa uma de duas partes iguais - ou seja, metade!',
          },
        },
        {
          title: 'Quando Usamos Frações?',
          text: 'Usamos frações em muitas situações: para representar partes de um objeto (pizza, barra de chocolate), para medir (litros, metros, tempo), e para comparar quantidades.',
        },
      ],
    },
  },
  {
    id: 'module-2',
    title: 'Frações Próprias, Impróprias e Números Mistos',
    description: 'Tipos de frações e suas características',
    icon: '📊',
    content: {
      sections: [
        {
          title: 'Fração Própria',
          text: 'O numerador é menor que o denominador. Representa menos que 1.',
          example: {
            problem: 'Exemplos de frações próprias',
            solution: '2/5, 7/8, 3/4 - Em todas, o número de cima é menor que o de baixo.',
          },
        },
        {
          title: 'Fração Imprópria',
          text: 'O numerador é maior ou igual ao denominador. Representa 1 ou mais.',
          example: {
            problem: 'Exemplos de frações impróprias',
            solution: '7/4, 9/3, 11/6 - O número de cima é maior ou igual ao de baixo.',
          },
        },
        {
          title: 'Número Misto',
          text: 'É formado por um número inteiro + uma fração própria.',
          example: {
            problem: 'Exemplo de número misto',
            solution: '2 1/3 significa 2 inteiros e mais 1/3.',
          },
        },
      ],
    },
  },
  {
    id: 'module-3',
    title: 'Frações Equivalentes',
    description: 'Como encontrar e simplificar frações equivalentes',
    icon: '⚖️',
    content: {
      sections: [
        {
          title: 'O que são?',
          text: 'Frações equivalentes são frações diferentes que representam a mesma quantidade.',
          example: {
            problem: 'Exemplo de frações equivalentes',
            solution: '1/2 = 2/4 = 3/6 - Todas representam metade!',
          },
        },
        {
          title: 'Como Encontrar',
          text: 'Multiplica ou divide o numerador e o denominador pelo mesmo número.',
          example: {
            problem: 'Encontra uma fração equivalente a 2/3',
            solution: 'Multiplicando por 2: 2×2/3×2 = 4/6. Portanto, 2/3 = 4/6.',
          },
        },
        {
          title: 'Simplificação',
          text: 'Divide o numerador e o denominador pelo mesmo número (o maior possível - MDC).',
          example: {
            problem: 'Simplifica 6/9',
            solution: 'MDC(6,9) = 3. Dividindo: 6÷3/9÷3 = 2/3.',
          },
        },
      ],
    },
  },
  {
    id: 'module-4',
    title: 'Comparação de Frações',
    description: 'Como comparar e ordenar frações',
    icon: '🔍',
    content: {
      sections: [
        {
          title: 'Mesmo Denominador',
          text: 'Compara apenas os numeradores. A fração com maior numerador é a maior.',
          example: {
            problem: 'Compara 3/7 e 5/7',
            solution: 'Como 5 > 3, então 5/7 > 3/7.',
          },
        },
        {
          title: 'Denominadores Diferentes',
          text: 'Encontra frações equivalentes com o mesmo denominador (usando o MMC) e depois compara os numeradores.',
          example: {
            problem: 'Compara 2/3 e 3/4',
            solution: 'MMC(3,4) = 12. 2/3 = 8/12 e 3/4 = 9/12. Como 9 > 8, então 3/4 > 2/3.',
          },
        },
        {
          title: 'Conversão para Decimal',
          text: 'Outra forma de comparar: divide o numerador pelo denominador e compara os resultados decimais.',
          example: {
            problem: 'Compara 3/5 e 2/3 usando decimais',
            solution: '3/5 = 0,6 e 2/3 ≈ 0,667. Como 0,667 > 0,6, então 2/3 > 3/5.',
          },
        },
      ],
    },
  },
  {
    id: 'module-5',
    title: 'Adição e Subtração de Frações',
    description: 'Operações básicas com frações',
    icon: '➕',
    content: {
      sections: [
        {
          title: 'Mesmo Denominador',
          text: 'Soma ou subtrai os numeradores e mantém o denominador.',
          example: {
            problem: 'Calcula 2/5 + 1/5',
            solution: '2/5 + 1/5 = (2+1)/5 = 3/5',
          },
        },
        {
          title: 'Denominadores Diferentes',
          text: 'Primeiro, encontra o MMC dos denominadores. Depois, converte as frações para terem o mesmo denominador. Por fim, soma ou subtrai os numeradores.',
          example: {
            problem: 'Calcula 1/3 + 1/4',
            solution: 'MMC(3,4) = 12. 1/3 = 4/12 e 1/4 = 3/12. Soma: 4/12 + 3/12 = 7/12.',
          },
        },
        {
          title: 'Simplificação do Resultado',
          text: 'Após a operação, verifica se o resultado pode ser simplificado.',
          example: {
            problem: 'Calcula 3/4 - 1/4 e simplifica',
            solution: '3/4 - 1/4 = 2/4 = 1/2 (simplificando por 2).',
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
