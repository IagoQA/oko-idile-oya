export interface CargoItem {
  id: string;
  nome: string;
  categoria: 'Cargos' | 'EKÉJÌ' | 'OGANS' | 'POSIÇÕES ESPIRITUAIS';
  descricao?: string;
  responsabilidades?: string[];
}

export const cargosData: CargoItem[] = [
  /* CARGOS GERAIS DA CASA */
  { id: "c-1", nome: "Olórí Oko", categoria: "Cargos" },
  { id: "c-2", nome: "Ìyálóde", categoria: "Cargos" },
  { id: "c-3", nome: "Bàbálòrìṣà", categoria: "Cargos" },
  { id: "c-4", nome: "Ìyálòrìṣà", categoria: "Cargos" },
  { id: "c-5", nome: "Bàbákékéré", categoria: "Cargos" },
  { id: "c-6", nome: "Ìyákékéré", categoria: "Cargos" },
  { id: "c-7", nome: "Ìyá Àgbà", categoria: "Cargos" },
  { id: "c-8", nome: "Ìyá Ẹgbẹ́", categoria: "Cargos" },
  { id: "c-9", nome: "Bàbá Ẹgbẹ́", categoria: "Cargos" },
  { id: "c-10", nome: "Abéṣùmulẹ̀", categoria: "Cargos" },
  { id: "c-11", nome: "Olú Oko", categoria: "Cargos" },
  { id: "c-12", nome: "Ìyá Olọ́ya", categoria: "Cargos" },
  { id: "c-13", nome: "Asọgbá", categoria: "Cargos" },
  { id: "c-14", nome: "Àwòrò Ọ̀ṣun", categoria: "Cargos" },
  { id: "c-15", nome: "Mọ́gbà", categoria: "Cargos" },
  { id: "c-16", nome: "Ìyá Nàsó", categoria: "Cargos" },
  { id: "c-17", nome: "Ọlọbà", categoria: "Cargos" },
  { id: "c-18", nome: "Aṣògún", categoria: "Cargos" },
  { id: "c-19", nome: "Abọrẹ Òṣọ́ọ̀sì", categoria: "Cargos" },
  { id: "c-20", nome: "Abọrẹ Ológun Ẹdẹ", categoria: "Cargos" },
  { id: "c-21", nome: "Bàbálọ̀sányìn", categoria: "Cargos" },
  { id: "c-22", nome: "Ìyá Olódò", categoria: "Cargos" },
  { id: "c-23", nome: "Ìyá Yewa", categoria: "Cargos" },
  { id: "c-24", nome: "Bàbá Olóṣùmàrè", categoria: "Cargos" },
  { id: "c-25", nome: "Ìyá Olóṣùmàrè", categoria: "Cargos" },
  { id: "c-26", nome: "Ọlọ́ Lẹ́sẹ̀", categoria: "Cargos" },
  { id: "c-27", nome: "Ọlọ́bàtálá", categoria: "Cargos" },
  { id: "c-28", nome: "Bàbálàgbà", categoria: "Cargos" },
  { id: "c-29", nome: "Ìyá Ìránṣẹ́", categoria: "Cargos" },
  { id: "c-30", nome: "Ọlọ́bẹ", categoria: "Cargos" },
  { id: "c-31", nome: "Apogan", categoria: "Cargos" },
  { id: "c-32", nome: "Apotun", categoria: "Cargos" },
  { id: "c-33", nome: "Ejitata", categoria: "Cargos" },
  { id: "c-34", nome: "Oganlá", categoria: "Cargos" },
  { id: "c-35", nome: "Elemaso", categoria: "Cargos" },
  { id: "c-36", nome: "Ìyádàgan", categoria: "Cargos" },
  { id: "c-37", nome: "Ìyá Efun", categoria: "Cargos" },
  { id: "c-38", nome: "Bàbá Efun", categoria: "Cargos" },
  { id: "c-39", nome: "Ìyágbàsè", categoria: "Cargos" },
  { id: "c-40", nome: "Òjíṣẹ́", categoria: "Cargos" },
  { id: "c-41", nome: "Olóròógun", categoria: "Cargos" },
  { id: "c-42", nome: "Onísègùn", categoria: "Cargos" },
  { id: "c-43", nome: "Olójò", categoria: "Cargos" },
  { id: "c-44", nome: "Ìyá Àgbà Ewé", categoria: "Cargos" },

  /* EKÉJÌ */
  { id: "ek-1", nome: "Ekéjì", categoria: "EKÉJÌ" },
  { id: "ek-2", nome: "Ajimudá", categoria: "EKÉJÌ" },
  { id: "ek-3", nome: "Dàgan", categoria: "EKÉJÌ" },
  { id: "ek-4", nome: "Ìyádàgan", categoria: "EKÉJÌ" },

  /* OGANS */
  { id: "og-1", nome: "Aṣògún", categoria: "OGANS" },
  { id: "og-2", nome: "Balogun", categoria: "OGANS" },
  { id: "og-3", nome: "Olobé", categoria: "OGANS" },
  { id: "og-4", nome: "Alagbê", categoria: "OGANS" },
  { id: "og-5", nome: "Onílù", categoria: "OGANS" },
  { id: "og-6", nome: "Bàrà Tébèsè", categoria: "OGANS" },
  { id: "og-7", nome: "Apogan", categoria: "OGANS" },
  { id: "og-8", nome: "Apotun", categoria: "OGANS" },
  { id: "og-9", nome: "Ejitata", categoria: "OGANS" },
  { id: "og-10", nome: "Oganlá", categoria: "OGANS" },
  { id: "og-11", nome: "Elemaso", categoria: "OGANS" },

  /* POSIÇÕES ESPIRITUAIS */
  { id: "pe-1", nome: "Ẹgbọ́n", categoria: "POSIÇÕES ESPIRITUAIS", descricao: "Irmão ou irmã mais velho(a) na caminhada espiritual da casa." },
  { id: "pe-2", nome: "Ìyàwó", categoria: "POSIÇÕES ESPIRITUAIS", descricao: "Filho ou filha iniciado(a) recolhido(a) na tradição da casa." },
  { id: "pe-3", nome: "Àbíyán", categoria: "POSIÇÕES ESPIRITUAIS", descricao: "Iniciando, frequentador ou aspirante em aprendizado inicial." },
  { id: "pe-4", nome: "Ìkèsí", categoria: "POSIÇÕES ESPIRITUAIS", descricao: "Posição de respeito e aprendizado ritual na comunidade." }
];
