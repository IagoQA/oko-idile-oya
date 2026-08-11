export interface FotoItem {
  id: string;
  titulo: string;
  categoria: 'Eventos' | 'Obrigações' | 'Festa' | 'Casa' | 'Pessoas' | 'Memória' | 'Outros';
  data: string;
  descricao: string;
  imagemUrl: string;
}

export const categoriasGaleria = [
  'Todas',
  'Eventos',
  'Obrigações',
  'Festa',
  'Casa',
  'Pessoas',
  'Memória',
  'Outros'
] as const;

export const galeriaData: FotoItem[] = [
  {
    id: "foto-1",
    titulo: "Fachada & Altar do Oko Ìdílé Ọya",
    categoria: "Casa",
    data: "2026-01-01",
    descricao: "[Registro fotográfico da casa será inserido aqui quando enviado pelo responsável.]",
    imagemUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "foto-2",
    titulo: "Registro de Festividade Sagrada",
    categoria: "Festa",
    data: "2026-02-14",
    descricao: "[Foto comemoração e louvor aos Òrìṣà.]",
    imagemUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "foto-3",
    titulo: "Encontro dos Filhos da Casa",
    categoria: "Pessoas",
    data: "2026-03-20",
    descricao: "[Foto da comunidade e filhos de santo reunidos.]",
    imagemUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "foto-4",
    titulo: "Memória da Linhagem e Raiz",
    categoria: "Memória",
    data: "2026-04-10",
    descricao: "[Registro da história e raízes do Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá e Oko Ìdílé Ọya.]",
    imagemUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "foto-5",
    titulo: "Ritual de Obrigação Espiritual",
    categoria: "Obrigações",
    data: "2026-05-18",
    descricao: "[Registro simbólico das obrigações rituais da casa.]",
    imagemUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "foto-6",
    titulo: "Ciclo de Ritos e Eventos",
    categoria: "Eventos",
    data: "2026-06-25",
    descricao: "[Registro do ciclo de eventos e cerimônias.]",
    imagemUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop"
  }
];
