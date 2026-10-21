import React, { useState } from 'react';
import {
  secoesCargos,
  getCargosPorSecao,
  getCargoDescricaoParaSecao,
  CargoGroupId,
  CargoItem
} from '../../data/cargos';
import { Flame, Shield, Compass, Music, Award, Sparkles } from 'lucide-react';
import './Cargos.css';

export const CargosPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const sectionIcons: Record<CargoGroupId, React.ReactNode> = {
    bale: <Flame size={22} />,
    aare: <Shield size={22} />,
    alaajo: <Compass size={22} />,
    ogans: <Music size={22} />,
    ekeji: <Award size={22} />,
    'posicoes-espirituais': <Sparkles size={22} />
  };

  const visibleSections =
    activeCategory === 'Todos'
      ? secoesCargos
      : secoesCargos.filter((s) => s.id === activeCategory);

  return (
    <div className="section-padding">
      <div className="container">
        {/* Header Principal */}
        <div className="section-header">
          <span className="section-tag">Hierarquia & Funções</span>
          <h1 className="section-title">Cargos do Oko Ìdílé Ọya</h1>
          <p className="section-subtitle">
            Estrutura canônica dos cargos e posições da nossa tradição organizada nas
            classes funcionais: Bálẹ̀ (sacerdócios dos cultos), Ààrẹ (auxiliares dos
            sacerdócios), Aláájò (funções operacionais), Ogans (funções rituais
            especializadas), Ẹkéjì (apoio ritual) e Posições Espirituais.
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="filter-bar" role="tablist" aria-label="Filtro de grupos de cargos">
          <button
            onClick={() => setActiveCategory('Todos')}
            className={`filter-btn ${activeCategory === 'Todos' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeCategory === 'Todos'}
          >
            Todos
          </button>
          {secoesCargos.map((secao) => (
            <button
              key={secao.id}
              onClick={() => setActiveCategory(secao.id)}
              className={`filter-btn ${activeCategory === secao.id ? 'active' : ''}`}
              role="tab"
              aria-selected={activeCategory === secao.id}
            >
              {secao.titulo}
            </button>
          ))}
        </div>

        {/* Painel Explicativo sobre a Posição das Ekéjì */}
        {(activeCategory === 'Todos' ||
          activeCategory === 'ekeji' ||
          activeCategory === 'aare' ||
          activeCategory === 'alaajo') && (
          <div
            className="cargos-ekeji-callout"
            role="region"
            aria-label="Explicação sobre a posição das Ekéjì"
          >
            <div className="cargos-ekeji-callout-header">
              <div className="cargos-ekeji-callout-icon-box">
                <Award size={22} />
              </div>
              <h2 className="cargos-ekeji-callout-title">
                A Posição das Ẹkéjì no Oko Ìdílé Ọya
              </h2>
            </div>
            <p className="cargos-ekeji-callout-text">
              As <strong>Ẹkéjì</strong> exercem posições de alta dignidade, confiança e
              apoio ritual especializado na nossa casa. Em vez de constituírem um corpo
              isolado da rotina religiosa, suas atribuições distribuem-se de forma
              integrada entre as funções de <strong>Ààrẹ</strong> (auxiliares de
              sacerdócios) e <strong>Aláájò</strong> (operações rituais e condução do
              Ìpàdé em função ligada a Ọya).
            </p>
            <p className="cargos-ekeji-callout-text" style={{ marginTop: '0.65rem' }}>
              Na tradição do Oko Ìdílé Ọya, a dignidade de Ẹkéjì restringe-se aos cargos
              expressamente consagrados para essa condição no cadastro da casa —{' '}
              <strong>Ajímúdà</strong>, <strong>Dàgàn</strong> e <strong>Ìyádàgàn</strong>{' '}
              —, não se presumindo essa titularidade a todas as mulheres que exercem
              atividades auxiliares na comunidade.
            </p>
          </div>
        )}

        {/* Listagem das Seções */}
        {visibleSections.map((secao) => {
          const cargos = getCargosPorSecao(secao.id);
          if (cargos.length === 0) return null;

          const isEspiritual = secao.id === 'posicoes-espirituais';

          return (
            <section
              key={secao.id}
              id={`secao-${secao.id}`}
              className="cargos-category-section"
              aria-labelledby={`titulo-${secao.id}`}
            >
              {/* Cabeçalho da Seção */}
              <div className="cargos-category-header-wrap">
                <div className="cargos-category-header">
                  <div
                    className={`cargos-category-icon-box ${
                      isEspiritual ? 'espiritual' : ''
                    }`}
                  >
                    {sectionIcons[secao.id]}
                  </div>
                  <div className="cargos-category-title-group">
                    <h2 id={`titulo-${secao.id}`} className="cargos-category-title">
                      {secao.titulo}
                    </h2>
                  </div>
                </div>
                {/* Uma única frase explicativa */}
                <p className="cargos-category-desc">{secao.descricao}</p>
              </div>

              {/* Grade de Cards de Cargos */}
              <div className="cargos-grid">
                {cargos.map((cargo: CargoItem) => {
                  const descricaoCard = getCargoDescricaoParaSecao(cargo, secao.id);
                  const isEkeji =
                    cargo.vinculos?.includes('Ẹkéjì') || cargo.vinculos?.includes('Ekéjì');

                  return (
                    <article
                      key={`${secao.id}-${cargo.id}`}
                      className={`cargo-card ${isEspiritual ? 'cargo-card-espiritual' : ''}`}
                    >
                      <div>
                        {/* Linha de Marcadores e Badges Discretos */}
                        <div className="cargo-badges-row">
                          {/* Vínculo entre grupos (ex: Bálẹ̀ ou Ààrẹ dentro de Ogans) */}
                          {secao.id === 'ogans' && (
                            <>
                              {cargo.grupoPrincipal === 'bale' && (
                                <span className="badge badge-vinculo">Sacerdócio Bálẹ̀</span>
                              )}
                              {cargo.grupoPrincipal === 'aare' && (
                                <span className="badge badge-vinculo">Auxiliar Ààrẹ</span>
                              )}
                            </>
                          )}

                          {/* Marcador Ogan dentro de Bálẹ̀ e Ààrẹ */}
                          {secao.id !== 'ogans' && cargo.vinculos?.includes('Ogan') && (
                            <span className="badge badge-vinculo">Ogan</span>
                          )}

                          {/* Marcador Ẹkéjì */}
                          {isEkeji && <span className="badge badge-vinculo">Ẹkéjì</span>}

                          {/* Marcador de Posição Espiritual */}
                          {isEspiritual && (
                            <span
                              className="badge"
                              style={{
                                backgroundColor: 'var(--color-accent-gold-light)',
                                color: 'var(--color-bg-dark)',
                                fontWeight: 600
                              }}
                            >
                              Vivência Espiritual
                            </span>
                          )}

                          {/* Marcador de Gênero */}
                          {cargo.genero && (
                            <span className="badge badge-gender">{cargo.genero}</span>
                          )}
                        </div>

                        {/* Nome do Cargo */}
                        <h3 className="cargo-card-title">{cargo.nome}</h3>

                        {/* Descrição em uma única frase */}
                        <p className="cargo-card-desc">{descricaoCard}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
