export interface Apostila {
  id: string;
  titulo: string;
  descricao: string;
  categoria: 'Fundamentos' | 'Òrìṣà' | 'Orin (Cantigas)' | 'Ìtàn (Histórias)' | 'Ewé (Ervas)' | 'Cargos' | 'Estudos' | 'Outros';
  data: string;
  formato: 'PDF' | 'DOCX' | 'Imagem' | 'Digital';
  tamanho?: string;
  autor?: string;
  conteudoPlaceholder: string;
  downloadUrl?: string;
}

export const categoriasApostilas = [
  'Todas',
  'Fundamentos',
  'Òrìṣà',
  'Orin (Cantigas)',
  'Ìtàn (Histórias)',
  'Ewé (Ervas)',
  'Cargos',
  'Estudos',
  'Outros'
] as const;

export const apostilasData: Apostila[] = [
  {
    id: "apostila-1",
    titulo: "Apostila de Fundamentos da Casa",
    descricao: "Guia introdutório com preceitos, etiqueta no Ilé, respeito aos mais velhos e conduta Omoloko.",
    categoria: "Fundamentos",
    data: "2026-01-10",
    formato: "PDF",
    tamanho: "2.4 MB",
    autor: "Oko Ìdílé Ọya",
    conteudoPlaceholder: "[Conteúdo detalhado da apostila de Fundamentos será inserido aqui quando o arquivo definitivo for enviado.]"
  },
  {
    id: "apostila-2",
    titulo: "Estudo sobre a Regência de Ọya",
    descricao: "Ensinamentos sobre os aspectos, oferendas simbólicas, elementos e energia da Mãe Ọya.",
    categoria: "Òrìṣà",
    data: "2026-02-15",
    formato: "PDF",
    tamanho: "1.8 MB",
    autor: "Oko Ìdílé Ọya",
    conteudoPlaceholder: "[Conteúdo do estudo de Ọya será inserido aqui pelo sacerdote/dirigente da casa.]"
  },
  {
    id: "apostila-3",
    titulo: "Repertório de Cantigas do Ṣiré",
    descricao: "Apostila de acompanhamento dos Orin (cânticos) entoados nos rituais e festividades da casa.",
    categoria: "Orin (Cantigas)",
    data: "2026-03-01",
    formato: "DOCX",
    tamanho: "1.2 MB",
    autor: "Oko Ìdílé Ọya",
    conteudoPlaceholder: "[Conteúdo das cantigas impressas e suas ordenações rituais será inserido aqui.]"
  },
  {
    id: "apostila-4",
    titulo: "Caderno de Ewé (Ervas Sagradas)",
    descricao: "Classificação das ervas de amaci, banhos rituais e fundamentação de purificação espiritual.",
    categoria: "Ewé (Ervas)",
    data: "2026-04-12",
    formato: "PDF",
    tamanho: "3.1 MB",
    autor: "Oko Ìdílé Ọya",
    conteudoPlaceholder: "[Conteúdo do estudo das ervas sagradas e preceitos de colheita será inserido aqui.]"
  },
  {
    id: "apostila-5",
    titulo: "Ìtàn — Histórias Mitológicas dos Òrìṣà",
    descricao: "Coletânea de Ìtàn tradicionais preservados para estudo dos filhos e frequentadores.",
    categoria: "Ìtàn (Histórias)",
    data: "2026-05-04",
    formato: "PDF",
    tamanho: "4.0 MB",
    autor: "Oko Ìdílé Ọya",
    conteudoPlaceholder: "[Coletânea de Ìtàn mitológicos será inserida aqui.]"
  },
  {
    id: "apostila-6",
    titulo: "Manual de Cargos e Responsabilidades",
    descricao: "Diretrizes e atribuições de cada cargo ritual dentro da hierarquia da casa.",
    categoria: "Cargos",
    data: "2026-06-20",
    formato: "PDF",
    tamanho: "1.5 MB",
    autor: "Oko Ìdílé Ọya",
    conteudoPlaceholder: "[Conteúdo explicativo dos cargos e conduta responsável na casa será inserido aqui.]"
  }
];
