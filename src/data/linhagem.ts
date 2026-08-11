export interface CasaLinhagem {
  nome: string;
  subtitulo: string;
  papel: string;
  tradicao: string;
  descricao: string[];
  detalhes?: string;
}

export interface LinhagemData {
  titulo: string;
  subtitulo: string;
  ileMatriz: CasaLinhagem;
  ileFilho: CasaLinhagem;
  textoLinhagem: string[];
}

export const linhagemData: LinhagemData = {
  titulo: "Rama Familiar",
  subtitulo: "A origem e a caminhada sagrada: de onde viemos e a matriz que somos.",
  ileMatriz: {
    nome: "Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá",
    subtitulo: "Omoloko de Raiz Makumba",
    papel: "Casa do Pai / Referência de Origem",
    tradicao: "Omoloko de Raiz Makumba",
    descricao: [
      "[A história do Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá será inserida aqui pelo responsável da casa.]",
      "[Espaço reservado para o registro histórico da casa de origem do pai e das memórias da família de santo.]"
    ],
    detalhes: "Casa do pai e referência da nossa origem, de onde herdamos a bênção, a reverência aos mais velhos e o respeito ancestral."
  },
  ileFilho: {
    nome: "Oko Ìdílé Ọya",
    subtitulo: "Omoloko de Raiz Nagô",
    papel: "Minha Casa (Matriz consagrada)",
    tradicao: "Omoloko de Raiz Nagô",
    descricao: [
      "[A história da fundação do Oko Ìdílé Ọya e sua consolidação como Matriz Nagô será inserida aqui.]",
      "[Registro da trajetória espiritual, da elevação dos pilares e do respeito à regência de Mãe Ọya.]"
    ],
    detalhes: "Omoloko de Raiz Nagô, preservando o cultivo tradicional dos Òrìṣà, dos fundamentos e do aprendizado."
  },
  textoLinhagem: [
    "A relação entre o Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá e o Oko Ìdílé Ọya expressa a nossa linhagem e o caminho sagrado de onde viemos.",
    "Com profundo respeito e reverência à casa do pai (Omoloko de Raiz Makumba), o Oko Ìdílé Ọya ergue-se como Omoloko de Raiz Nagô, mantendo viva a memória, a disciplina e a transmissão do Àṣẹ para os seus filhos."
  ]
};
