export interface TextoArticle {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  autor: string;
  data: string;
  categoria: 'Reflexões' | 'História & Memória' | 'Estudos' | 'Comunicados' | 'Ensinamentos';
  tempoLeitura: string;
  imagemCapa?: string;
  tags: string[];
  conteudoParagraphs: string[];
}

export const categoriasTextos = [
  'Todos',
  'Reflexões',
  'História & Memória',
  'Estudos',
  'Comunicados',
  'Ensinamentos'
] as const;

export const textosData: TextoArticle[] = [
  {
    id: "texto-1",
    slug: "a-importancia-da-preservacao-ancestral",
    titulo: "A Importância da Preservação Ancestral no Omoloko Nagô",
    resumo: "Uma reflexão sobre como o respeito aos mais velhos, o silêncio e o aprendizado contínuo mantêm vivo o Àṣẹ do Oko Ìdílé Ọya.",
    autor: "Oko Ìdílé Ọya",
    data: "2026-08-01",
    categoria: "Reflexões",
    tempoLeitura: "4 min",
    tags: ["Ancestralidade", "Omoloko", "Nagô", "Respeito"],
    conteudoParagraphs: [
      "[O texto integral desta publicação será inserido aqui pelo autor.]",
      "No culto aos Òrìṣà, cada gesto, cada canto e cada folha guardam a memória dos que vieram antes de nós. Manter a tradição viva não significa imutabilidade estéril, mas sim zelo constante com os ensinamentos transmitidos na roda do Ilé.",
      "[Outros parágrafos e reflexões do artigo serão adicionados posteriormente.]"
    ]
  },
  {
    id: "texto-2",
    slug: "o-vento-que-renova-ensinamentos-de-oya",
    titulo: "O Vento que Renova: Ensinamentos e Proteção de Ọya",
    resumo: "Considerações sobre a regência de Ọya na nossa casa e como sua energia impulsiona a transformação e a coragem.",
    autor: "Oko Ìdílé Ọya",
    data: "2026-07-20",
    categoria: "Ensinamentos",
    tempoLeitura: "5 min",
    tags: ["Ọya", "Òrìṣà", "Vento", "Proteção"],
    conteudoParagraphs: [
      "[Texto sobre Ọya e seus ensinamentos espirituais será inserido aqui.]",
      "Ọya nos ensina a não temer a tempestade, mas a caminhar com firmeza em meio aos ventos de renovação.",
      "[Conteúdo em desenvolvimento para inserção futura.]"
    ]
  },
  {
    id: "texto-3",
    slug: "comunicado-oficial-ciclo-de-estudos",
    titulo: "Comunicado: Início do Ciclo de Estudos de 2026",
    resumo: "Informações para os filhos da casa sobre as datas e temas dos encontros de aprofundamento e leitura de apostilas.",
    autor: "Direção do Oko Ìdílé Ọya",
    data: "2026-06-15",
    categoria: "Comunicados",
    tempoLeitura: "2 min",
    tags: ["Estudos", "Comunicados", "Avisos"],
    conteudoParagraphs: [
      "[Informações e comunicados oficiais da casa serão publicados nesta seção.]",
      "[Datas, recomendações e orientações gerais para a comunidade de filhos do Oko Ìdílé Ọya.]"
    ]
  }
];
