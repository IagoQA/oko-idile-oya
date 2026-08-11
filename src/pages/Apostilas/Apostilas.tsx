import React, { useState } from 'react';
import { apostilasData, categoriasApostilas, Apostila } from '../../data/apostilas';
import { Modal } from '../../components/Modal/Modal';
import { Eye, Download, FileText, Calendar, Info, BookOpen } from 'lucide-react';
import './Apostilas.css';

export const ApostilasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedApostila, setSelectedApostila] = useState<Apostila | null>(null);

  const filteredApostilas = selectedCategory === 'Todas' 
    ? apostilasData 
    : apostilasData.filter(a => a.categoria === selectedCategory);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Biblioteca Digital</span>
          <h1 className="section-title">Apostilas & Materiais de Estudo</h1>
          <p className="section-subtitle">
            Acervo de fundamentos, ensinamentos, ervas e histórias preservadas para o aprendizado dos filhos do Oko Ìdílé Ọya.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="filter-bar">
          {categoriasApostilas.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Apostilas Grid */}
        <div className="apostilas-grid">
          {filteredApostilas.map((apostila) => (
            <div key={apostila.id} className="apostila-card">
              <div>
                <div className="apostila-card-header">
                  <span className="badge badge-red">{apostila.categoria}</span>
                  <span className={`apostila-format-tag ${apostila.formato.toLowerCase()}`}>
                    {apostila.formato} {apostila.tamanho ? `• ${apostila.tamanho}` : ''}
                  </span>
                </div>

                <h3 className="apostila-title">{apostila.titulo}</h3>
                <p className="apostila-desc">{apostila.descricao}</p>
              </div>

              <div>
                <div className="apostila-meta">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} />
                    {new Date(apostila.data).toLocaleDateString('pt-BR')}
                  </span>
                  <span>Por {apostila.autor || 'Oko Ìdílé Ọya'}</span>
                </div>

                <div className="apostila-actions">
                  <button 
                    className="btn-open"
                    onClick={() => setSelectedApostila(apostila)}
                  >
                    <Eye size={16} />
                    <span>Abrir Leitura</span>
                  </button>
                  <button 
                    className="btn-download"
                    onClick={() => alert(`[O arquivo para download de "${apostila.titulo}" será disponibilizado assim que for carregado.]`)}
                    title="Baixar Arquivo"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Material Reading Modal */}
        <Modal
          isOpen={!!selectedApostila}
          onClose={() => setSelectedApostila(null)}
          title={selectedApostila?.titulo || 'Leitura de Apostila'}
          footer={
            <>
              <button 
                className="btn-open"
                onClick={() => setSelectedApostila(null)}
                style={{ flex: 'none', padding: '0.6rem 1.5rem' }}
              >
                Fechar
              </button>
            </>
          }
        >
          {selectedApostila && (
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="badge badge-red">{selectedApostila.categoria}</span>
                <span className="badge">{selectedApostila.formato}</span>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                {selectedApostila.descricao}
              </p>

              <div className="placeholder-box">
                <Info size={24} />
                <div>
                  <strong>Área reservada para o conteúdo integral da apostila:</strong>
                  <p style={{ marginTop: '0.5rem', fontStyle: 'normal' }}>
                    {selectedApostila.conteudoPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
