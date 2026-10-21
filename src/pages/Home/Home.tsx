import React from 'react';
import {
  BookOpen,
  Keyboard,
  Library,
  Music,
  Award,
  FileText,
  Image as ImageIcon,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { TabType } from '../../components/Header/Header';
import './Home.css';

interface HomeProps {
  onSelectTab: (tab: TabType) => void;
  logoUrl?: string;
}

export const Home: React.FC<HomeProps> = ({
  onSelectTab,
  logoUrl = '/logo-oko-idile-oya.svg'
}) => {
  const cards = [
    {
      id: 'historia' as TabType,
      title: 'História da Casa',
      desc: 'Conheça a trajetória, a fundação e a caminhada entre o Ilé de origem e nossa matriz.',
      icon: <BookOpen size={24} />
    },
    {
      id: 'sire' as TabType,
      title: 'Ṣiré Oko Ìdílé Ọya',
      desc: 'Arquivo digital das cantigas e saudações aos Òrìṣà preservadas na nossa casa.',
      icon: <Music size={24} />
    },
    {
      id: 'cargos' as TabType,
      title: 'Cargos da Casa',
      desc: 'Estrutura de Cargos, Ẹkéjì, Ogans e Posições Espirituais da nossa comunidade.',
      icon: <Award size={24} />
    },
    {
      id: 'apostilas' as TabType,
      title: 'Biblioteca de Apostilas',
      desc: 'Acesse materiais de estudo, fundamentos, ervas, ensinamentos e ritos da casa.',
      icon: <Library size={24} />
    },
    {
      id: 'textos' as TabType,
      title: 'Textos & Artigos',
      desc: 'Leia reflexões, comunicados oficiais, histórias e ensinamentos espirituais.',
      icon: <FileText size={24} />
    },
    {
      id: 'galeria' as TabType,
      title: 'Galeria de Memórias',
      desc: 'Registros fotográficos de eventos, obrigações rituais e momentos marcantes da casa.',
      icon: <ImageIcon size={24} />
    },
    {
      id: 'tecladoYoruba' as TabType,
      title: 'Teclado Yoruba',
      desc: 'Ferramenta para digitar caracteres especiais do alfabeto yorùbá e acentuação correta.',
      icon: <Keyboard size={24} />
    }
  ];

  return (
    <div className="home-page">
      {/* Top Institutional Hero Banner */}
      <section className="home-hero">
        <div className="container">
          <div className="home-logo-container">
            <img
              src={logoUrl}
              alt="Logo Oko Ìdílé Ọya — Omoloko de Raiz Nagô"
              className="home-logo-img"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== '/logo.png') {
                  target.src = '/logo.png';
                } else {
                  target.src = '/logo-oko-idile-oya.svg';
                }
              }}
            />
          </div>

          <h1 className="home-hero-title">Oko Ìdílé Ọya</h1>
          <h2 className="home-hero-subtitle">Omoloko de Raiz Nagô</h2>

        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore o Acervo da Nossa Casa</h2>
            <p className="section-subtitle">
              Navegue pelas seções abaixo para acessar a história, cantigas, documentos e a memória sagrada da nossa família de àṣẹ.
            </p>
          </div>

          <div className="home-cards-grid">
            {cards.map((card) => (
              <div
                key={card.id}
                className="home-card"
                onClick={() => onSelectTab(card.id)}
              >
                <div className="home-card-icon-wrapper">
                  {card.icon}
                </div>
                <h3 className="home-card-title">{card.title}</h3>
                <p className="home-card-desc">{card.desc}</p>
                <span className="home-card-cta">
                  Acessar Seção <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>

          {/* Institutional Notice Card */}
          <div className="home-notice-box">
            <ShieldAlert className="home-notice-icon" size={28} />
            <div>
              <h4 className="home-notice-title">Espaço Informativo & Acervo Privado</h4>
              <p className="home-notice-text">
                Este portal foi concebido exclusivamente para a preservação cultural, religiosa e histórica do Oko Ìdílé Ọya. Os conteúdos aqui apresentados destinam-se ao aprendizado, à memória e ao fortalecimento dos laços com os Òrìṣà e com nossa raiz Omoloko.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
