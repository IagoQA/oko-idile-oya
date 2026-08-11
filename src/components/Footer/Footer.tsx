import React from 'react';
import { TabType } from '../Header/Header';
import './Footer.css';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  logoUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  logoUrl = 'file:///C:/Users/calde/.gemini/antigravity-ide/brain/98d9e9f4-c566-4d47-b947-64500e6315e3/media__1786408058133.png'
}) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img 
                src={logoUrl} 
                alt="Logo Oko Ìdílé Ọya" 
                className="footer-logo-img" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo-placeholder.svg';
                }}
              />
              <div>
                <h3 className="footer-title">Oko Ìdílé Ọya</h3>
                <p className="footer-subtitle">Matriz de Omoloko de Raiz Nagô</p>
              </div>
            </div>
            <p className="footer-tagline">
              Um espaço dedicado à memória, ao conhecimento, à tradição e aos ensinamentos do Oko Ìdílé Ọya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navegação</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => onSelectTab('inicio')} className="footer-link-btn">Início</button></li>
              <li><button onClick={() => onSelectTab('historia')} className="footer-link-btn">História da Casa</button></li>
              <li><button onClick={() => onSelectTab('linhagem')} className="footer-link-btn">Rama Familiar</button></li>
              <li><button onClick={() => onSelectTab('apostilas')} className="footer-link-btn">Apostilas & Estudos</button></li>
              <li><button onClick={() => onSelectTab('sire')} className="footer-link-btn">Ṣiré Oko Ìdílé Ọya</button></li>
              <li><button onClick={() => onSelectTab('cargos')} className="footer-link-btn">Cargos da Casa</button></li>
              <li><button onClick={() => onSelectTab('textos')} className="footer-link-btn">Textos & Ensinamentos</button></li>
              <li><button onClick={() => onSelectTab('galeria')} className="footer-link-btn">Galeria de Fotos</button></li>
            </ul>
          </div>

          {/* Ancestral Reference */}
          <div>
            <h4 className="footer-col-title">Linhagem & Origem</h4>
            <div className="footer-reference-box">
              <p className="footer-reference-title">Ilé de Origem & Referência</p>
              <h5 className="footer-reference-name">Ilé Àṣẹ Ìmọ́lẹ̀ Òṣàlá</h5>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                Omoloko de Raiz Makumba
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Oko Ìdílé Ọya — Matriz de Omoloko de Raiz Nagô. Todos os direitos reservados.</p>
          <p>Tradição, Ancestralidade & Respeito</p>
        </div>
      </div>
    </footer>
  );
};
