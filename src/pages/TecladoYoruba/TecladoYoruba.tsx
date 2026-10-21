import React, { useState, useRef } from 'react';
import {
  Copy,
  Check,
  Trash2,
  Download,
  Grid,
  Keyboard,
  BookOpen,
  Sparkles,
  CornerDownLeft,
  Delete,
  Info,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import './TecladoYoruba.css';

interface VowelFamily {
  label: string;
  description: string;
  isSubdot?: boolean;
  tones: {
    neutral: { lower: string; upper: string };
    high: { lower: string; upper: string };
    low: { lower: string; upper: string };
  };
}

// 7 Vogais do Iorubá com os 3 tons canônicos (Neutro, Alto, Baixo)
// Sem tom longo (macron) e sem nasais tonalizadas, conforme solicitado
const VOWEL_FAMILIES: VowelFamily[] = [
  {
    label: 'A',
    description: 'Vogal aberta central',
    tones: {
      neutral: { lower: 'a', upper: 'A' },
      high: { lower: 'á', upper: 'Á' },
      low: { lower: 'à', upper: 'À' }
    }
  },
  {
    label: 'E',
    description: 'Vogal fechada anterior ("ê")',
    tones: {
      neutral: { lower: 'e', upper: 'E' },
      high: { lower: 'é', upper: 'É' },
      low: { lower: 'è', upper: 'È' }
    }
  },
  {
    label: 'Ẹ',
    description: 'Vogal aberta com subponto ("é")',
    isSubdot: true,
    tones: {
      neutral: { lower: 'ẹ', upper: 'Ẹ' },
      high: { lower: 'ẹ́', upper: 'Ẹ́' },
      low: { lower: 'ẹ̀', upper: 'Ẹ̀' }
    }
  },
  {
    label: 'I',
    description: 'Vogal fechada alta anterior',
    tones: {
      neutral: { lower: 'i', upper: 'I' },
      high: { lower: 'í', upper: 'Í' },
      low: { lower: 'ì', upper: 'Ì' }
    }
  },
  {
    label: 'O',
    description: 'Vogal fechada posterior ("ô")',
    tones: {
      neutral: { lower: 'o', upper: 'O' },
      high: { lower: 'ó', upper: 'Ó' },
      low: { lower: 'ò', upper: 'Ò' }
    }
  },
  {
    label: 'Ọ',
    description: 'Vogal aberta com subponto ("ó")',
    isSubdot: true,
    tones: {
      neutral: { lower: 'ọ', upper: 'Ọ' },
      high: { lower: 'ọ́', upper: 'Ọ́' },
      low: { lower: 'ọ̀', upper: 'Ọ̀' }
    }
  },
  {
    label: 'U',
    description: 'Vogal fechada alta posterior',
    tones: {
      neutral: { lower: 'u', upper: 'U' },
      high: { lower: 'ú', upper: 'Ú' },
      low: { lower: 'ù', upper: 'Ù' }
    }
  }
];

// As 25 letras canônicas do Álífábẹ́ẹ̀tì Yorùbá
const YORUBA_ALPHABET = [
  'A', 'B', 'D', 'E', 'Ẹ', 'F', 'G', 'GB', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'Ọ', 'P', 'R', 'S',
  'Ṣ', 'T', 'U', 'W', 'Y'
];

const SPECIAL_ALPHABET_LETTERS = ['Ẹ', 'GB', 'Ọ', 'Ṣ'];

// Diacríticos combináveis universais
const COMBINING_DIACRITICS = [
  { char: '\u0323', symbol: '◌̣', label: 'Ponto Inferior (Ẹ, Ọ, Ṣ)' },
  { char: '\u0301', symbol: '◌́', label: 'Tom Alto (Agudo ´)' },
  { char: '\u0300', symbol: '◌̀', label: 'Tom Baixo (Grave `)' }
];

// Expressões e saudações frequentes
const GREETINGS_DATA = [
  {
    category: 'Saudações do Cotidiano',
    items: [
      { yoruba: 'Ẹ kú àárọ̀', meaning: 'Bom dia (saudação respeitosa/formal)' },
      { yoruba: 'Ojúmọ́ ire', meaning: 'Amanhecer de bênçãos' },
      { yoruba: 'Ẹ kú ọ̀sán', meaning: 'Boa tarde' },
      { yoruba: 'Ẹ kú ìrọ̀lẹ́', meaning: 'Boa tarde (fim de tarde / entardecer)' },
      { yoruba: 'Ẹ kú alẹ́', meaning: 'Boa noite' },
      { yoruba: 'Ẹ kú àbọ̀', meaning: 'Seja bem-vindo(a)' },
      { yoruba: 'O dábọ̀', meaning: 'Até logo / Tchau' },
      { yoruba: 'Ẹ ṣé púpọ̀', meaning: 'Muito obrigado(a)' },
      { yoruba: 'Báwo ni?', meaning: 'Como vai você?' },
      { yoruba: 'Àlàáfíà ni', meaning: 'Estou em paz / Tudo bem' }
    ]
  },
  {
    category: 'Saudação dos Àwọn Òrìṣà)',
    items: [
      { yoruba: 'Èṣù Láròyé. Mo júbà Èṣù oo', meaning: 'Conversador, aquele que debate. Meus respeitos Èṣù!' },
      { yoruba: 'Kábíyèsí Oko oo Òrìṣà Oko oo', meaning: 'Vida longa ao rei da fazenda! Òrìṣà Oko!' },
      { yoruba: 'Eèpàà hey Ọya oo Ọ́ya oriri', meaning: 'Te chamamos Ọya! Ọya é deslumbrante!' },
      { yoruba: 'Atótóo oo Kábíyèsí Ọbalúwaiyé oo', meaning: 'Silêncio! Vida longa ao rei Ọbalúwaiyé!' },
      { yoruba: 'Káwò ó o Kábíyèsí Ṣàngó', meaning: 'Que possamos olhar o Rei Ṣàngó!' },
      { yoruba: 'Oore Yèyé Ọ̀ṣun oo', meaning: 'Ọ̀ṣun é mãe da bondade!' },
      { yoruba: 'Ọbà ṣí, Ọbà ṣiré oo', meaning: 'Ọbà se movimenta, Ọbà se diverte!' },
      { yoruba: 'Ògún ye oo Ògún yè mo yè oo', meaning: ':Ògún vive! Ògún vive, eu vivo!' },
      { yoruba: 'Òkè àró àrólé oo', meaning: 'Ọ̀ṣọ́ọ̀sì é herdeiro de grande honra!' },
      { yoruba: 'Orò akọfà oo Lo sí oo', meaning: 'Aquele que tem o fundamento do ọfà! Caminha sem pressa!' },
      { yoruba: 'Ewé oo Asà oo', meaning: 'Saudamos e celebramos as folhas!' },
      { yoruba: 'Odò ìyá, Kábíyèsí odò', meaning: 'Yemọjá é mãe do rio! Vida longa à rainha do rio!' },
      { yoruba: 'Eèpàà Yewa oo Eèpàà Òrìṣà oo', meaning: 'Estamos chamando por Yewa! Estamos chamando por Òrìṣà!' },
      { yoruba: 'Gbangba Lọ̀run', meaning: 'Òṣùmàrè está nitidamente no céu!' },
      { yoruba: 'Ṣàlùbá Nàná', meaning: 'Encontramo-nos com Nàná!' },
      { yoruba: 'Eèpàà Bàbá Òṣàlá oo', meaning: 'Estamos chamando por Pai Òṣàlá!' }
    ]
  },
  {
    category: 'Nomes corretos dos Àwọn Òrìṣà',
    items: [
      { yoruba: 'Èṣù', meaning: 'O mensageiro, princípio do movimento e comunicação' },
      { yoruba: 'Òrìṣà Oko', meaning: 'Divindade da agricultura, da colheita e da terra cultivada' },
      { yoruba: 'Ọya', meaning: 'Senhora dos ventos, tempestades, raios e transformações' },
      { yoruba: 'Ọbalúwaiyé', meaning: 'Rei e senhor da terra, da cura e da transformação' },
      { yoruba: 'Ṣàngó', meaning: 'Senhor da justiça, do fogo, do trovão e da realeza' },
      { yoruba: 'Ọ̀ṣun', meaning: 'Senhora das águas doces, da fertilidade, da beleza e do ouro' },
      { yoruba: 'Ọ̀bà', meaning: 'Senhora das águas revoltas, da bravura e da fidelidade' },
      { yoruba: 'Ògún', meaning: 'Senhor do ferro, da tecnologia, dos caminhos e da caça' },
      { yoruba: 'Ọ̀ṣọ́ọ̀sì', meaning: 'Senhor da caça, das matas, da fartura e da estratégia' },
      { yoruba: 'Ológun Ẹdẹ', meaning: 'Guerreiro das matas e das águas, caçador divino' },
      { yoruba: 'Ọ̀sányìn', meaning: 'Senhor das folhas sagradas, da medicina vegetal e do segredo litúrgico' },
      { yoruba: 'Yemọjá', meaning: 'Mãe de todos os orixás, senhora das águas e das cabeças' },
      { yoruba: 'Yewa', meaning: 'Senhora da visão, dos horizontes, das transformações e da pureza' },
      { yoruba: 'Òṣùmàrè', meaning: 'O arco-íris, movimento contínuo da vida, dos ciclos e da renovação' },
      { yoruba: 'Ọmọlú', meaning: 'Senhor das transformações da terra, da saúde e dos mistérios profundos' },
      { yoruba: 'Nàná - Ọmọlú', meaning: 'A grande ancestral das águas paradas, do lodo primordial e da sabedoria' },
      { yoruba: 'Òṣàlá', meaning: 'O grande orixá da criação, da paz, da brancura e da paciência' },
      { yoruba: 'Ẹgbẹ́ Ọ̀run', meaning: 'Sociedade espiritual dos companheiros do Céu / Duplos espirituais' },
      { yoruba: 'Ìyámi Òṣòròngà', meaning: 'As Mães Ancestrais, senhoras do poder místico e da fertilidade originária' },
      { yoruba: 'Egúngún', meaning: 'Espíritos dos ancestrais divinizados da linhagem' }
    ]
  }
];

export const TecladoYorubaPage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isShift, setIsShift] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(18);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'matriz' | 'alfabeto' | 'virtual' | 'saudacoes' | 'guia'>('matriz');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Inserção no cursor preservando foco e posição
  const insertChar = (char: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setText((prev) => prev + char);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = text.substring(0, start) + char + text.substring(end);

    setText(newText);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + char.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBackspace = () => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setText((prev) => prev.slice(0, -1));
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      const newText = text.substring(0, start) + text.substring(end);
      setText(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start);
      }, 0);
    } else if (start > 0) {
      const newText = text.substring(0, start - 1) + text.substring(start);
      setText(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start - 1, start - 1);
      }, 0);
    }
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 2500);
  };

  const handleDownloadTxt = () => {
    if (!text.trim()) return;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `texto-yoruba-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (text && window.confirm('Deseja limpar todo o texto digitado?')) {
      setText('');
      textareaRef.current?.focus();
    }
  };

  const handleSelectAll = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  };

  const adjustFontSize = (delta: number) => {
    setFontSize((prev) => Math.min(30, Math.max(14, prev + delta)));
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  // Linhas virtuais do teclado QWERTY
  const qwertyRows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'ẹ', 'ọ', 'ṣ'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'á', 'é', 'ẹ́'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'gb', 'à', 'è', 'ẹ̀'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'ó', 'ọ́', 'ú', 'ò', 'ọ̀', 'ù']
  ];

  return (
    <div className="section-padding">
      <div className="container teclado-container">
        {/* Cabeçalho da Página */}
        <div className="section-header">
          <span className="section-tag">Ferramentas & Alfabeto</span>
          <h1 className="section-title">Teclado Yorùbá</h1>
          <p className="section-subtitle">
            Escreva e acentue textos na língua Yorùbá com os 3 tons tradicionais (Alto, Baixo e Neutro),
            as letras com ponto inferior (<strong>ẹ, ọ, ṣ</strong>), o dígrafo <strong>gb</strong> e saudações canônicas.
          </p>
        </div>

        {/* Caixa do Editor de Texto */}
        <div className="teclado-editor-card">
          <div className="teclado-toolbar">
            <div className="teclado-actions-group">
              <button
                className="teclado-action-btn primary"
                onClick={handleCopy}
                title="Copiar texto para área de transferência"
                disabled={!text}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>

              <button
                className="teclado-action-btn"
                onClick={handleDownloadTxt}
                title="Baixar como arquivo de texto (.txt)"
                disabled={!text}
              >
                <Download size={16} />
                <span>Baixar (.txt)</span>
              </button>

              <button
                className="teclado-action-btn"
                onClick={handleSelectAll}
                title="Selecionar todo o texto"
                disabled={!text}
              >
                <span>Selecionar Tudo</span>
              </button>

              <button
                className="teclado-action-btn danger"
                onClick={handleClear}
                title="Limpar campo de texto"
                disabled={!text}
              >
                <Trash2 size={16} />
                <span>Limpar</span>
              </button>
            </div>

            <div className="teclado-controls-group">
              {/* Zoom de fonte */}
              <div className="teclado-font-controls" title="Ajustar tamanho da fonte">
                <button
                  type="button"
                  className="font-btn"
                  onClick={() => adjustFontSize(-2)}
                  title="Diminuir fonte"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="font-size-label">{fontSize}px</span>
                <button
                  type="button"
                  className="font-btn"
                  onClick={() => adjustFontSize(2)}
                  title="Aumentar fonte"
                >
                  <ZoomIn size={14} />
                </button>
                <button
                  type="button"
                  className="font-btn"
                  onClick={() => setFontSize(18)}
                  title="Redefinir tamanho"
                >
                  <RotateCcw size={12} />
                </button>
              </div>

              {/* Estatísticas */}
              <div className="teclado-stats">
                <span>{wordCount} {wordCount === 1 ? 'palavra' : 'palavras'}</span>
                <span>•</span>
                <span>{charCount} {charCount === 1 ? 'caractere' : 'caracteres'}</span>
              </div>
            </div>
          </div>

          <div className="teclado-textarea-wrapper">
            <textarea
              ref={textareaRef}
              className="teclado-textarea"
              style={{ fontSize: `${fontSize}px` }}
              placeholder="Digite seu texto ou clique nas letras e saudações abaixo para compor em Yorùbá..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
            />

            {showToast && (
              <div className="teclado-toast">
                <Check size={18} color="#4ADE80" />
                <span>Texto copiado com sucesso!</span>
              </div>
            )}
          </div>

          {/* Barra de Ações Rápidas Inferior */}
          <div className="editor-quick-bar">
            <button
              className={`quick-key-btn shift-btn ${isShift ? 'active' : ''}`}
              onClick={() => setIsShift(!isShift)}
              title="Alternar entre maiúsculas e minúsculas"
            >
              <span>{isShift ? 'MAIÚSCULAS (⇧)' : 'minúsculas (Aa)'}</span>
            </button>

            <button
              className="quick-key-btn"
              onClick={() => insertChar(' ')}
              title="Inserir espaço"
            >
              <span>Espaço ␣</span>
            </button>

            <button
              className="quick-key-btn"
              onClick={() => insertChar('\n')}
              title="Quebra de linha"
            >
              <CornerDownLeft size={14} />
              <span>Enter ↵</span>
            </button>

            <button
              className="quick-key-btn backspace-btn"
              onClick={handleBackspace}
              title="Apagar caractere anterior"
            >
              <Delete size={14} />
              <span>Apagar ⌫</span>
            </button>
          </div>
        </div>

        {/* Abas de Navegação */}
        <div className="teclado-tabs">
          <button
            className={`teclado-tab-btn ${activeTab === 'matriz' ? 'active' : ''}`}
            onClick={() => setActiveTab('matriz')}
          >
            <Grid size={18} />
            <span>Matriz de Vogais & Tons</span>
          </button>
          <button
            className={`teclado-tab-btn ${activeTab === 'alfabeto' ? 'active' : ''}`}
            onClick={() => setActiveTab('alfabeto')}
          >
            <BookOpen size={18} />
            <span>Álífábẹ́ẹ̀tì (25 Letras)</span>
          </button>
          <button
            className={`teclado-tab-btn ${activeTab === 'virtual' ? 'active' : ''}`}
            onClick={() => setActiveTab('virtual')}
          >
            <Keyboard size={18} />
            <span>Teclado Virtual Completo</span>
          </button>
          <button
            className={`teclado-tab-btn ${activeTab === 'saudacoes' ? 'active' : ''}`}
            onClick={() => setActiveTab('saudacoes')}
          >
            <Sparkles size={18} />
            <span>Expressões & Saudações</span>
          </button>
          <button
            className={`teclado-tab-btn ${activeTab === 'guia' ? 'active' : ''}`}
            onClick={() => setActiveTab('guia')}
          >
            <Info size={18} />
            <span>Guia dos 3 Tons</span>
          </button>
        </div>

        {/* ================= ABA 1: MATRIZ DE VOGAIS & TONS ================= */}
        {activeTab === 'matriz' && (
          <div className="teclado-panel-card">
            <div className="teclado-panel-header-row">
              <div>
                <h2 className="teclado-panel-title">As 7 Vogais do Yorùbá e seus 3 Tons</h2>
                <p className="teclado-panel-subtitle">
                  No Yorùbá existem 7 vogais (A, E, Ẹ, I, O, Ọ, U) com 3 registros tonais:
                  <strong> Neutro/Médio</strong> (sem acento), <strong>Alto</strong> (agudo ´) e <strong>Baixo</strong> (grave `).
                </p>
              </div>

              <button
                className={`shift-pill-btn ${isShift ? 'active' : ''}`}
                onClick={() => setIsShift(!isShift)}
              >
                {isShift ? '⇧ Maiúsculas' : 'Aa Minúsculas'}
              </button>
            </div>

            {/* Cabeçalho da Tabela da Matriz */}
            <div className="vowel-matrix-header">
              <div className="col-header family-col">Vogal</div>
              <div className="col-header">Tom Neutro / Médio</div>
              <div className="col-header">Tom Alto (Agudo ´)</div>
              <div className="col-header">Tom Baixo (Grave `)</div>
            </div>

            {/* Linhas da Matriz */}
            <div className="vowel-matrix-body">
              {VOWEL_FAMILIES.map((vowel) => {
                const neutralChar = isShift ? vowel.tones.neutral.upper : vowel.tones.neutral.lower;
                const highChar = isShift ? vowel.tones.high.upper : vowel.tones.high.lower;
                const lowChar = isShift ? vowel.tones.low.upper : vowel.tones.low.lower;

                return (
                  <div
                    key={vowel.label}
                    className={`vowel-row ${vowel.isSubdot ? 'has-subdot' : ''}`}
                  >
                    <div className="vowel-label-col">
                      <span className="vowel-family-pill">
                        {isShift ? vowel.label : vowel.label.toLowerCase()}
                      </span>
                      <span className="vowel-family-desc">{vowel.description}</span>
                    </div>

                    <div className="vowel-key-col">
                      <button
                        className="char-btn neutral-btn"
                        onClick={() => insertChar(neutralChar)}
                        title={`Inserir ${neutralChar} (Tom neutro / médio)`}
                      >
                        {neutralChar}
                      </button>
                    </div>

                    <div className="vowel-key-col">
                      <button
                        className="char-btn high-btn"
                        onClick={() => insertChar(highChar)}
                        title={`Inserir ${highChar} (Tom alto / agudo)`}
                      >
                        {highChar}
                      </button>
                    </div>

                    <div className="vowel-key-col">
                      <button
                        className="char-btn low-btn"
                        onClick={() => insertChar(lowChar)}
                        title={`Inserir ${lowChar} (Tom baixo / grave)`}
                      >
                        {lowChar}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= ABA 2: ÁLÍFÁBẸ̀Ẹ̀TÌ YORÙBÁ (25 LETRAS) ================= */}
        {activeTab === 'alfabeto' && (
          <div className="teclado-panel-card">
            <div className="teclado-panel-header-row">
              <div>
                <h2 className="teclado-panel-title">Álífábẹ́ẹ̀tì Yorùbá (25 Letras Canônicas)</h2>
                <p className="teclado-panel-subtitle">
                  O alfabeto oficial da língua Yorùbá é composto por exatamente 25 letras. Clique em qualquer letra para inseri-la:
                </p>
              </div>

              <button
                className={`shift-pill-btn ${isShift ? 'active' : ''}`}
                onClick={() => setIsShift(!isShift)}
              >
                {isShift ? '⇧ Maiúsculas' : 'Aa Minúsculas'}
              </button>
            </div>

            <div className="alphabet-grid">
              {YORUBA_ALPHABET.map((letter) => {
                const isSpecial = SPECIAL_ALPHABET_LETTERS.includes(letter);
                const displayChar = isShift ? letter : letter.toLowerCase();

                return (
                  <button
                    key={letter}
                    className={`alphabet-tile ${isSpecial ? 'special-tile' : ''}`}
                    onClick={() => insertChar(displayChar)}
                    title={`Inserir letra ${displayChar} no texto`}
                  >
                    <span className="tile-letter">{displayChar}</span>
                    {isSpecial && <span className="tile-badge">Especial</span>}
                  </button>
                );
              })}
            </div>

            <div className="alphabet-note-box">
              <strong>Observação importante sobre a ortografia:</strong> As letras <strong>C, Q, V, X e Z</strong> não existem no alfabeto Yorùbá tradicional. O som de "ch" é grafado com <strong>Ṣ / ṣ</strong> e o dígrafo labial-velar é <strong>GB / gb</strong>.
            </div>
          </div>
        )}

        {/* ================= ABA 3: TECLADO VIRTUAL QWERTY ================= */}
        {activeTab === 'virtual' && (
          <div className="teclado-panel-card">
            <div className="teclado-panel-header-row">
              <div>
                <h2 className="teclado-panel-title">Teclado Virtual Completo</h2>
                <p className="teclado-panel-subtitle">
                  Layout de digitação tipo teclado com letras normais e caracteres Yorùbá posicionados estrategicamente:
                </p>
              </div>

              <button
                className={`shift-pill-btn ${isShift ? 'active' : ''}`}
                onClick={() => setIsShift(!isShift)}
              >
                {isShift ? '⇧ Shift Ativo' : 'Aa Shift Inativo'}
              </button>
            </div>

            <div className="virtual-keyboard">
              {qwertyRows.map((row, rIdx) => (
                <div key={rIdx} className="vk-row">
                  {row.map((k) => {
                    const charToDisplay = isShift ? k.toUpperCase() : k;
                    const isSpecial = ['ẹ', 'ọ', 'ṣ', 'gb', 'á', 'é', 'ẹ́', 'à', 'è', 'ẹ̀', 'ó', 'ọ́', 'ú', 'ò', 'ọ̀', 'ù'].includes(k);

                    return (
                      <button
                        key={k}
                        className={`vk-key ${isSpecial ? 'special' : ''}`}
                        onClick={() => insertChar(charToDisplay)}
                      >
                        {charToDisplay}
                      </button>
                    );
                  })}
                </div>
              ))}

              {/* Linha de Ação Operacional */}
              <div className="vk-row">
                <button
                  className={`vk-key wide shift-key ${isShift ? 'active' : ''}`}
                  onClick={() => setIsShift(!isShift)}
                  title="Shift"
                >
                  ⇧ Shift
                </button>

                <button
                  className="vk-key wide special"
                  onClick={() => insertChar(isShift ? 'Ẹ' : 'ẹ')}
                  title="Ẹ com subponto"
                >
                  {isShift ? 'Ẹ' : 'ẹ'}
                </button>

                <button
                  className="vk-key wide special"
                  onClick={() => insertChar(isShift ? 'Ọ' : 'ọ')}
                  title="Ọ com subponto"
                >
                  {isShift ? 'Ọ' : 'ọ'}
                </button>

                <button
                  className="vk-key wide special"
                  onClick={() => insertChar(isShift ? 'Ṣ' : 'ṣ')}
                  title="Ṣ com subponto"
                >
                  {isShift ? 'Ṣ' : 'ṣ'}
                </button>

                <button
                  className="vk-key space-key"
                  onClick={() => insertChar(' ')}
                >
                  Espaço
                </button>

                <button
                  className="vk-key wide enter-key"
                  onClick={() => insertChar('\n')}
                  title="Nova linha"
                >
                  <CornerDownLeft size={16} />
                </button>

                <button
                  className="vk-key wide backspace-key"
                  onClick={handleBackspace}
                  title="Apagar"
                >
                  <Delete size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= ABA 4: EXPRESSÕES & SAUDAÇÕES ================= */}
        {activeTab === 'saudacoes' && (
          <div className="teclado-panel-card">
            <div className="teclado-panel-header-row">
              <div>
                <h2 className="teclado-panel-title">Expressões Litúrgicas e Saudações Tradicionais</h2>
                <p className="teclado-panel-subtitle">
                  Clique em qualquer expressão para inseri-la diretamente no editor de texto com a acentuação e pontuação corretas:
                </p>
              </div>
            </div>

            <div className="saudacoes-container">
              {GREETINGS_DATA.map((group) => (
                <div key={group.category} className="saudacoes-group-card">
                  <h3 className="saudacoes-group-title">{group.category}</h3>
                  <div className="saudacoes-chips-grid">
                    {group.items.map((item) => (
                      <button
                        key={item.yoruba}
                        className="saudacao-chip-btn"
                        onClick={() => insertChar(item.yoruba + ' ')}
                        title={`Inserir "${item.yoruba}" (${item.meaning})`}
                      >
                        <span className="saudacao-yoruba">{item.yoruba}</span>
                        <span className="saudacao-traducao">{item.meaning}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ABA 5: GUIA DOS 3 TONS ================= */}
        {activeTab === 'guia' && (
          <div className="guide-card">
            <div className="guide-header">
              <Info color="var(--color-primary)" size={26} />
              <h2 className="guide-main-title">Guia dos Três Tons e Ponto Inferior</h2>
            </div>

            <p className="guide-intro">
              O Yorùbá é uma língua estritamente tonal: a altura e modulação da voz definem o significado exato da palavra.
              A escrita padrão registra <strong>três tons</strong> fundamentais e o <strong>ponto inferior</strong> de abertura vocálica:
            </p>

            <div className="guide-grid">
              <div className="guide-box">
                <div className="guide-box-title">
                  <span className="tone-indicator gold"></span>
                  <span>Pọ́ntì nisàlẹ̀ (Ponto Inferior)</span>
                </div>
                <div className="guide-box-desc">
                  Subponto aplicado sob as letras <strong>Ẹ/ẹ</strong>, <strong>Ọ/ọ</strong> e <strong>Ṣ/ṣ</strong>.
                  Para as vogais, indica timbre aberto ("é" aberto e "ó" aberto). Para o S, produz o som palatal chiado ("ch" ou "sh").
                </div>
                <div className="guide-examples">
                  <span className="guide-chip">ẹ (som "é")</span>
                  <span className="guide-chip">ọ (som "ó")</span>
                  <span className="guide-chip">ṣ (som "ch")</span>
                </div>
              </div>

              <div className="guide-box">
                <div className="guide-box-title">
                  <span className="tone-indicator red"></span>
                  <span>Ámì Òkè (Tom Alto / Agudo ´)</span>
                </div>
                <div className="guide-box-desc">
                  Indica tom alto ou ascendente na pronúncia musical da sílaba. Muito frequente em saudações sagradas e nomes de divindades.
                </div>
                <div className="guide-examples">
                  <span className="guide-chip">Orí (Cabeça)</span>
                  <span className="guide-chip">Ewé (Erva)</span>
                  <span className="guide-chip">Ilé (Casa)</span>
                </div>
              </div>

              <div className="guide-box">
                <div className="guide-box-title">
                  <span className="tone-indicator blue"></span>
                  <span>Ámì Ìsàlẹ̀ / Ámì Kọ̀ (Tom Baixo / Grave `)</span>
                </div>
                <div className="guide-box-desc">
                  Indica tom baixo ou descendente na emissão da voz. Essencial em títulos de parentesco, cargos e substantivos.
                </div>
                <div className="guide-examples">
                  <span className="guide-chip">Ọ̀sà (Lagoa)</span>
                  <span className="guide-chip">Àgbà (Ancião)</span>
                  <span className="guide-chip">Ọ̀nà (Caminho)</span>
                </div>
              </div>

              <div className="guide-box">
                <div className="guide-box-title">
                  <span className="tone-indicator" style={{ backgroundColor: '#8C827A' }}></span>
                  <span>Ámì Àárín (Tom Médio / Neutro)</span>
                </div>
                <div className="guide-box-desc">
                  Tom plano e neutro no registro médio da voz. <strong>Não recebe acento gráfico</strong> na ortografia oficial da língua Yorùbá.
                </div>
                <div className="guide-examples">
                  <span className="guide-chip">Omi (Água)</span>
                  <span className="guide-chip">Oore (Bondade)</span>
                  <span className="guide-chip">Awo (Segredo)</span>
                </div>
              </div>
            </div>

            {/* Tabela de Contraste Semântico */}
            <div className="contrast-table-card">
              <h3 className="contrast-title">Por que os tons importam? Exemplo Prático de Contraste:</h3>
              <p style={{ fontFamily: 'var(--font-reading)', color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                Veja como a mesma sequência consonantal/vocálica adquire significados totalmente diferentes de acordo com o tom e o ponto inferior:
              </p>

              <div className="contrast-grid">
                <div className="contrast-item">
                  <span className="contrast-word">Owó</span>
                  <span className="contrast-meaning">Dinheiro / Riqueza material</span>
                </div>

                <div className="contrast-item">
                  <span className="contrast-word">Ọwọ́</span>
                  <span className="contrast-meaning">Mão</span>
                </div>

                <div className="contrast-item">
                  <span className="contrast-word">Òwò</span>
                  <span className="contrast-meaning">Comércio / Negócios</span>
                </div>

                <div className="contrast-item">
                  <span className="contrast-word">Ọ̀wọ̀</span>
                  <span className="contrast-meaning">Respeito / Honra</span>
                </div>

                <div className="contrast-item">
                  <span className="contrast-word">Ọwọ̀</span>
                  <span className="contrast-meaning">Vassoura tradicional</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
