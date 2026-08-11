import React from 'react';
import { linhagemData } from '../../data/linhagem';
import { ChevronDown, Info, ShieldCheck } from 'lucide-react';
import './Linhagem.css';

export const LinhagemPage: React.FC = () => {
  const { ileMatriz, ileFilho, textoLinhagem } = linhagemData;

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Rama Familiar & Linhagem</span>
          <h1 className="section-title">{linhagemData.titulo}</h1>
          <p className="section-subtitle">{linhagemData.subtitulo}</p>
        </div>

        {/* Visual Lineage Diagram */}
        <div className="linhagem-diagram">
          {/* Matriz House */}
          <div className="linhagem-card-matriz">
            <h2 className="linhagem-matriz-title">{ileMatriz.nome}</h2>
            <p className="linhagem-matriz-sub">{ileMatriz.subtitulo}</p>
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#D4C9BC' }}>
              {ileMatriz.detalhes}
            </p>
          </div>

          {/* Arrow / Line Connector */}
          <div className="linhagem-arrow-connector">
            <div className="linhagem-connector-line" />
            <span className="linhagem-connector-label">origem / linhagem</span>
            <ChevronDown size={28} />
          </div>

          {/* Consagrada House */}
          <div className="linhagem-card-filho">
            <h2 className="linhagem-filho-title">{ileFilho.nome}</h2>
            <p className="linhagem-filho-sub">{ileFilho.subtitulo}</p>
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              {ileFilho.detalhes}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="linhagem-details-grid">
          {/* Matriz House History Box */}
          <div className="linhagem-info-box">
            <h3 className="linhagem-info-title">Origem — {ileMatriz.nome}</h3>
            <p style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {ileMatriz.tradicao}
            </p>
            {ileMatriz.descricao.map((paragraph, idx) => (
              <div key={idx} className="placeholder-box">
                <Info size={20} />
                <span>{paragraph}</span>
              </div>
            ))}
          </div>

          {/* Consagrada House History Box */}
          <div className="linhagem-info-box">
            <h3 className="linhagem-info-title">Nossa Casa — {ileFilho.nome}</h3>
            <p style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {ileFilho.tradicao}
            </p>
            {ileFilho.descricao.map((paragraph, idx) => (
              <div key={idx} className="placeholder-box">
                <Info size={20} />
                <span>{paragraph}</span>
              </div>
            ))}
          </div>
        </div>

        {/* General Lineage Explanation */}
        <div className="linhagem-info-box" style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <ShieldCheck size={24} color="var(--color-primary)" />
            <h3 className="linhagem-info-title" style={{ margin: 0 }}>De onde viemos e onde estamos</h3>
          </div>
          {textoLinhagem.map((text, idx) => (
            <p key={idx} style={{ fontFamily: 'var(--font-reading)', fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '0.75rem' }}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
