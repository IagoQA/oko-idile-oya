export type CargoGroupId = 'bale' | 'aare' | 'alaajo' | 'ogans' | 'ekeji' | 'posicoes-espirituais';

export interface CargoSecao {
  id: CargoGroupId;
  titulo: string;
  descricao: string;
  iconKey: 'Flame' | 'Shield' | 'Compass' | 'Music' | 'Award' | 'Sparkles';
  cargoIds: string[];
}

export interface CargoItem {
  id: string;
  nome: string;
  grupoPrincipal: CargoGroupId;
  gruposSecundarios?: CargoGroupId[];
  descricao: string;
  descricoesPorGrupo?: Partial<Record<CargoGroupId, string>>;

  /* Metadados e marcadores visuais da casa */
  escopo?: 'Matriz' | 'Terreiro' | 'Geral';
  corte?: boolean;
  sucessao?: boolean;
  genero?: 'Masculino' | 'Feminino' | 'Ambos';
  vinculos?: string[];

  /* Preservação e revisão litúrgica */
  aliases?: string[];

  /* Compatibilidade com código legado */
  categoria?: string;
  responsabilidades?: string[];
}

/* Configuração canônica das seções da página */
export const secoesCargos: CargoSecao[] = [
  {
    id: 'bale',
    titulo: 'Bálẹ̀',
    descricao:
      'Reúne os sacerdotes e sacerdotisas responsáveis pela condução e pelo governo dos respectivos cultos e de suas comunidades religiosas.',
    iconKey: 'Flame',
    cargoIds: [
      'c-10',
      'c-11',
      'c-12',
      'c-13',
      'c-14',
      'c-15',
      'c-17',
      'c-18',
      'c-19',
      'c-20',
      'c-21',
      'c-22',
      'c-23',
      'c-24',
      'c-26',
      'c-27',
      'c-28',
      'c-9',
      'c-45'
    ]
  },
  {
    id: 'aare',
    titulo: 'Ààrẹ',
    descricao:
      'Reúne os cargos que auxiliam os sacerdotes e sacerdotisas do grupo Bálẹ̀ na execução de suas responsabilidades rituais.',
    iconKey: 'Shield',
    cargoIds: [
      'c-29',
      'c-44',
      'og-2',
      'c-30',
      'c-31',
      'c-32',
      'c-34',
      'c-35',
      'ek-2',
      'c-36',
      'c-37'
    ]
  },
  {
    id: 'alaajo',
    titulo: 'Aláájò',
    descricao:
      'Reúne os cargos responsáveis pelas atividades práticas e operacionais que mantêm o funcionamento cotidiano e ritual da casa.',
    iconKey: 'Compass',
    cargoIds: [
      'c-39',
      'c-40',
      'c-41',
      'c-42',
      'c-43',
      'ek-2',
      'ek-3',
      'c-36'
    ]
  },
  {
    id: 'ogans',
    titulo: 'Ogans',
    descricao:
      'Reúne os Ogans responsáveis por atividades especializadas de proteção, musicalidade, instrumentos e execução ritual.',
    iconKey: 'Music',
    cargoIds: [
      'c-18',
      'og-2',
      'c-30',
      'og-4',
      'og-5',
      'c-13',
      'c-31',
      'c-32',
      'c-34',
      'c-35'
    ]
  },
  {
    id: 'ekeji',
    titulo: 'Ẹkéjì',
    descricao:
      'Reúne os cargos de apoio especializado feminino que auxiliam na organização e na execução ritual, atuando no Ààrẹ e no Aláájò.',
    iconKey: 'Award',
    cargoIds: ['ek-2', 'ek-3', 'c-36']
  },
  {
    id: 'posicoes-espirituais',
    titulo: 'Posições Espirituais',
    descricao:
      'Representam as etapas de vivência, iniciação e aprendizado religioso, diferenciando-se dos cargos sacerdotais e funcionais.',
    iconKey: 'Sparkles',
    cargoIds: ['pe-1', 'pe-2', 'pe-3', 'pe-4']
  }
];

/* Cadastro canônico unificado dos cargos */
export const cargosData: CargoItem[] = [
  /* ================= 1. BÁLẸ̀ ================= */
  {
    id: 'c-10',
    nome: 'Abéṣùmulẹ̀ - Ìyá Èṣù',
    grupoPrincipal: 'bale',
    genero: 'Ambos',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotes do culto de Èṣù.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-11',
    nome: 'Olóko',
    grupoPrincipal: 'bale',
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdote do culto de Òrìṣà Oko.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-12',
    nome: 'Ìyá Olọ́ya',
    grupoPrincipal: 'bale',
    genero: 'Feminino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotisa do culto de Ọya.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-13',
    aliases: ['og-7'],
    nome: 'Asọgbá',
    grupoPrincipal: 'bale',
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdote do culto de Ọbalúayé.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-14',
    nome: 'Àwòrò Ọ̀ṣun',
    grupoPrincipal: 'bale',
    genero: 'Feminino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotisa do culto de Ọ̀ṣun.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-15',
    nome: 'Mọ́gbà - Ìyá Nàsó',
    grupoPrincipal: 'bale',
    genero: 'Ambos',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotes do culto de Ṣàngó.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-17',
    nome: 'Ọlọ́bà',
    grupoPrincipal: 'bale',
    genero: 'Feminino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotisa do culto de Ọbà',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-18',
    aliases: ['og-1'],
    nome: 'Aṣògún',
    grupoPrincipal: 'bale',
    gruposSecundarios: ['ogans'],
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdote do culto de Ògún e responsável pelo sacrifício ritual de animais.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-19',
    nome: 'Abọrẹ Ọ̀ṣọ́ọ̀sì - Àwòrò Ọ̀ṣọ́ọ̀sì',
    grupoPrincipal: 'bale',
    genero: 'Ambos',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotes do culto de Ọ̀ṣọ́ọ̀sì.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-20',
    nome: 'Abọrẹ Ológun Ẹdẹ',
    grupoPrincipal: 'bale',
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdote do culto de Ológun Ẹdẹ.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-21',
    nome: 'Bàbálọ̀sányìn',
    grupoPrincipal: 'bale',
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdote do culto de Ọ̀sányìn.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-22',
    nome: 'Ìyá Olódò',
    grupoPrincipal: 'bale',
    genero: 'Feminino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotisa do culto de Yemọjá.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-23',
    nome: 'Ìyá Yewa',
    grupoPrincipal: 'bale',
    genero: 'Feminino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotisa do culto de Yewa.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-24',
    nome: 'Bàbá Olóṣùmàrè - Ìya Olóṣùmàrè',
    grupoPrincipal: 'bale',
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotes do culto de Òṣùmàrè.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-26',
    nome: 'Ọlọ́ Lẹ̀sẹ̀',
    grupoPrincipal: 'bale',
    genero: 'Feminino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotisa do culto de Nàná.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-27',
    nome: 'Ọlọ́bàtálá',
    grupoPrincipal: 'bale',
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdote do culto de Òṣàlá.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-28',
    nome: 'Bàbálàgbà',
    grupoPrincipal: 'bale',
    genero: 'Masculino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdote do culto de Egúngún.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-9',
    nome: 'Bàbá Ẹgbẹ́ - Ìyá Ẹgbẹ́',
    grupoPrincipal: 'bale',
    genero: 'Ambos',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotes do culto de Ẹgbẹ́ Ọ̀run.',
    categoria: 'Bálẹ̀'
  },
  {
    id: 'c-45',
    nome: 'Ìyámorò',
    grupoPrincipal: 'bale',
    genero: 'Feminino',
    vinculos: ['Bálẹ̀'],
    descricao: 'Sacerdotisa do culto de Ìyámi Òṣòròngà, responsável pelo Ìpàdé.',
    categoria: 'Bálẹ̀'
  },

  /* ================= 2. ÀÀRẸ ================= */
  {
    id: 'c-29',
    nome: 'Ìyá Ìránṣẹ́',
    grupoPrincipal: 'aare',
    genero: 'Feminino',
    vinculos: ['Ààrẹ'],
    descricao: 'Responsável pela condução e organização do quarto de Òrìṣà. Subordinada à Ìyálóde',
    categoria: 'Ààrẹ'
  },
  {
    id: 'c-44',
    nome: 'Ìyágbà Ewé',
    grupoPrincipal: 'aare',
    genero: 'Feminino',
    vinculos: ['Ààrẹ'],
    descricao: 'Subordinada ao Bàbálọ̀sányìn, conforme a organização da casa.',
    categoria: 'Ààrẹ'
  },
  {
    id: 'og-2',
    nome: 'Balógun',
    grupoPrincipal: 'aare',
    gruposSecundarios: ['ogans'],
    genero: 'Masculino',
    vinculos: ['Ààrẹ', 'Ogan'],
    descricao: 'Oficial associado à proteção do templo. Subordinado ao Aṣògún.',
    categoria: 'Ààrẹ'
  },
  {
    id: 'c-30',
    aliases: ['og-3'],
    nome: 'Ọlọ́bẹ',
    grupoPrincipal: 'aare',
    gruposSecundarios: ['ogans'],
    genero: 'Masculino',
    vinculos: ['Ààrẹ', 'Ogan'],
    descricao: 'Responsável pelas lâminas rituais. Subordinado ao Aṣògún.',
    categoria: 'Ààrẹ'
  },
  {
    id: 'c-31',
    aliases: ['og-7'],
    nome: 'Apókàn',
    grupoPrincipal: 'aare',
    gruposSecundarios: ['ogans'],
    genero: 'Masculino',
    vinculos: ['Ààrẹ', 'Ogan'],
    descricao: 'Onílù de Ọbalúayé.Subordinado ao Asọgbá.',
    categoria: 'Ààrẹ'
  },
  {
    id: 'c-32',
    aliases: ['og-8'],
    nome: 'Apótún',
    grupoPrincipal: 'aare',
    gruposSecundarios: ['ogans'],
    genero: 'Masculino',
    vinculos: ['Ààrẹ', 'Ogan'],
    descricao: 'Onílù de Ọbalúayé. Subordinado ao Asọgbá.',
    categoria: 'Ààrẹ'
  },
  {
    id: 'c-34',
    aliases: ['og-10'],
    nome: 'Ọ̀gánlá',
    grupoPrincipal: 'aare',
    gruposSecundarios: ['ogans'],
    genero: 'Masculino',
    vinculos: ['Ààrẹ', 'Ogan'],
    descricao: 'Responsável por funções relacionadas às coisas de Òṣàlá. Subordinado ao Ọlọ́bàtálá.',
    categoria: 'Ààrẹ'
  },
  {
    id: 'c-35',
    aliases: ['og-11'],
    nome: 'Elémaṣọ',
    grupoPrincipal: 'aare',
    gruposSecundarios: ['ogans'],
    genero: 'Masculino',
    vinculos: ['Ààrẹ', 'Ogan'],
    descricao: 'Responsável pelas roupas relacionadas a Ọ̀bàtálá. Subordinado ao Ọlọ́bàtálá.',
    categoria: 'Ààrẹ'
  },
  {
    id: 'ek-2',
    nome: 'Ajímúdà',
    grupoPrincipal: 'ekeji',
    gruposSecundarios: ['aare', 'alaajo'],
    genero: 'Feminino',
    vinculos: ['Ẹkéjì', 'Ààrẹ', 'Aláájò'],
    descricao: 'Cargo de apoio ritual que cuida do Ìpàdé e exerce funções ligadas a Ọya. Subordinada à Ìyámorò e Ìyá Ọlọ́ya.',
    categoria: 'ẸKÉJÌ'
  },
  {
    id: 'c-36',
    aliases: ['ek-4'],
    nome: 'Ìyádàgàn',
    grupoPrincipal: 'ekeji',
    gruposSecundarios: ['aare', 'alaajo'],
    genero: 'Feminino',
    vinculos: ['Ẹkéjì', 'Ààrẹ', 'Aláájò'],
    descricao: 'Cargo de apoio ritual que auxilia no Ìpàdé a Ìyámọ̀rọ̀ e tem função ligada a Ọya. Subordinada à Ìyámorò e Ìyá Ọlọ́ya.',
    categoria: 'ẸKÉJÌ'
  },
  {
    id: 'c-37',
    nome: 'Ìyá Ẹfun - Bàbá Ẹfun',
    grupoPrincipal: 'aare',
    genero: 'Ambos',
    vinculos: ['Ààrẹ'],
    descricao: 'Responsáveis pelas pinturas rituais nos neófitos. Subordinados ao Ólọ́bàtálá.',
    categoria: 'Ààrẹ'
  },

  /* ================= 3. ALÁÁJÒ ================= */
  {
    id: 'c-39',
    nome: 'Ìyágbàsè',
    grupoPrincipal: 'alaajo',
    genero: 'Feminino',
    vinculos: ['Aláájò'],
    descricao: 'Responsável pela cozinha. Subordinada ao Bàbá ou Ìyá Ẹgbẹ́.',
    categoria: 'Aláájò'
  },
  {
    id: 'c-40',
    nome: 'Òjíṣẹ́',
    grupoPrincipal: 'alaajo',
    genero: 'Ambos',
    vinculos: ['Aláájò'],
    descricao: 'Mensageiro ou mensageira geral. Subordinada ao Bàbá ou Ìyá Ẹgbẹ́ e ao Abéṣùmulẹ̀.',
    categoria: 'Aláájò'
  },
  {
    id: 'c-41',
    nome: 'Olóròógun',
    grupoPrincipal: 'alaajo',
    genero: 'Masculino',
    vinculos: ['Aláájò'],
    descricao: 'Responsável por despachar os trabalhos. Subordinado ao Bàbálọ̀sányìn e ao Asọgbá.',
    categoria: 'Aláájò'
  },
  {
    id: 'c-42',
    nome: 'Oníṣègùn',
    grupoPrincipal: 'alaajo',
    genero: 'Ambos',
    vinculos: ['Aláájò'],
    descricao: 'Conhecedor ou conhecedora das medicinas. Subordinado ao Bàbálọ̀sányìn e ao Asọgbá.',
    categoria: 'Aláájò'
  },
  {
    id: 'c-43',
    nome: 'Olójò',
    grupoPrincipal: 'alaajo',
    genero: 'Ambos',
    vinculos: ['Aláájò'],
    descricao: 'Responsável por funções relacionadas à dança. Subordinada ao Bàbá Kékeré.',
    categoria: 'Aláájò'
  },
  {
    id: 'ek-3',
    nome: 'Dàgàn',
    grupoPrincipal: 'ekeji',
    gruposSecundarios: ['alaajo'],
    genero: 'Feminino',
    vinculos: ['Ẹkéjì', 'Aláájò'],
    descricao: 'Auxilia no Ìpàdé e a Ìyámọ̀rọ̀, em função ligada a Ọya. Subordinada à Ìyámorò, Ìyádàgàn e Ìyá Ọlọ́ya.',
    categoria: 'ẸKÉJÌ'
  },

  /* ================= 4. OGANS ================= */
  {
    id: 'og-4',
    nome: 'Alágbè',
    grupoPrincipal: 'ogans',
    genero: 'Masculino',
    vinculos: ['Ogan'],
    descricao: 'Responsável por tocar a cabaça e executar funções musicais específicas. Subordinado ao Onílù.',
    categoria: 'OGANS'
  },
  {
    id: 'og-5',
    nome: 'Onílù',
    grupoPrincipal: 'ogans',
    genero: 'Masculino',
    vinculos: ['Ogan'],
    descricao: 'Responsável pela musicalidade geral, líder dos Ogans e tocador do atabaque Nlá (Maior), conforme a convenção da casa.',
    categoria: 'OGANS'
  },

  /* ================= 5. POSIÇÕES ESPIRITUAIS ================= */
  {
    id: 'pe-1',
    nome: 'Ẹ̀gbọ́n',
    grupoPrincipal: 'posicoes-espirituais',
    vinculos: ['Posição Espiritual'],
    descricao: 'Pessoa que concluiu o ciclo iniciático e ainda não recebeu um posto ou não foi predestinada a exercê-lo.',
    categoria: 'Posições Espirituais'
  },
  {
    id: 'pe-2',
    nome: 'Ìyàwó',
    grupoPrincipal: 'posicoes-espirituais',
    vinculos: ['Posição Espiritual'],
    descricao: 'Pessoa iniciada na tradição da casa.',
    categoria: 'Posições Espirituais'
  },
  {
    id: 'pe-3',
    nome: 'Abíyán',
    grupoPrincipal: 'posicoes-espirituais',
    vinculos: ['Posição Espiritual'],
    descricao: 'Pessoa em etapa inicial de aproximação, aprendizado ou preparação.',
    categoria: 'Posições Espirituais'
  },
  {
    id: 'pe-4',
    nome: 'Ìkésí',
    grupoPrincipal: 'posicoes-espirituais',
    vinculos: ['Posição Espiritual'],
    descricao: 'Pessoa que ainda não é adepta ou não conhece a religiosidade da casa.',
    categoria: 'Posições Espirituais'
  }
];

/* Mapa de indexação O(1) por identificador principal e aliases legados */
export const cargosMap: Record<string, CargoItem> = {};

cargosData.forEach((cargo) => {
  cargosMap[cargo.id] = cargo;
  if (cargo.aliases) {
    cargo.aliases.forEach((aliasId) => {
      cargosMap[aliasId] = cargo;
    });
  }
});

/* Helper para obter os cargos de uma dada seção, preservando a ordem canônica estabelecida */
export function getCargosPorSecao(secaoId: CargoGroupId): CargoItem[] {
  const secao = secoesCargos.find((s) => s.id === secaoId);
  if (!secao) return [];

  return secao.cargoIds
    .map((id) => cargosMap[id])
    .filter((cargo): cargo is CargoItem => Boolean(cargo));
}

/* Helper para obter a descrição adequada do cargo no contexto de exibição daquela seção */
export function getCargoDescricaoParaSecao(cargo: CargoItem, secaoId: CargoGroupId): string {
  if (cargo.descricoesPorGrupo && cargo.descricoesPorGrupo[secaoId]) {
    return cargo.descricoesPorGrupo[secaoId]!;
  }
  return cargo.descricao;
}
