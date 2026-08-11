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
            <span className="section-tag">Memória & Tradição</span>
            <h1 className="historia-main-title">{historiaData.title}</h1>
            <p className="historia-intro-lead">{historiaData.subtitle}</p>
          </header>

          {/* Introduction */}
          <div className="historia-section-block">
            <p className="historia-p">{historiaData.introduction}</p>
          </div>

          {/* Área 1: Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá */}
          <div className="historia-section-block" style={{ backgroundColor: '#FAF6F0', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
            <span className="badge badge-red" style={{ marginBottom: '0.75rem' }}>Casa de Origem & Referência</span>
            <h2 className="historia-section-heading" style={{ borderLeftColor: 'var(--color-accent-gold)' }}>
              {historiaData.seccaoIlePai.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-accent-wine)', fontWeight: 600, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {historiaData.seccaoIlePai.sub}
            </p>
            {historiaData.seccaoIlePai.paragraphs.map((p, idx) => (
              <div key={idx} className="placeholder-box">
                <Info size={20} />
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* Visual Transition Connector */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2.5rem 0', color: 'var(--color-primary)' }}>
            <div style={{ width: '2px', height: '32px', backgroundColor: 'var(--color-primary)' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.35rem 1rem', background: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border-red)' }}>
              Origem Espiritual & Continuidade Ancestral
            </span>
            <ArrowDown size={24} style={{ marginTop: '0.35rem' }} />
          </div>

          {/* Área 2: Oko Ìdílé Ọya */}
          <div className="historia-section-block" style={{ backgroundColor: 'var(--color-bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '2px solid var(--color-primary)' }}>
            <span className="badge badge-red" style={{ marginBottom: '0.75rem' }}>Nossa Casa</span>
            <h2 className="historia-section-heading">
              {historiaData.seccaoMinhaCasa.title}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {historiaData.seccaoMinhaCasa.sub}
            </p>
            {historiaData.seccaoMinhaCasa.paragraphs.map((p, idx) => (
              <div key={idx} className="placeholder-box">
                <Info size={20} />
                <span>{p}</span>
              </div>
            ))}

            {historiaData.seccaoMinhaCasa.highlight && (
              <blockquote className="historia-quote-callout">
                "{historiaData.seccaoMinhaCasa.highlight}"
              </blockquote>
            )}
          </div>

          {/* Timeline of Key Events */}
          <div className="historia-timeline-container">
            <h2 className="historia-timeline-title">Linha do Tempo de Acontecimentos</h2>
            <div className="timeline-list">
              {historiaData.timeline.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-item-title">{item.title}</h3>
                  <div className="placeholder-box" style={{ margin: '0.5rem 0 0 0', padding: '0.85rem 1rem' }}>
                    <Info size={18} />
                    <span style={{ fontSize: '0.9rem' }}>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
