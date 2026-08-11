export interface Cantiga {
  id: string;
  nome: string;
  orisha: string;
  letra: string;
  traducao?: string;
  observacao?: string;
  audioUrl?: string;
}

export const orishasSire = [
  'Todos',
  'Onílẹ̀',
  'Èṣù',
  'Òrìṣà Oko',
  'Ọya',
  'Ọbalúwaiyé',
  'Ṣàngó',
  'Ọ̀ṣun',
  'Ọbà',
  'Ògún',
  'Ọ̀ṣọ́ọ̀sì',
  'Ológun Ẹdẹ',
  'Ọ̀sányìn',
  'Yemọjá',
  'Yewa',
  'Òṣùmàrè',
  'Ọmọlú / Nàná Bùkúù',
  'Òṣàlá'
] as const;

export const cantigasData: Cantiga[] = [
  /* ONÍLẸ̀ */
  {
    id: "onile-1",
    nome: "Ìbà Òrìṣà (ìbà Onílẹ̀)",
    orisha: "Onílẹ̀",
    letra: "Ìbà Òrìṣà\nìbà Onílẹ̀\nOnílẹ̀ mo júbà òo",
    traducao: "Bênção Òrìṣà\nBênção Onílẹ̀\nOnílẹ̀, meus respeitos"
  },
  {
    id: "onile-2",
    nome: "E wá Onílẹ̀ ṣeré ló bò",
    orisha: "Onílẹ̀",
    letra: "E wá Onílẹ̀ ṣeré ló bò\nOnílẹ̀ ṣeré òo",
    traducao: "Ela vem nos cobrir de alegria e tranquilidade.\nOnílẹ̀ é alegria"
  },
  {
    id: "onile-3",
    nome: "Ìbà ìbà ìbà Onílẹ̀",
    orisha: "Onílẹ̀",
    letra: "Ìbà ìbà ìbà Onílẹ̀\nOnílẹ̀ mo júbà òo",
    traducao: "Bençãos, bençãos, bençãos Onílẹ̀\nOnílẹ̀, meus respeitos"
  },

  /* ÈṢÙ */
  {
    id: "esu-1",
    nome: "Èṣù Ọ̀nà mọ tirè lóde",
    orisha: "Èṣù",
    letra: "Èṣù Ọ̀nà\nÈṣù Ọ̀nà mọ tirè lóde Ẹlẹ́gbára\nBara ni ìyè\nÈṣù Ọ̀nà òkè wa òo",
    traducao: "Èṣù Ọ̀nà.\nÈṣù Ọ̀nà. Eu despertei no lado de fora, Ẹlẹ́gbára\nBara é vida\nÈṣù Ọ̀nà está acima de nós"
  },
  {
    id: "esu-2",
    nome: "Ẹlẹ́gbára òo",
    orisha: "Èṣù",
    letra: "Ẹlẹ́gbára òo. Ẹlẹ́gbára Èṣù",
    traducao: "Ẹlẹ́gbára òo. Ẹlẹ́gbára é Èṣù"
  },
  {
    id: "esu-3",
    nome: "Ọ̀dàrà ló ṣọọrọ",
    orisha: "Èṣù",
    letra: "Ọ̀dàrà ló ṣọọrọ\nỌ̀dàrà ló ṣọọrọ lọ́nà\nỌ̀dàrà ló ṣọọrọ\nẸ ló ṣọọrọ Ọ̀dàrà\nLó ṣọọrọ lọ́nà",
    traducao: "Ọ̀dàrà é o grande\nỌ̀dàrà é o grande dono dos caminhos\nỌ̀dàrà é o grande\nÉ o grande Ọ̀dàrà\nO grande dono dos caminhos"
  },
  {
    id: "esu-4",
    nome: "Iná iná mo júbà òo",
    orisha: "Èṣù",
    letra: "Iná iná mo júbà òo\nIná mo júbà",
    traducao: "Ao fogo, ao fogo os meus respeitos.\nAo fogo os meus respeitos"
  },
  {
    id: "esu-5",
    nome: "O mu ọrọ̀ wa sí ilé",
    orisha: "Èṣù",
    letra: "O mu ọrọ̀ wa sí ilé\nLáròyé Èṣù Láàlú",
    traducao: "Ele traz riqueza para nossa casa.\nLáròyé Èṣù Láàlú"
  },
  {
    id: "esu-6",
    nome: "Èṣù, Tárè sàsà Tárè wá bá mi",
    orisha: "Èṣù",
    letra: "Èṣù, Tárè sàsà Tárè wá bá mi\nLáròyé, Tárè wá o\n\n(refrão)\nTárè sàsà Tárè wá bá mi\nIre àìkú\n\n(refrão)\nTárè sàsà Tárè wá bá mi\nIre ajé\n\n(refrão)\nSàsà Tárè wá bá mi\nIre ìfẹ̀\n\n(refrão)\nTárè sàsà Tárè wá bá mi\nIre ọmo\n\n(refrão)\nTárè sàsà Tárè wá bá mi\nIre ìṣẹ̀gún",
    traducao: "Èṣù, encaminhe a sorte com fartura até mim.\nLáròyé, que a fartura venha para mim.\nSorte de vida longa\nSorte de prosperidade\nSorte de amor\nSorte de filhos\nSorte de vitória"
  },
  {
    id: "esu-7",
    nome: "Láàlú ò lórúnkún ẹjọ́",
    orisha: "Èṣù",
    letra: "Láàlú ò lórúnkún ẹjọ́\nÀfi ṣónṣó abẹ\nÈṣù Ọ̀dàrà ò lòrì à ngbẹ́rù lé oo\nÀfi ṣónṣó abẹ\n\nLáròyé ò lórúnkún ẹjọ́\nÀfi ṣónṣó abẹ\nÈṣù Ọ̀dàrà ò lọ́rùn à ngbẹ́rù sí oo\nÀfi ṣónṣó abẹ\n\nÀfi ṣónṣó abẹ,\nÀfi ṣónṣó abẹ,\nÈṣù Ọ̀dàrà ò lòrì à ngbẹ́rù lé oo\nÀfi ṣónṣó abẹ",
    traducao: "Láàlú não tem joelhos para falar,\nExceto a ponta afiada de uma faca.\nÈṣù Ọ̀dàrà não tem cabeça para suportar peso!\nExceto a ponta afiada de uma faca.\n\nLáròyé não tem joelhos para falar,\nExceto a ponta afiada de uma faca.\nÈṣù Ọ̀dàrà não tem pescoço para se colocar carga!\nExceto a ponta afiada de uma faca.\n\nExceto a ponta afiada de uma faca,\nExceto a ponta afiada de uma faca,\nÈṣù Ọ̀dàrà não tem cabeça para suportar peso!\nExceto a ponta afiada de uma faca."
  },
  {
    id: "esu-8",
    nome: "Ire ayé mi lọ́wọ́ Èṣù lo wà oo",
    orisha: "Èṣù",
    letra: "Ire ayé mi lọ́wọ́ Èṣù lo wà oo\nÈṣù Ọ̀dàrà, ṣowó fún mi lọ́pọ̀ lọ́pọ̀\nkí n rowó ṣayé",
    traducao: "A benção da minha está nas mãos de Èṣù\nÈṣù Ọ̀dàrà me de riqueza em abundância\nPara que eu carregue dinheiro e tenha uma vida boa"
  },
  {
    id: "esu-9",
    nome: "Láròyé, láròyé — A ẹ̀jẹ̀ ọ̀tá sílẹ̀",
    orisha: "Èṣù",
    letra: "Láròyé, láròyé\nA ẹ̀jẹ̀ ọ̀tá sílẹ̀",
    traducao: "Láròyé, láròyé\nAquele que derrama o sangue do inimigo ao chão"
  },

  /* ÒRÌṢÀ OKO */
  {
    id: "oko-1",
    nome: "Bàbá Òrìṣà Ko lọba",
    orisha: "Òrìṣà Oko",
    letra: "Bàbá Òrìṣà Ko lọba\nOmoloko\nÌbùkún ni",
    traducao: "Pai Òrìṣà Oko é rei\nOmoloko\nÉ abençoado"
  },
  {
    id: "oko-2",
    nome: "Òrìṣà Oko — O loyin, O lóró",
    orisha: "Òrìṣà Oko",
    letra: "Òrìṣà Oko\nO loyin\nO lóró\nẸ̀rín ni o rìn kò mi\nO loyin\nO lóró",
    traducao: "Òrìṣà Ọkò\nVocê tem o doce\nVocê tem o amargo\nQue você sorria para mim ao me encontrar\nVocê tem o doce\nVocê tem o amargo"
  },
  {
    id: "oko-3",
    nome: "Òrìṣà Oko — Ọba nlá Omoloko",
    orisha: "Òrìṣà Oko",
    letra: "Òrìṣà Oko\nỌba nlá Omoloko",
    traducao: "Òrìṣà Ọkò\nÉ o grande rei de Omoloko"
  },
  {
    id: "oko-4",
    nome: "Òrìṣà Oko — Olúwa igi nlá",
    orisha: "Òrìṣà Oko",
    letra: "Òrìṣà Oko\nOlúwa igi nlá",
    traducao: "Òrìṣà Ọkò\nNosso senhor, a árvore maior"
  },
  {
    id: "oko-5",
    nome: "E Oko — E Oko dé",
    orisha: "Òrìṣà Oko",
    letra: "E Oko\nE Oko dé\nE Oko\nỌmọ gbáralé yìn",
    traducao: "E Oko\nE Oko chegou\nE Oko\nOs filhos confiam em ti e te louvam"
  },
  {
    id: "oko-6",
    nome: "Àwa nroko",
    orisha: "Òrìṣà Oko",
    letra: "Àwa nroko\nOko bí ẹ̀rọ̀\nBí ẹ̀rọ̀ bí ẹ̀rọ̀",
    traducao: "Nós estamos louvando o solo\nOko distribui gentileza (calmaria)\nDistribui gentileza, distribui calmaria."
  },

  /* ỌYA */
  {
    id: "oya-1",
    nome: "Ìyá ìlẹ̀kùn ọ̀run oo",
    orisha: "Ọya",
    letra: "Ìyá ìlẹ̀kùn ọ̀run oo\nÌyá ìlẹ̀kùn ọ̀run oo",
    traducao: "Mãe da porta do céu\nMãe da porta do céu"
  },
  {
    id: "oya-2",
    nome: "Nínú ikùn afẹ́ẹ́fẹ́",
    orisha: "Ọya",
    letra: "Nínú ikùn afẹ́ẹ́fẹ́\nỌya ni olórí mi",
    traducao: "Nasci do vento\nỌya é dona do meu orí"
  },
  {
    id: "oya-3",
    nome: "Ọya dé mi Ọya",
    orisha: "Ọya",
    letra: "Ọya dé mi Ọya\nỌya dé ti ọ̀run",
    traducao: "Ọya chegou, minha Ọya\nỌya já chegou do ọ̀run"
  },
  {
    id: "oya-4",
    nome: "Àrá ni bò — Àrá ni bò àgò Ọya",
    orisha: "Ọya",
    letra: "Àrá ni bò\nÀrá ni bò àgò Ọya\nỌya Ìgbálẹ̀ ní àkàrà oo\nÀrá ni bò àgò\nỌya Ìgbálẹ̀",
    traducao: "O trovão protege\nO trovão protege com a permissão de Ọya\nỌya Ìgbálẹ̀ possui o àkàrà\nO trovão protege com a permissão de Ọya Ìgbálẹ̀"
  },
  {
    id: "oya-5",
    nome: "Ọya tete",
    orisha: "Ọya",
    letra: "Ọya tete\nỌya tete yàgbà\nỌya tete Ọya bálẹ̀\nỌya tete yàgbà",
    traducao: "Ọya é rápida\nỌya é rápida e agitada\nỌya é rápida\nỌya, é quem governa\nỌya é rápida e agitada"
  },
  {
    id: "oya-6",
    nome: "Mo ṣe kùrẹ́, mo foríbalẹ̀ Ọya gan",
    orisha: "Ọya",
    letra: "Mo ṣe kùrẹ́, mo foríbalẹ̀ Ọya gan\nỌya, Ìyá Mẹ́sàn\nỌya dé owó\nỌya gan\nỌya dé ẹlẹ́mí aládò",
    traducao: "Eu saúdo com reverência, eu bato cabeça para Oyá com verdade.\nỌya, Mãe dos Nove.\nỌya traz dinheiro.\nỌya, verdadeiramente.\nỌya chegou para aquele que possui vida tranquila e serena."
  },
  {
    id: "oya-7",
    nome: "Ọya Òrírì",
    orisha: "Ọya",
    letra: "Ọya Òrírì\nAyá Ṣàngó\nẸni ń bínú\nỌya yọrí já Olúkoso",
    traducao: "Ọya, a vitoriosa,\nEsposa de Ṣàngó.\nQuem se enfurece com Ọya,\nErgue a cabeça contra Olúkoso"
  },
  {
    id: "oya-8",
    nome: "Ọya bálẹ̀ láárí oo",
    orisha: "Ọya",
    letra: "Ọya bálẹ̀ láárí oo\nỌya bálẹ̀ láárí oo\nÀdá máà dé fàrá gbélé\nỌya bálẹ̀ láárí oo",
    traducao: "Ọya é governanta valorosa\nỌya é governanta valorosa\nQue sua espada não atinja, com raios, a casa que moramos"
  },

  /* ỌBALÚWAIYÉ */
  {
    id: "obaluwaiye-1",
    nome: "Àgò onílé, onílé, onílé madàgò",
    orisha: "Ọbalúwaiyé",
    letra: "Àgò onílé, onílé, onílé madàgò\nBaba mi Olúwa madàgò\nÀgò onílé àgò",
    traducao: "Licença ao dono da casa, ao dono da casa peço licença.\nMeu pai, nosso senhor.\nPeço licença ao dono da casa."
  },
  {
    id: "obaluwaiye-2",
    nome: "Ọba Ilẹ̀, ayé àti àṣẹ mi",
    orisha: "Ọbalúwaiyé",
    letra: "Ọba Ilẹ̀, ayé àti àṣẹ mi\nOlúwayé, ọba mi Olúwa",
    traducao: "Rei da Terra, do mundo e do meu àṣẹ,\nOlúwayé, rei meu senhor."
  },
  {
    id: "obaluwaiye-3",
    nome: "Ọpẹ́ ire onílẹ̀ wa a lẹ́sẹ̀ Òrìṣà",
    orisha: "Ọbalúwaiyé",
    letra: "Ọpẹ́ ire onílẹ̀ wa a lẹ́sẹ̀ Òrìṣà\nỌpẹ́ ire\nOnílẹ̀ wa\nLẹ́sẹ̀ Òrìṣà\nỌpẹ́ ire",
    traducao: "Nós agradecemos as bênçãos, O senhor da terra está entre nós, estamos aos pés de Òrìṣà\nNós agradecemos as bênçãos\nO senhor da terra está entre nós\nEstamos aos pés de Òrìṣà\nNós agradecemos as bênçãos"
  },
  {
    id: "obaluwaiye-4",
    nome: "Má ṣe kojú olúṣetọ ọ̀nà",
    orisha: "Ọbalúwaiyé",
    letra: "Má ṣe kojú olúṣetọ ọ̀nà\nMá ṣe kojú olúṣetọ\nÒrìṣà tí nmú\nTí nmú pẹ̀lú ìyá rẹ̀\nMo bọ̀wọ̀ fún ọ\nMo bọ̀wọ̀ fún",
    traducao: "Não se oponha ao feiticeiro do caminho\nNão se oponha ao feiticeiro\nÒrìṣà que é severo,\nQue pune junto com sua mãe\nEu respeito você\nEu respeito"
  },
  {
    id: "obaluwaiye-5",
    nome: "Dàgò — Lù nà ké wá ṣaworo",
    orisha: "Ọbalúwaiyé",
    letra: "Dàgò\nLù nà ké wá ṣaworo\nÀgò lélẹ̀\nDàgò\nLù nà ké wá ṣaworo\nÀgò lélẹ̀",
    traducao: "Peço licença\nToquem e chamem o Ṣaworo para que venha.\nPeço licença ao chão\nPeço licença\nToquem e chamem o Ṣaworo para que venha.\nPeço licença ao chão"
  },
  {
    id: "obaluwaiye-6",
    nome: "Dàgò ilẹ̀ ilé",
    orisha: "Ọbalúwaiyé",
    letra: "Dàgò ilẹ̀ ilé\nDàgò ilẹ̀ ilé\nDàgò lọnà Olúwaiyé",
    traducao: "Peço licença à terra e à casa\nPeço licença à terra e à casa\nAbram caminho para Olúwaiyé"
  },
  {
    id: "obaluwaiye-7",
    nome: "Gbékúrò Àrùn",
    orisha: "Ọbalúwaiyé",
    letra: "Gbékúrò (×3)\nÀrùn",
    traducao: "Removeu (×3)\nDoença"
  },
  {
    id: "obaluwaiye-8",
    nome: "Ni ọkàn Olúwaiyé",
    orisha: "Ọbalúwaiyé",
    letra: "Ni ọkàn\nOlúwaiyé\nTí ó fà lórí",
    traducao: "No coração\nEstá Olúwaiyé\nAquele que chama tudo para si."
  },
  {
    id: "obaluwaiye-9",
    nome: "Ọbalúwaiyé, Ọbalúwaiyé oo",
    orisha: "Ọbalúwaiyé",
    letra: "Ọbalúwaiyé, Ọbalúwaiyé oo\nỌwọ́ lodò, ọwọ́ loko\nỌbalúwaiyé",
    traducao: "Ọbalúwaiyé, Ọbalúwaiyé!\nSeu poder está no rio, seu poder está no campo\nỌbalúwaiyé"
  },

  /* ṢÀNGÓ */
  {
    id: "sango-1",
    nome: "Aganjú, Òrìṣà àwò Ògbóni",
    orisha: "Ṣàngó",
    letra: "Aganjú, Òrìṣà àwò Ògbóni\nAganjú, Òrìṣà àwò Ògbóni\nÀwúre Ṣàngó, àwúre\nÒgbóni, Ògbóni, Ògbóni",
    traducao: "Aganjú, divindade do segredo dos Ògbóni,\nAganjú, divindade do segredo dos Ògbóni.\nBenção, Ṣàngó, benção.\nÒgbóni, Ògbóni, Ògbóni."
  },
  {
    id: "sango-2",
    nome: "Ìdájọ́ ni mo opẹ́",
    orisha: "Ṣàngó",
    letra: "Ìdájọ́ ni mo opẹ́\nKáwò ó o Ṣàngó",
    traducao: "Eu sou grato pela justiça\nQue possamos olhar Ṣàngó"
  },
  {
    id: "sango-3",
    nome: "Ọ̀run nsọ lẹwà",
    orisha: "Ṣàngó",
    letra: "Ọ̀run nsọ lẹwà\nỌba Ṣàngó",
    traducao: "O céu se ilumina com beleza\nÉ o rei Ṣàngó"
  },
  {
    id: "sango-4",
    nome: "Iná ni agbára rẹ",
    orisha: "Ṣàngó",
    letra: "Iná ni agbára rẹ\nṢàngó ọba, iná ni agbára rẹ",
    traducao: "O fogo é seu poder\nRei Ṣàngó, o fogo é seu poder"
  },
  {
    id: "sango-5",
    nome: "Àyrá ò, Àyrá lẹ́",
    orisha: "Ṣàngó",
    letra: "Àyrá ò, Àyrá lẹ́\nOlúwa ti Àyrá ò, Àyrá lẹ́",
    traducao: "Saúdo Àyrá (Senhor dos trovões)\nO senhor do trovão é o próprio trovão!"
  },
  {
    id: "sango-6",
    nome: "Àyrá ará ilé",
    orisha: "Ṣàngó",
    letra: "Àyrá ará ilé\nMànàmáná\nÀyrá lẹ́",
    traducao: "O trovão é da nossa casa, ele relampeja.\nVocê é o próprio trovão."
  },
  {
    id: "sango-7",
    nome: "Àyrá òjò, mo pè ẹ sẹ̀",
    orisha: "Ṣàngó",
    letra: "Àyrá òjò, mo pè ẹ sẹ̀\nÀyrá òjò, mo pè ẹ sẹ̀ ò",
    traducao: "Trovão da chuva, eu te invoco para que se manifeste.\nTrovão da chuva, eu te chamo para que responda."
  },

  /* Ọ̀ṢUN */
  {
    id: "osun-1",
    nome: "Yé, yèyé oo — Ìyá Ọ̀ṣun nilé",
    orisha: "Ọ̀ṣun",
    letra: "Yé, yèyé oo\nÌyá Ọ̀ṣun nilé\nYé Ọ̀ṣun nilé\n\nỌmọnilé ọkàn mímọ́\nÌyá túndé Ìjẹ̀ṣà\nÌyá túndé ẹ kú àbọ̀\nOmi rẹ o yèyé oo\n\nẸ kú àbọ̀ nilé oo\nẸ kú àbọ̀ Ìjẹ̀ṣà",
    traducao: "Mãe, mãezinha!\nMãe Ọ̀ṣun está em casa\nMamãe Ọ̀ṣun está em casa\n\nOs filhos desta casa têm coração puro\nNossa mãe retornou a Ìjẹ̀ṣà\nNossa mãe retornou, seja bem vinda\nA água pertence a você mamãe!\n\nSeja bem vinda em casa!\nSeja bem vinda a Ìjẹ̀ṣà"
  },
  {
    id: "osun-2",
    nome: "Yé yèyé yé omi o",
    orisha: "Ọ̀ṣun",
    letra: "Yé yèyé yé omi o\nAyaba àwọn Òrìṣà\nÒrìṣà èmí àbọ̀, à yèyé o",
    traducao: "Mamãe, mamãe, mãe das águas!\nRainha dos Òrìṣà\nÒrìṣà da essência feminina, salve mamãe!"
  },
  {
    id: "osun-3",
    nome: "Olómi ma — Olómi má iyọ̀",
    orisha: "Ọ̀ṣun",
    letra: "Olómi ma\nOlómi má iyọ̀\nOlómi má iyọ̀\nÌyágbà odò yèyé oo",
    traducao: "Dona das águas, sem dúvidas\nDona das águas sem sal\nDona das águas sem sal\nMatriarca do rio é a mãezinha!"
  },
  {
    id: "osun-4",
    nome: "Yèyé, Ọ̀ṣun dé mí odò",
    orisha: "Ọ̀ṣun",
    letra: "Yèyé, Ọ̀ṣun dé mí odò\nỌlọ́ṣun, Ọ̀ṣun dé\nO yèyé mi odò",
    traducao: "Mamãe, mamãe, Òṣun chegou a mim pelo rio\nỌlọ́ṣun, Ọ̀ṣun chegou\nEla é minha mãe do rio"
  },
  {
    id: "osun-5",
    nome: "Àdá abẹ̀bẹ̀, Ìyá mi",
    orisha: "Ọ̀ṣun",
    letra: "Àdá abẹ̀bẹ̀, Ìyá mi\nLáti gbà mi là, Ìyá mi",
    traducao: "Com seu àdá e seu leque, minha mãe\nPara me livrar, minha mãe"
  },
  {
    id: "osun-6",
    nome: "Mo ṣiṣẹ́ bí omi, mo fò bí afẹ́ẹ́fẹ́",
    orisha: "Ọ̀ṣun",
    letra: "Mo ṣiṣẹ́ bí omi, mo fò bí afẹ́ẹ́fẹ́\nObìnrin agbára ni Ọpárá",
    traducao: "Eu trabalho como a água, eu voo como o vento\nUma mulher forte é Ọpárá"
  },
  {
    id: "osun-7",
    nome: "Ijó bí ogun oo — Ọpárá",
    orisha: "Ọ̀ṣun",
    letra: "Ijó bí ogun oo\nỌpárá",
    traducao: "Dance como numa guerra!\nỌpárá"
  },

  /* ỌBÀ */
  {
    id: "oba-1",
    nome: "Ọbà Elékò a já òsì",
    orisha: "Ọbà",
    letra: "Ọbà Elékò a já òsì\nSábá Elékò a já òsì\nOrò Ọbà, Ọmọ Ọbà\nSábá Elékò a já òsì",
    traducao: "Ọbà da sociedade que é lutadora da esquerda\nEla é o abrigo da sociedade e lutadora da esquerda\nDevotos e filhos de Ọbà\nEla é o abrigo da sociedade e lutadora da esquerda"
  },
  {
    id: "oba-2",
    nome: "Ọbà fẹ́ràn, já àti ṣọdẹ",
    orisha: "Ọbà",
    letra: "Ọbà fẹ́ràn, já àti ṣọdẹ",
    traducao: "Óba amou, guerreou e caçou"
  },
  {
    id: "oba-3",
    nome: "Ọbà, Ọbà, Ọbà nilé oo",
    orisha: "Ọbà",
    letra: "Ọbà, Ọbà, Ọbà nilé oo\nỌbà sábá nrú ọfà",
    traducao: "Ọbà, Ọbà, Ọbà está em casa\nỌbà nos protege atirando flechas"
  },
  {
    id: "oba-4",
    nome: "Ọbà sire — O fẹ́ràn Ṣàngó",
    orisha: "Ọbà",
    letra: "Ọbà sire\nO fẹ́ràn Ṣàngó",
    traducao: "Ọbà fez o bem,\nEla amou Ṣàngó"
  },
  {
    id: "oba-5",
    nome: "Ọdẹ yìn Ọbà tafà",
    orisha: "Ọbà",
    letra: "Ọdẹ yìn Ọbà tafà\nMà n, mà n",
    traducao: "O caçador atira, Ọbà lança a flecha\nSem hesitar, sem hesitar"
  },

  /* ÒGÚN */
  {
    id: "ogun-1",
    nome: "Ògún ní ọ̀nà pa láíláí",
    orisha: "Ògún",
    letra: "Ògún ní ọ̀nà pa láíláí\nE láíláí láíláí\nÒgún ní ọ̀nà pa láíláí",
    traducao: "Ògún segue o caminho e mata sem parar\nEle sem parar, sem parar\nÒgún segue o caminho e mata sem parar"
  },
  {
    id: "ogun-2",
    nome: "Bà agada Ògún oo",
    orisha: "Ògún",
    letra: "Bà agada Ògún oo\nÒgún Oníré",
    traducao: "Ògún bate com seu facão\nÒgún o senhor de Ìré"
  },
  {
    id: "ogun-3",
    nome: "Olúwa ìjà re oo",
    orisha: "Ògún",
    letra: "Olúwa ìjà re oo\nLáyè kí ìdáàbòbò\nWọ̀ laṣọ e màrìwò",
    traducao: "Nosso senhor luta pelo bem\nVive com a intenção de proteger\nSe veste com roupa de màrìwò"
  },
  {
    id: "ogun-4",
    nome: "Àwa ṣiré Ògún",
    orisha: "Ògún",
    letra: "Àwa ṣiré Ògún\nẸ òun jó jó\nÀwa ṣiré Ògún\nẸ òun jó jó\nẸ òun jẹ jẹ",
    traducao: "Nós estamos nos divertindo com Ògún\nEle está dançando\nNós estamos nos divertindo com Ògún\nEle está dançando\nEle está comendo"
  },
  {
    id: "ogun-5",
    nome: "A Ògún méje Ìré",
    orisha: "Ògún",
    letra: "A Ògún méje Ìré\nOgun méje méje",
    traducao: "Ele é Ògún das sete partes de Ìré\nEle é Ògún das sete partes, das sete partes"
  },
  {
    id: "ogun-6",
    nome: "Àkòró oko dé",
    orisha: "Ògún",
    letra: "Àkòró oko dé\nFáárà Ògún Méje\nÀkòró oko dé",
    traducao: "Àkòró chegou na roça\nÒgún Méje está próximo\nÀkòró chegou na roça"
  },

  /* Ọ̀ṢỌ́Ọ̀SÌ */
  {
    id: "osoosi-1",
    nome: "O ṣọdẹ — O pa ní igbó",
    orisha: "Ọ̀ṣọ́ọ̀sì",
    letra: "O ṣọdẹ\nO pa ní igbó\nO ní igbó yá ọdẹ",
    traducao: "Ele caça\nEle mata na floresta\nEle está na floresta\nNa floresta ele é um caçador rápido"
  },
  {
    id: "osoosi-2",
    nome: "Ṣọdẹ ṣọdẹ",
    orisha: "Ọ̀ṣọ́ọ̀sì",
    letra: "Ṣọdẹ ṣọdẹ\nỌmọ ọdẹ\nỌmọ ọdẹ ni wa",
    traducao: "Caçamos, caçamos\nFilhos de caçador\nSomos filhos de caçadores"
  },
  {
    id: "osoosi-3",
    nome: "Ọdẹ mi Àrólé",
    orisha: "Ọ̀ṣọ́ọ̀sì",
    letra: "Ọdẹ mi Àrólé\nỌba tí ọba ni igbó\nKí fi ọ̀fà o pa",
    traducao: "Meu caçador Àrólé!\nRei dos reis na floresta\nCom sua flecha ele mata"
  },
  {
    id: "osoosi-4",
    nome: "Ọdẹ kò mọ́ ọdẹ",
    orisha: "Ọ̀ṣọ́ọ̀sì",
    letra: "Ọdẹ kò mọ́ ọdẹ\nỌdẹ kò mọ́ ọdẹ\nỌdẹ arére\nỌdẹ kò mọ́ ọdẹ nímayọ̀\nỌdẹ kò mọ́ ọdẹ oníré",
    traducao: "Caçador não é contra outro caçador\nCaçador não é contra outro caçador\nCaçador silencioso\nCaçador não é contra outro caçador, pois tem alegria\nCaçador não é contra outro caçador, pois possui bençãos"
  },
  {
    id: "osoosi-5",
    nome: "Àwa káre ilé ọdẹ",
    orisha: "Ọ̀ṣọ́ọ̀sì",
    letra: "Àwa káre ilé ọdẹ\nKáre ilé\nỌdẹ ọdẹ\nÀwa káre ilé",
    traducao: "Somos gratos em casa, caçador\nGratos em casa\nCaçador, caçador\nSomos gratos em casa"
  },

  /* OLÓGUN ẸDẸ */
  {
    id: "ologunede-1",
    nome: "Ae ae ọdẹ ijó",
    orisha: "Ológun Ẹdẹ",
    letra: "Ae ae ọdẹ ijó\nPúpọ̀ dára ènìyàn",
    traducao: "Ae ae, o caçador dançarino\nEle é uma pessoa muito bela"
  },
  {
    id: "ologunede-2",
    nome: "Ọrọ̀ rẹ Ológun Ẹdẹ",
    orisha: "Ológun Ẹdẹ",
    letra: "Ọrọ̀ rẹ\nOlógun Ẹdẹ",
    traducao: "Que sua fartura nos alcance\nOlógun Ẹdẹ"
  },
  {
    id: "ologunede-3",
    nome: "Ae Ológun Ẹdẹ",
    orisha: "Ológun Ẹdẹ",
    letra: "Ae Ológun Ẹdẹ\nOlógun Ẹdẹ agbéraga",
    traducao: "Ae Ológun Ẹdẹ\nOlógun Ẹdẹ, o orgulhoso"
  },

  /* Ọ̀SÁNYÌN */
  {
    id: "osanyin-1",
    nome: "Ẹ npa àwọn ewé",
    orisha: "Ọ̀sányìn",
    letra: "Ẹ npa àwọn ewé\nỌ̀sányìn àgò",
    traducao: "Vocês estão colhendo as folhas\nPeçam licença a Ọ̀sányìn"
  },
  {
    id: "osanyin-2",
    nome: "Àgò ewé Olúṣetọ",
    orisha: "Ọ̀sányìn",
    letra: "Àgò ewé\nOlúṣetọ",
    traducao: "Licença às folhas\nOh feiticeiro"
  },
  {
    id: "osanyin-3",
    nome: "Ewé omi ewé",
    orisha: "Ọ̀sányìn",
    letra: "Ewé omi ewé\nỌ̀sányìn àṣẹ\nEwé iná ewé\nỌ̀sányìn àṣẹ\nEwé ilẹ̀ ewé\nỌ̀sányìn àṣẹ\nEwé òfuurufú",
    traducao: "Folha da água\nỌ̀sányìn àṣẹ\nFolha do fogo\nỌ̀sányìn àṣẹ\nFolha da terra\nỌ̀sányìn àṣẹ\nFolha do ar"
  },
  {
    id: "osanyin-4",
    nome: "Ewé abẹ̀bẹ̀ ni gbọ́ wa",
    orisha: "Ọ̀sányìn",
    letra: "Ewé abẹ̀bẹ̀ ni gbọ́ wa\nAbẹ̀bẹ̀ ni gbọ́\nEwé abẹ̀bẹ̀\nAbẹ̀bẹ̀ ni gbọ́ wa ẹni",
    traducao: "Folha do abẹ̀bẹ̀ nos escuta\nAbẹ̀bẹ̀ nos escuta\nFolha do abẹ̀bẹ̀\nAbẹ̀bẹ̀ nos escuta na esteira"
  },
  {
    id: "osanyin-5",
    nome: "Ewé balẹ̀ kò ṣòro",
    orisha: "Ọ̀sányìn",
    letra: "Ewé balẹ̀ kò ṣòro\nEwé balẹ̀ kò ṣòro\nKúkúndùnkún olórí ewé\nEwé balẹ̀ kò ṣòro",
    traducao: "As folhas tocam o chão com facilidade\nAs folhas tocam o chão com facilidade\nA folha da batata doce é o senhor das folhas\nAs folhas tocam o chão com facilidade"
  },

  /* YEMỌJÁ */
  {
    id: "yemoja-1",
    nome: "Ọmọ ẹjá — Ìyágbà mi",
    orisha: "Yemọjá",
    letra: "Ọmọ ẹjá\nÌyágbà mi",
    traducao: "Sou um filho peixe\nMinha senhora"
  },
  {
    id: "yemoja-2",
    nome: "Ẹni jẹ́ nílé lodò",
    orisha: "Yemọjá",
    letra: "Ẹni jẹ́ nílé lodò\nYemọjá oo\nA kó ọ́ pẹ̀lú dé\nÌyá Olómi oo",
    traducao: "Aquela que tem o rio como sua casa\nÉ Yemọjá!\nNos reunimos para sua chegada\nMãe das águas!"
  },
  {
    id: "yemoja-3",
    nome: "Yemọjá — Àwa bò ayọ̀",
    orisha: "Yemọjá",
    letra: "Yemọjá\nÀwa bò ayọ̀",
    traducao: "Yemọjá\nNos cubra com alegria!"
  },
  {
    id: "yemoja-4",
    nome: "Ìyálóde — Dé ilé mi",
    orisha: "Yemọjá",
    letra: "Ìyálóde\nDé ilé mi",
    traducao: "Ìyálóde\nChegou na minha casa!"
  },
  {
    id: "yemoja-5",
    nome: "Odò a gbàwọ̀ lẹwà odò",
    orisha: "Yemọjá",
    letra: "Odò a gbàwọ̀ lẹwà odò\nA Ìyágbà\nA gbàwọ̀ lẹwà odò\nOdò a gbàwọ̀ lẹwà odò",
    traducao: "No rio, ela se banha lindamente no rio\nA Grande mãe\nEla se banha lindamente no rio\nNo rio, ela se banha lindamente no rio"
  },
  {
    id: "yemoja-6",
    nome: "Yemọjá yé Yemọjá gbà",
    orisha: "Yemọjá",
    letra: "Yemọjá yé Yemọjá gbà\nYemọjá gbà àlùbọ́sà kò fi rò ẹ̀fọ́\nYemọjá yèyé",
    traducao: "Mamãe Yemọjá, Yemọjá aceita\nYemọjá aceita a cebola, mas não a usa para cozinhar os vegetais.\nMãezinha Yemọjá"
  },

  /* YEWA */
  {
    id: "yewa-1",
    nome: "Yewa ejò ejò Yewa",
    orisha: "Yewa",
    letra: "Yewa ejò ejò Yewa\nYewa já mi\nKò kéré ìlú bàtá",
    traducao: "Yewa a serpente, a serpente Yewa\nYewa luta por mim\nGrande é o tambor bàtá"
  },
  {
    id: "yewa-2",
    nome: "Ejò ní ilé",
    orisha: "Yewa",
    letra: "Ejò ní ilé\nEjò ní lẹwà",
    traducao: "A serpente está em casa\nA serpente é bela"
  },
  {
    id: "yewa-3",
    nome: "Yewa Ìyá mi Òrìṣà",
    orisha: "Yewa",
    letra: "Yewa Ìyá mi Òrìṣà\nNjó nílé Òṣùmàrè",
    traducao: "Yewa, Òrìṣà minha mãe\nDança com Òṣùmàrè em nossa casa"
  },

  /* ÒṢÙMÀRÈ */
  {
    id: "osumare-1",
    nome: "Òṣùmàrè — Lélẹ̀ mo rí Òṣùmàrè",
    orisha: "Òṣùmàrè",
    letra: "Òṣùmàrè\nLélẹ̀ mo rí Òṣùmàrè\nLélẹ̀ mo rí rabata\nLélẹ̀ mo rí Òṣùmàrè",
    traducao: "Òṣùmàrè\nSobre a terra eu vi Òṣùmàrè\nSobre a terra eu vi algo enorme\nSobre a terra eu vi Òṣùmàrè"
  },
  {
    id: "osumare-2",
    nome: "A púpọ̀ bí ọ̀run",
    orisha: "Òṣùmàrè",
    letra: "A púpọ̀ bí ọ̀run\nOlóbì àwa jẹ kan yọ",
    traducao: "Somos muitos como o céu\nSenhor do obì, comemos apenas um e ficamos satisfeitos."
  },
  {
    id: "osumare-3",
    nome: "O mú òjò láti ọ̀run",
    orisha: "Òṣùmàrè",
    letra: "O mú òjò láti ọ̀run\nÒṣùmàrè a gbé ọ̀run\nÒjò láti ọ̀run oo",
    traducao: "Ele carrega a chuva do céu\nÒṣùmàrè aquele que vive no céu\nCarrega a chuva do céu"
  },
  {
    id: "osumare-4",
    nome: "Òṣùmàrè a gbé ọ̀run — Li apá Irá",
    orisha: "Òṣùmàrè",
    letra: "Òṣùmàrè a gbé ọ̀run\nLi apá Irá",
    traducao: "Òṣùmàrè (arco-íris) aquele que vive no céu\nÉ o braço de Irá"
  },

  /* ỌMỌLÚ / NÀNÁ BÙKÚÙ */
  {
    id: "omolunana-1",
    nome: "Òdì náà lẹwà",
    orisha: "Ọmọlú / Nàná Bùkúù",
    letra: "Òdì náà lẹwà\nLẹwà lẹwà oo",
    traducao: "O outro lado também é lindo\nÉ lindo, é lindo!"
  },
  {
    id: "omolunana-2",
    nome: "Àwa ló bí ọmọ ayọ̀ Ọlọ́kọ",
    orisha: "Ọmọlú / Nàná Bùkúù",
    letra: "Àwa ló bí ọmọ ayọ̀ Ọlọ́kọ\nNàná ayọ̀",
    traducao: "Nós que geramos o filho da alegria, um Ọlọ́kọ\nNàná traz alegria"
  },
  {
    id: "omolunana-3",
    nome: "O Ìyá wa oore",
    orisha: "Ọmọlú / Nàná Bùkúù",
    letra: "O Ìyá wa oore\nO ni a Ìyálóde",
    traducao: "Ela é nossa mãe bondosa\nEla é a Ìyálóde"
  },
  {
    id: "omolunana-4",
    nome: "O gbékúrò nílé",
    orisha: "Ọmọlú / Nàná Bùkúù",
    letra: "O gbékúrò\nGbékúrò nílé\nỌmọlú Bùkúù",
    traducao: "Ela removeu\nRemoveu de casa a maldade\nỌmọlú Bùkúù"
  },
  {
    id: "omolunana-5",
    nome: "O gbékúrò nílé ikú",
    orisha: "Ọmọlú / Nàná Bùkúù",
    letra: "O gbékúrò nílé ikú\nO Nàná Nàná ayọ̀",
    traducao: "Ela removeu de casa a morte\nNàná, Nàná alegria!"
  },
  {
    id: "omolunana-6",
    nome: "Ṣàlùbá e",
    orisha: "Ọmọlú / Nàná Bùkúù",
    letra: "Ṣàlùbá e\nṢàlùbá\nỌmọlú Bùkúù",
    traducao: "Nos encontramos com ela\nNos encontramos\nCom Ọmọlú Bùkúù"
  },

  /* ÒṢÀLÁ */
  {
    id: "osala-1",
    nome: "Àwúre àwúre — Bùkún súre Àjálá",
    orisha: "ÒṢÀLÁ",
    letra: "Àwúre àwúre\nBùkún súre Àjálá\nÒjíṣẹ́ tayọ̀\nOlórí nṣe\nẸ̀rọ̀, ẹ̀rọ̀",
    traducao: "Bênçãos, bênçãos\nQue Àjálá acrescente e conceda bênçãos\nMensageiro da felicidade\nCertamente o dono\nDa calma, da calma"
  },
  {
    id: "osala-2",
    nome: "Àwúre bàbá",
    orisha: "ÒṢÀLÁ",
    letra: "Àwúre\nÀwúre bàbá\nÀwúre",
    traducao: "A benção\nA benção, pai\nA benção"
  },
  {
    id: "osala-3",
    nome: "Òrìṣà bàbá",
    orisha: "ÒṢÀLÁ",
    letra: "Òrìṣà bàbá\nÒrìṣà gbé mi oo\nÒrìṣà bàbá Olúwa mi\nÒrìṣà gbé mi oo",
    traducao: "Òrìṣà pai\nÒrìṣà que me dá sustentação!\nÒrìṣà pai é meu senhor\nÒrìṣà que me dá sustentação!"
  },
  {
    id: "osala-4",
    nome: "Olúwa mi kì í kégbe oo",
    orisha: "ÒṢÀLÁ",
    letra: "Olúwa mi kì í kégbe oo\nÒrìṣà Ògìyán òkè wa oo\nEléjìgbò Ajagùnnà\nỌlọ́run a bẹ̀ bẹ̀ pé wúre",
    traducao: "Meu senhor não grita em vão\nÒrìṣà Ògìyán está acima de nós\nAjagùnnà é o rei de Èjìgbò\nỌlọ́run, nós suplicamos por bênçãos"
  },
  {
    id: "osala-5",
    nome: "Oní sáà wúre",
    orisha: "ÒṢÀLÁ",
    letra: "Oní sáà wúre\nA wúre àṣẹ\nOní sáà wúre\nO bẹ́ rí o mọ̀\nOní sáà wúre\nA wúre àṣẹ bàbá\nOní sáà wúre\nO bẹ́ rí o mọ̀\nOní sáà wúre",
    traducao: "O Senhor do tempo e da bênção\nNós pedimos bênção e àṣẹ\nO Senhor do tempo e da bênção\nDeste modo ele vê, ele sabe\nO Senhor do tempo e da bênção\nNós pedimos bênção e àṣẹ, pai\nO Senhor do tempo e da bênção\nDeste modo ele vê, ele sabe\nO Senhor do tempo e da bênção"
  },
  {
    id: "osala-6",
    nome: "Ajagùnnà bá wa oo",
    orisha: "ÒṢÀLÁ",
    letra: "Ajagùnnà bá wa oo\nAjagùnnà\nElémaṣọ bàbá olórogun\nAjagùnnà bá wa oo",
    traducao: "Ajagùnnà, venha a nosso encontro!\nAjagùnnà\nDono das roupas brancas, senhor da guerra e da batalha\nAjagùnnà, venha a nosso encontro"
  },
  {
    id: "osala-7",
    nome: "Òfuurufú lóore re nlààlà",
    orisha: "ÒṢÀLÁ",
    letra: "Òfuurufú lóore re nlààlà\nBàbá kẹ́hìndé Eléjìgbò\nIlé Ifọ́n mo júbà, bàbá\nÈjìgbò rere, mo júbà òo\nOlúwa\nẸ ma rọ̀\nẸ ma rọ̀\nA wẹ́ ṣe",
    traducao: "Ar de bondade, sorte e cuidado\nPai, que retornou como rei de Èjìgbò\nMeus respeitos à casa de Ifọ́n, pai\nÈjìgbò está abençoada, meus respeitos\nNosso senhor\nÉs, sem dúvida, a calma\nÉs, sem dúvida, a calma\nEstamos definitivamente satisfeitos"
  }
];
