import React from 'react';
import { historiaData } from '../../data/historia';
import { Info, ArrowDown } from 'lucide-react';
import './Historia.css';

export const HistoriaPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <article className="historia-article">
          {/* Header */}
          <header className="historia-header">
            <h1 className="historia-main-title">{historiaData.title}</h1>
          </header>

          {/* Introduction */}
          <div className="historia-section-block">
            <p className="historia-p">{historiaData.introduction}</p>
          </div>

          {/* Área 1: Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá */}
          <div className="historia-section-block">
            <h2 className="historia-section-heading" style={{ borderLeftColor: 'var(--color-accent-gold)' }}>
              {historiaData.seccaoIlePai.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-accent-wine)', fontWeight: 600, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {historiaData.seccaoIlePai.sub}
            </p>
            {historiaData.seccaoIlePai.paragraphs.map((p, idx) => (
              <div key={idx} className="placeholder-box">
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* Visual Transition Connector */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2.5rem 0', color: 'var(--color-primary)' }}>
            <div style={{ width: '2px', height: '32px', backgroundColor: 'var(--color-primary)' }} />
            <ArrowDown size={24} style={{ marginTop: '-0.35rem' }} />
          </div>

          {/* Área 2: Oko Ìdílé Ọya */}
          <div className="historia-section-block" style={{ padding: '2rem'}}>
            <h2 className="historia-section-heading">
              {historiaData.seccaoMinhaCasa.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {historiaData.seccaoMinhaCasa.sub}
            </p>
            {historiaData.seccaoMinhaCasa.paragraphs.map((p, idx) => (
              <div key={idx} className="placeholder-box">
                <span>{p}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};
