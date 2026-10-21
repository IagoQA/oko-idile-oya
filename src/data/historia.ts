export interface HistoriaData {
  title: string;
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
  };
}

export const historiaData: HistoriaData = {
  title: "História do Oko Ìdílé Ọya",
  introduction: "A história do Oko Ìdílé Ọya representa um testemunho vivo de resistência e vitória ancestral. Situado em Luiz Alves, Santa Catarina, é reconhecido como o primeiro Templo de Matriz Africana do município, tornando-se parte fundamental da preservação da ancestralidade, da cultura e da tradição de nossa comunidade.",
  seccaoIlePai: {
    title: "A História do Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá",
    sub: "Omoloko de Raiz Makumba",
    paragraphs: [
      "[A história do Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá será inserida aqui pelo responsável da casa.]",
      "[Este espaço registrará a trajetória da casa do pai, os fundamentos da raiz Makumba e os primeiros passos que abriram caminho para nossa família de santo.]"
    ]
  },
  seccaoMinhaCasa: {
    title: "A História do Oko Ìdílé Ọya",
    sub: "Omoloko de Raiz Nagô",
    paragraphs: [
      "Fundado em 21 de dezembro de 2024, o Oko Ìdílé Ọya nasceu com o propósito de entrar para a história não apenas como uma casa de culto, mas como um espaço de preservação, continuidade e fortalecimento da ancestralidade afro-brasileira.",
      "Sua criação representa o resultado de uma caminhada de fé, resistência e compromisso com os ensinamentos que atravessaram gerações. Em Luiz Alves, Santa Catarina, o Oko Ìdílé Ọya ergue-se como um marco para a presença da tradição de Matriz Africana, buscando preservar seus fundamentos, seus ritos, seus cânticos, seus saberes e, sobretudo, o respeito aos nossos ancestrais. Nossa história está apenas começando. E, desde o primeiro dia, carregamos a responsabilidade de construir um legado que permaneça para além de nosso tempo — honrando aqueles que vieram antes de nós, fortalecendo os que caminham conosco hoje e preparando o caminho para aqueles que ainda virão.",
      "O Oko Ìdílé Ọya nasce, assim, com os olhos voltados para o futuro, mas com os pés firmes no presente. Uma casa construída para cultuar, ensinar, preservar e, acima de tudo, manter viva uma história que jamais poderá ser apagada.",
    ],
  },
};
