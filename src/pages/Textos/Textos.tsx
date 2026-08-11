import React, { useState } from 'react';
import { textosData, categoriasTextos, TextoArticle } from '../../data/textos';
import { ArrowLeft, Calendar, Clock, User, Search, Info, Tag } from 'lucide-react';
import './Textos.css';

export const TextosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<TextoArticle | null>(null);

  const filteredTextos = textosData.filter(art => {
    const matchesCat = selectedCategory === 'Todos' || art.categoria === selectedCategory;
    const matchesSearch = art.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Render Single Article Reader Mode
  if (readingArticle) {
    return (
      <div className="section-padding">
        <div className="container">
          <article className="editorial-container">
            <button 
              className="editorial-back-btn"
              onClick={() => setReadingArticle(null)}
            >
              <ArrowLeft size={18} />
              <span>Voltar para Lista de Textos</span>
            </button>

            <header className="editorial-header">
              <span className="badge badge-red">{readingArticle.categoria}</span>
              <h1 className="editorial-title">{readingArticle.titulo}</h1>

              <div className="editorial-meta-bar">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={14} />
                  {readingArticle.autor}
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} />
                  {new Date(readingArticle.data).toLocaleDateString('pt-BR')}
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} />
                  {readingArticle.tempoLeitura}
                </span>
              </div>
            </header>

            <div className="editorial-content">
              {readingArticle.conteudoParagraphs.map((paragraph, idx) => (
                <div key={idx}>
                  {paragraph.startsWith('[') ? (
                    <div className="placeholder-box">
                      <Info size={22} />
                      <span>{paragraph}</span>
                    </div>
                  ) : (
                    <p>{paragraph}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="texto-tags-row" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
              <Tag size={16} color="var(--color-primary)" />
              {readingArticle.tags.map(t => (
                <span key={t} className="tag-item">#{t}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Render Listing View
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Blog Editorial & Ensinamentos</span>
          <h1 className="section-title">Textos e Publicações</h1>
          <p className="section-subtitle">
            Reflexões, artigos, comunicados e ensinamentos preservados para a comunidade do Oko Ìdílé Ọya.
          </p>
        </div>

        {/* Search */}
        <div className="sire-search-wrapper">
          <Search size={18} className="sire-search-icon" />
          <input
            type="text"
            className="sire-search-input"
            placeholder="Buscar por título ou palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories Bar */}
        <div className="filter-bar">
          {categoriasTextos.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Articles */}
        <div className="textos-grid">
          {filteredTextos.map((article) => (
            <div 
              key={article.id} 
              className="texto-card"
              onClick={() => setReadingArticle(article)}
            >
              <div>
                <div className="texto-card-meta">
                  <span className="badge badge-red">{article.categoria}</span>
                  <span>{new Date(article.data).toLocaleDateString('pt-BR')}</span>
                  <span>• {article.tempoLeitura}</span>
                </div>

                <h3 className="texto-card-title">{article.titulo}</h3>
                <p className="texto-card-resumo">{article.resumo}</p>
              </div>

              <div>
                <div className="texto-tags-row">
                  {article.tags.map(t => (
                    <span key={t} className="tag-item">#{t}</span>
                  ))}
                </div>

                <span className="home-card-cta">
                  Ler Publicação <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
