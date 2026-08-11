export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface HistoriaData {
  title: string;
  subtitle: string;
  introduction: string;
  seccaoIlePai: {
    title: string;
    sub: string;
    paragraphs: string[];
  };
  seccaoMinhaCasa: {
    title: string;
    sub: string;
    paragraphs: string[];
    highlight?: string;
  };
  timeline: TimelineItem[];
}

export const historiaData: HistoriaData = {
  title: "História do Oko Ìdílé Ọya",
  subtitle: "Memória, ancestralidade e a caminhada entre o Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá e a Matriz Oko Ìdílé Ọya.",
  introduction: "O caminho espiritual que sustenta o Oko Ìdílé Ọya é pautado pelo respeito à ancestralidade, pela disciplina dos ritos e pela honra aos ensinamentos transmitidos por nossos antepassados.",
  seccaoIlePai: {
    title: "A História do Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá",
    sub: "Omoloko de Raiz Makumba — Casa de Origem & Referência",
    paragraphs: [
      "[A história do Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá será inserida aqui pelo responsável da casa.]",
      "[Este espaço registrará a trajetória da casa do pai, os fundamentos da raiz Makumba e os primeiros passos que abriram caminho para nossa família de santo.]"
    ]
  },
  seccaoMinhaCasa: {
    title: "A História do Oko Ìdílé Ọya",
    sub: "Omoloko de Raiz Nagô",
    paragraphs: [
      "[A história do Oko Ìdílé Ọya será inserida aqui pelo responsável da casa.]",
      "[Este espaço receberá o histórico de fundação da nossa casa, a consagração dos assentamentos, os ritos e a consolidação da Omoloko de Raiz Nagô.]"
    ],
    highlight: "Um espaço dedicado à memória, ao conhecimento, à tradição e aos ensinamentos do Oko Ìdílé Ọya."
  },
  timeline: [
    {
      year: "[Ano]",
      title: "Origens no Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá",
      description: "[Descrição do marco inicial na casa de origem do pai — Omoloko de Raiz Makumba.]"
    },
    {
      year: "[Ano]",
      title: "Fundação do Oko Ìdílé Ọya",
      description: "[Descrição da fundação e assentamento da Omoloko de Raiz Nagô.]"
    },
    {
      year: "[Ano]",
      title: "Consolidação da Família de Santo",
      description: "[Marcos importantes de iniciações, festividades e presenças rituais.]"
    }
  ]
};
