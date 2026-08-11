import React, { useState } from 'react';
import { galeriaData, categoriasGaleria, FotoItem } from '../../data/galeria';
import { Modal } from '../../components/Modal/Modal';
import { Calendar, Info, ZoomIn } from 'lucide-react';
import './Galeria.css';

export const GaleriaPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activePhoto, setActivePhoto] = useState<FotoItem | null>(null);

  const filteredFotos = selectedCategory === 'Todas'
    ? galeriaData
    : galeriaData.filter(f => f.categoria === selectedCategory);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Memória Visual</span>
          <h1 className="section-title">Galeria de Fotos</h1>
          <p className="section-subtitle">
            Registros fotográficos dos momentos, festividades, obrigações rituais e memórias do Oko Ìdílé Ọya.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-bar">
          {categoriasGaleria.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="galeria-grid">
          {filteredFotos.map((foto) => (
            <div 
              key={foto.id} 
              className="galeria-item"
              onClick={() => setActivePhoto(foto)}
            >
              <div className="galeria-img-wrapper">
                <img 
                  src={foto.imagemUrl} 
                  alt={foto.titulo} 
                  className="galeria-img"
                  loading="lazy"
                />
              </div>

              <div className="galeria-item-info">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span className="badge badge-red">{foto.categoria}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
                    {new Date(foto.data).toLocaleDateString('pt-BR')}
                  </span>
                </div>

                <h3 className="galeria-item-title">{foto.titulo}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Modal
          isOpen={!!activePhoto}
          onClose={() => setActivePhoto(null)}
          title={activePhoto?.titulo || 'Registro Fotográfico'}
          maxWidth="820px"
        >
          {activePhoto && (
            <div>
              <div className="lightbox-img-wrapper">
                <img 
                  src={activePhoto.imagemUrl} 
                  alt={activePhoto.titulo} 
                  className="lightbox-img" 
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-red">{activePhoto.categoria}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} />
                  {new Date(activePhoto.data).toLocaleDateString('pt-BR')}
                </span>
              </div>

              <div className="placeholder-box">
                <Info size={20} />
                <span>{activePhoto.descricao}</span>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
