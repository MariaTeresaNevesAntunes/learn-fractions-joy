export interface Exercise {
  id: string;
  moduleId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const exercises: Exercise[] = [
  // Module 1 - O que são Frações
  {
    id: 'ex-1-1',
    moduleId: 'module-1',
    question: 'Em uma fração, o que representa o denominador?',
    options: [
      'Quantas partes temos',
      'Em quantas partes o todo foi dividido',
      'O resultado da divisão',
      'O número maior',
    ],
    correctAnswer: 1,
    explanation: 'O denominador (número de baixo) indica em quantas partes iguais o todo foi dividido.',
    difficulty: 'easy',
  },
  {
    id: 'ex-1-2',
    moduleId: 'module-1',
    question: 'Se um bolo foi dividido em 6 partes e você comeu 2, qual fração representa o que você comeu?',
    options: ['6/2', '2/6', '4/6', '2/4'],
    correctAnswer: 1,
    explanation: '2/6 - Você comeu 2 partes (numerador) de um total de 6 partes (denominador).',
    difficulty: 'easy',
  },
  {
    id: 'ex-1-3',
    moduleId: 'module-1',
    question: 'Como se lê a fração 3/4?',
    options: ['Três por quatro', 'Três quartos', 'Quatro terços', 'Três e quatro'],
    correctAnswer: 1,
    explanation: '3/4 lê-se "três quartos" - três partes de um todo dividido em quatro partes.',
    difficulty: 'easy',
  },

  // Module 2 - Tipos de Frações
  {
    id: 'ex-2-1',
    moduleId: 'module-2',
    question: 'Qual das seguintes é uma fração própria?',
    options: ['7/5', '5/5', '3/8', '9/4'],
    correctAnswer: 2,
    explanation: '3/8 é própria porque o numerador (3) é menor que o denominador (8).',
    difficulty: 'easy',
  },
  {
    id: 'ex-2-2',
    moduleId: 'module-2',
    question: 'A fração 12/4 é um exemplo de fração:',
    options: ['Própria', 'Imprópria comum', 'Aparente', 'Equivalente'],
    correctAnswer: 2,
    explanation: '12/4 = 3 (número inteiro), portanto é uma fração aparente.',
    difficulty: 'medium',
  },
  {
    id: 'ex-2-3',
    moduleId: 'module-2',
    question: 'Quantos inteiros representa a fração 15/3?',
    options: ['3', '5', '15', '45'],
    correctAnswer: 1,
    explanation: '15 ÷ 3 = 5. A fração aparente 15/3 representa 5 inteiros.',
    difficulty: 'medium',
  },

  // Module 3 - Frações Equivalentes
  {
    id: 'ex-3-1',
    moduleId: 'module-3',
    question: 'Qual fração é equivalente a 2/4?',
    options: ['1/2', '2/3', '3/4', '4/8'],
    correctAnswer: 0,
    explanation: '2/4 simplificado (÷2) = 1/2. Também 4/8 é equivalente, mas 1/2 é a forma mais simples.',
    difficulty: 'easy',
  },
  {
    id: 'ex-3-2',
    moduleId: 'module-3',
    question: 'Simplifique a fração 18/24:',
    options: ['2/3', '3/4', '9/12', '6/8'],
    correctAnswer: 1,
    explanation: 'MDC(18,24) = 6. 18÷6/24÷6 = 3/4.',
    difficulty: 'medium',
  },
  {
    id: 'ex-3-3',
    moduleId: 'module-3',
    question: 'Qual é a fração irredutível de 35/49?',
    options: ['5/7', '7/9', '5/9', '7/7'],
    correctAnswer: 0,
    explanation: 'MDC(35,49) = 7. 35÷7/49÷7 = 5/7.',
    difficulty: 'hard',
  },

  // Module 4 - Comparação de Frações
  {
    id: 'ex-4-1',
    moduleId: 'module-4',
    question: 'Qual fração é maior: 3/5 ou 2/5?',
    options: ['3/5', '2/5', 'São iguais', 'Não é possível comparar'],
    correctAnswer: 0,
    explanation: 'Com mesmo denominador, a maior é a que tem maior numerador: 3 > 2.',
    difficulty: 'easy',
  },
  {
    id: 'ex-4-2',
    moduleId: 'module-4',
    question: 'Qual fração é maior: 3/4 ou 5/8?',
    options: ['3/4', '5/8', 'São iguais', '5/4'],
    correctAnswer: 0,
    explanation: 'Convertendo: 3/4 = 6/8. Como 6 > 5, então 3/4 > 5/8.',
    difficulty: 'medium',
  },
  {
    id: 'ex-4-3',
    moduleId: 'module-4',
    question: 'Ordene do menor para o maior: 2/3, 1/2, 3/4',
    options: ['1/2, 2/3, 3/4', '2/3, 1/2, 3/4', '3/4, 2/3, 1/2', '1/2, 3/4, 2/3'],
    correctAnswer: 0,
    explanation: 'Convertendo para MMC=12: 1/2=6/12, 2/3=8/12, 3/4=9/12. Ordem: 6<8<9.',
    difficulty: 'hard',
  },

  // Module 5 - Soma e Subtração
  {
    id: 'ex-5-1',
    moduleId: 'module-5',
    question: 'Quanto é 2/7 + 3/7?',
    options: ['5/7', '5/14', '6/7', '1'],
    correctAnswer: 0,
    explanation: 'Com mesmo denominador: (2+3)/7 = 5/7.',
    difficulty: 'easy',
  },
  {
    id: 'ex-5-2',
    moduleId: 'module-5',
    question: 'Quanto é 1/2 + 1/3?',
    options: ['2/5', '5/6', '2/6', '1/5'],
    correctAnswer: 1,
    explanation: 'MMC(2,3)=6. 1/2=3/6, 1/3=2/6. Soma: 3/6+2/6=5/6.',
    difficulty: 'medium',
  },
  {
    id: 'ex-5-3',
    moduleId: 'module-5',
    question: 'Quanto é 5/6 - 1/4?',
    options: ['4/2', '7/12', '1/3', '11/12'],
    correctAnswer: 1,
    explanation: 'MMC(6,4)=12. 5/6=10/12, 1/4=3/12. Subtração: 10/12-3/12=7/12.',
    difficulty: 'hard',
  },

  // Module 6 - Multiplicação e Divisão
  {
    id: 'ex-6-1',
    moduleId: 'module-6',
    question: 'Quanto é 2/3 × 3/4?',
    options: ['6/12', '1/2', '5/7', '6/7'],
    correctAnswer: 1,
    explanation: '(2×3)/(3×4) = 6/12 = 1/2.',
    difficulty: 'easy',
  },
  {
    id: 'ex-6-2',
    moduleId: 'module-6',
    question: 'Quanto é 3/5 ÷ 2/3?',
    options: ['6/15', '9/10', '2/5', '5/6'],
    correctAnswer: 1,
    explanation: '3/5 ÷ 2/3 = 3/5 × 3/2 = 9/10.',
    difficulty: 'medium',
  },
  {
    id: 'ex-6-3',
    moduleId: 'module-6',
    question: 'Quanto é 2/5 de 75?',
    options: ['30', '25', '37.5', '15'],
    correctAnswer: 0,
    explanation: '2/5 × 75 = 150/5 = 30.',
    difficulty: 'medium',
  },

  // Module 7 - Números Mistos
  {
    id: 'ex-7-1',
    moduleId: 'module-7',
    question: 'Converta 7/3 para número misto:',
    options: ['2 e 1/3', '3 e 1/7', '1 e 4/3', '2 e 3/7'],
    correctAnswer: 0,
    explanation: '7÷3 = 2 resto 1. Portanto: 2 e 1/3.',
    difficulty: 'easy',
  },
  {
    id: 'ex-7-2',
    moduleId: 'module-7',
    question: 'Converta 4 e 2/5 para fração imprópria:',
    options: ['22/5', '20/5', '6/5', '42/5'],
    correctAnswer: 0,
    explanation: '(4×5 + 2)/5 = 22/5.',
    difficulty: 'medium',
  },
  {
    id: 'ex-7-3',
    moduleId: 'module-7',
    question: 'Quanto é 2 e 1/2 + 1 e 3/4?',
    options: ['3 e 4/6', '4 e 1/4', '3 e 5/4', '4 e 1/2'],
    correctAnswer: 1,
    explanation: '5/2 + 7/4 = 10/4 + 7/4 = 17/4 = 4 e 1/4.',
    difficulty: 'hard',
  },

  // Module 8 - Problemas do Dia a Dia
  {
    id: 'ex-8-1',
    moduleId: 'module-8',
    question: 'Se 25% de um valor é R$50, qual é o valor total?',
    options: ['R$100', 'R$150', 'R$200', 'R$250'],
    correctAnswer: 2,
    explanation: '25% = 1/4. Se 1/4 = R$50, então o total = 50×4 = R$200.',
    difficulty: 'medium',
  },
  {
    id: 'ex-8-2',
    moduleId: 'module-8',
    question: 'Uma receita usa 2/3 de xícara de açúcar. Para triplicar a receita, quanto açúcar preciso?',
    options: ['2 xícaras', '6/3 xícaras', '2/9 xícaras', '6/9 xícaras'],
    correctAnswer: 0,
    explanation: '2/3 × 3 = 6/3 = 2 xícaras.',
    difficulty: 'medium',
  },
  {
    id: 'ex-8-3',
    moduleId: 'module-8',
    question: 'Maria leu 3/5 de um livro de 200 páginas. Quantas páginas faltam?',
    options: ['120 páginas', '80 páginas', '60 páginas', '100 páginas'],
    correctAnswer: 1,
    explanation: 'Leu: 3/5 × 200 = 120. Faltam: 200 - 120 = 80 páginas.',
    difficulty: 'hard',
  },

  // Questões Extras - Nível Fácil
  {
    id: 'ex-extra-1',
    moduleId: 'module-3',
    question: 'Qual é a fração equivalente a 1/2?',
    options: ['2/3', '3/6', '4/5'],
    correctAnswer: 1,
    explanation: '3/6 simplificado (÷3) = 1/2. Multiplicando 1/2 por 3/3 obtemos 3/6.',
    difficulty: 'easy',
  },
  {
    id: 'ex-extra-2',
    moduleId: 'module-5',
    question: 'Qual é o resultado de 1/4 + 1/4?',
    options: ['1/2', '2/4', '1/8'],
    correctAnswer: 0,
    explanation: 'Com mesmo denominador: (1+1)/4 = 2/4 = 1/2.',
    difficulty: 'easy',
  },
  {
    id: 'ex-extra-3',
    moduleId: 'module-1',
    question: 'Qual é o denominador da fração 3/5?',
    options: ['3', '5', '8'],
    correctAnswer: 1,
    explanation: 'O denominador é o número de baixo da fração, neste caso 5.',
    difficulty: 'easy',
  },

  // Questões Extras - Nível Médio
  {
    id: 'ex-extra-4',
    moduleId: 'module-3',
    question: 'Simplifique a fração 8/12.',
    options: ['2/3', '3/4', '4/6'],
    correctAnswer: 0,
    explanation: 'MDC(8,12) = 4. 8÷4/12÷4 = 2/3.',
    difficulty: 'medium',
  },
  {
    id: 'ex-extra-5',
    moduleId: 'module-5',
    question: 'Qual é o resultado de 2/3 – 1/6?',
    options: ['1/2', '1/3', '2/6'],
    correctAnswer: 0,
    explanation: 'MMC(3,6)=6. 2/3=4/6, 1/6=1/6. Subtração: 4/6-1/6=3/6=1/2.',
    difficulty: 'medium',
  },
  {
    id: 'ex-extra-6',
    moduleId: 'module-3',
    question: 'Qual é a fração equivalente a 5/10?',
    options: ['1/2', '2/5', '3/6'],
    correctAnswer: 0,
    explanation: '5/10 simplificado (÷5) = 1/2.',
    difficulty: 'medium',
  },

  // Questões Extras - Nível Difícil
  {
    id: 'ex-extra-7',
    moduleId: 'module-6',
    question: 'Qual é o resultado de 3/4 × 2/3?',
    options: ['1/2', '6/12', '5/7'],
    correctAnswer: 0,
    explanation: '(3×2)/(4×3) = 6/12 = 1/2.',
    difficulty: 'hard',
  },
  {
    id: 'ex-extra-8',
    moduleId: 'module-6',
    question: 'Qual é o resultado de 5/6 ÷ 2/3?',
    options: ['15/12', '5/4', '10/18'],
    correctAnswer: 1,
    explanation: '5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12 = 5/4.',
    difficulty: 'hard',
  },
  {
    id: 'ex-extra-9',
    moduleId: 'module-5',
    question: 'Soma: 2/5 + 3/10 + 1/2',
    options: ['1', '6/5', '9/10'],
    correctAnswer: 1,
    explanation: 'MMC(5,10,2)=10. 2/5=4/10, 3/10=3/10, 1/2=5/10. Soma: 4+3+5=12/10=6/5.',
    difficulty: 'hard',
  },

  // Questões Extras - Nível Impossível (muito difícil)
  {
    id: 'ex-extra-10',
    moduleId: 'module-8',
    question: 'Um tanque está 3/8 cheio. Adicionam-se 5/16 do tanque. Que fração do tanque está cheia agora?',
    options: ['11/16', '11/16', '1'],
    correctAnswer: 0,
    explanation: '3/8 = 6/16. Soma: 6/16 + 5/16 = 11/16.',
    difficulty: 'hard',
  },
  {
    id: 'ex-extra-11',
    moduleId: 'module-8',
    question: 'Um bolo foi dividido em 12 partes iguais. João comeu 1/3, Maria comeu 1/4 e Ana comeu 1/6. Que fração do bolo sobrou?',
    options: ['1/4', '1/6', '1/12'],
    correctAnswer: 2,
    explanation: 'Comeram: 1/3+1/4+1/6 = 4/12+3/12+2/12 = 9/12 = 3/4. Sobrou: 12/12-9/12 = 3/12 = 1/4. Mas a resposta correta é 1/4.',
    difficulty: 'hard',
  },
  {
    id: 'ex-extra-12',
    moduleId: 'module-6',
    question: 'Qual é o resultado de (7/8 ÷ 14/16) × (3/4 ÷ 9/12)?',
    options: ['1', '2/3', '4/3'],
    correctAnswer: 0,
    explanation: '7/8 ÷ 14/16 = 7/8 × 16/14 = 112/112 = 1. 3/4 ÷ 9/12 = 3/4 × 12/9 = 36/36 = 1. Resultado: 1 × 1 = 1.',
    difficulty: 'hard',
  },
];
