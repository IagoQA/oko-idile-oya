import React, { useState } from 'react';
import { cargosData, CargoItem } from '../../data/cargos';
import { Award, Shield, Users, Heart, Sparkles } from 'lucide-react';
import './Cargos.css';

export const CargosPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories: CargoItem['categoria'][] = [
    'Cargos',
    'EKÉJÌ',
    'OGANS',
    'POSIÇÕES ESPIRITUAIS'
  ];

  const categoryIcons: Record<CargoItem['categoria'], React.ReactNode> = {
    'Cargos': <Award size={22} color="var(--color-primary)" />,
    'EKÉJÌ': <Shield size={22} color="var(--color-accent-gold)" />,
    'OGANS': <Users size={22} color="var(--color-primary)" />,
    'POSIÇÕES ESPIRITUAIS': <Sparkles size={22} color="var(--color-accent-wine)" />
  };

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Hierarquia & Organização</span>
          <h1 className="section-title">Cargos do Oko Ìdílé Ọya</h1>
          <p className="section-subtitle">
            Estrutura hierárquica, atribuições dos cargos sagrados, Ekéjì, Ogans e posições espirituais da nossa casa.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-bar">
          <button
            onClick={() => setActiveCategory('Todos')}
            className={`filter-btn ${activeCategory === 'Todos' ? 'active' : ''}`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {categories.map((cat) => {
          if (activeCategory !== 'Todos' && activeCategory !== cat) return null;
          const items = cargosData.filter(c => c.categoria === cat);
          if (items.length === 0) return null;

          const isEspiritual = cat === 'POSIÇÕES ESPIRITUAIS';

          return (
            <div key={cat} className="cargos-category-section" style={{ marginTop: '2.5rem' }}>
              <div className="cargos-category-header">
                {categoryIcons[cat]}
                <h2 className="cargos-category-title" style={{ color: isEspiritual ? 'var(--color-accent-wine)' : 'var(--color-primary)' }}>
                  {cat}
                </h2>
              </div>

              {isEspiritual && (
                <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '1.5rem', marginTop: '-0.75rem', fontSize: '0.95rem' }}>
                  As posições espirituais representam a vivência, o recolhimento e os graus de aprendizado na comunidade de santo, diferenciando-se de cargos administrativos rituais.
                </p>
              )}

              <div className="cargos-grid">
                {items.map((cargo) => (
                  <div 
                    key={cargo.id} 
                    className="cargo-card"
                    style={{
                      borderColor: isEspiritual ? 'var(--color-accent-gold)' : undefined,
                      backgroundColor: isEspiritual ? '#FAF6F0' : undefined
                    }}
                  >
                    <span 
                      className={`badge ${isEspiritual ? '' : 'badge-red'}`} 
                      style={{ 
                        marginBottom: '0.85rem',
                        backgroundColor: isEspiritual ? 'var(--color-accent-gold-light)' : undefined,
                        color: isEspiritual ? 'var(--color-bg-dark)' : undefined
                      }}
                    >
                      {cargo.categoria}
                    </span>

                    <h3 className="cargo-card-title">{cargo.nome}</h3>
                    
                    {cargo.descricao && (
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginTop: '0.5rem' }}>
                        {cargo.descricao}
                      </p>
                    )}

                    {cargo.responsabilidades && cargo.responsabilidades.length > 0 && (
                      <div style={{ marginTop: '1rem' }}>
                        <h4 className="cargo-responsabilidades-title">Atribuições</h4>
                        <ul className="cargo-resp-list">
                          {cargo.responsabilidades.map((resp, idx) => (
                            <li key={idx} className="cargo-resp-item">
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
