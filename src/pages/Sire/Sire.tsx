import React, { useState } from 'react';
import { cantigasData, orishasSire, Cantiga } from '../../data/sire';
import { Modal } from '../../components/Modal/Modal';
import { Music, Search, BookOpen, Volume2, Play, Pause } from 'lucide-react';
import './Sire.css';

export const SirePage: React.FC = () => {
  const [selectedOrisha, setSelectedOrisha] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCantiga, setActiveCantiga] = useState<Cantiga | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const filteredCantigas = cantigasData.filter(c => {
    const matchesOrisha = selectedOrisha === 'Todos' || c.orisha === selectedOrisha;
    const matchesSearch = c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.letra.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.traducao && c.traducao.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesOrisha && matchesSearch;
  });

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Arquivo Digital de Cantigas</span>
          <h1 className="section-title">Ṣiré Oko Ìdílé Ọya</h1>
          <p className="section-subtitle">
            Cânticos (Orin) e saudações aos Òrìṣà preservados na tradição da nossa casa de santo — Omoloko de Raiz Nagô.
          </p>
        </div>

        {/* Search Bar */}
        <div className="sire-search-wrapper">
          <Search size={18} className="sire-search-icon" />
          <input
            type="text"
            className="sire-search-input"
            placeholder="Buscar cantiga por nome, trecho ou tradução..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Orisha Tabs Filter */}
        <div className="filter-bar">
          {orishasSire.map(orisha => (
            <button
              key={orisha}
              onClick={() => setSelectedOrisha(orisha)}
              className={`filter-btn ${selectedOrisha === orisha ? 'active' : ''}`}
            >
              {orisha}
            </button>
          ))}
        </div>

        {/* Total count badge */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
          Exibindo <strong>{filteredCantigas.length}</strong> cantigas da casa
        </div>

        {/* Songs Grid */}
        <div className="sire-grid">
          {filteredCantigas.map((cantiga) => (
            <div key={cantiga.id} className="cantiga-card">
              <div>
                <div className="cantiga-orisha-badge">
                  <Music size={14} />
                  <span>{cantiga.orisha}</span>
                </div>

                <h3 className="cantiga-name">{cantiga.nome}</h3>

                <div className="cantiga-lyrics-preview">
                  {cantiga.letra}
                </div>
              </div>

              <div className="cantiga-actions">
                <button
                  className="btn-open"
                  onClick={() => {
                    setActiveCantiga(cantiga);
                    setIsPlayingAudio(false);
                  }}
                >
                  <BookOpen size={16} />
                  <span>Leitura do Cântico</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Song Reader Modal (Estilo Livro Digital) */}
        <Modal
          isOpen={!!activeCantiga}
          onClose={() => setActiveCantiga(null)}
          title={activeCantiga?.nome || 'Leitura de Cantiga'}
          maxWidth="760px"
        >
          {activeCantiga && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Informações da cantiga */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  className="cantiga-orisha-badge"
                  style={{ margin: 0 }}
                >
                  Òrìṣà {activeCantiga.orisha}
                </span>

                {activeCantiga.observacao && (
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-muted)',
                      fontStyle: 'italic',
                    }}
                  >
                    {activeCantiga.observacao}
                  </span>
                )}
              </div>

              {/* Digital Book Container */}
              <div className="book-reader-container">
                <div className="book-reader-orin-title">
                  Orin (Letra do Cântico)
                </div>

                <div className="book-reader-lyrics">
                  {activeCantiga.letra}
                </div>

                {activeCantiga.traducao && (
                  <>
                    <div className="book-reader-translation-title">
                      Tradução / Significado
                    </div>

                    <div className="book-reader-translation">
                      {activeCantiga.traducao}
                    </div>
                  </>
                )}
              </div>

              {/* Audio Controls if audioUrl exists */}
              {activeCantiga.audioUrl ? (
                <div className="audio-player-box">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {isPlayingAudio ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </button>

                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-text-main)',
                        margin: 0,
                      }}
                    >
                      Áudio da Cantiga
                    </p>

                    <div
                      style={{
                        width: '100%',
                        height: 4,
                        backgroundColor: 'var(--color-border)',
                        borderRadius: 2,
                        marginTop: 6,
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: isPlayingAudio ? '45%' : '0%',
                          height: '100%',
                          backgroundColor: 'var(--color-primary)',
                          borderRadius: 2,
                          transition: 'width 0.3s',
                        }}
                      />
                    </div>
                  </div>

                  <Volume2
                    size={20}
                    color="var(--color-text-muted)"
                  />
                </div>
              ) : null}
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
