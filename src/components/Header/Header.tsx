import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  GitBranch, 
  Library, 
  Music, 
  Award, 
  FileText, 
  Image as ImageIcon,
  Menu,
  X
} from 'lucide-react';
import './Header.css';

export type TabType = 
  | 'inicio'
  | 'historia'
  | 'linhagem'
  | 'apostilas'
  | 'sire'
  | 'cargos'
  | 'textos'
  | 'galeria';

interface HeaderProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  logoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  logoUrl = 'file:///C:/Users/calde/.gemini/antigravity-ide/brain/98d9e9f4-c566-4d47-b947-64500e6315e3/media__1786408058133.png'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'inicio', label: 'Início', icon: <Home size={16} /> },
    { id: 'historia', label: 'História', icon: <BookOpen size={16} /> },
    { id: 'linhagem', label: 'Rama Familiar', icon: <GitBranch size={16} /> },
    { id: 'apostilas', label: 'Apostilas', icon: <Library size={16} /> },
    { id: 'sire', label: 'Ṣiré', icon: <Music size={16} /> },
    { id: 'cargos', label: 'Cargos', icon: <Award size={16} /> },
    { id: 'textos', label: 'Textos', icon: <FileText size={16} /> },
    { id: 'galeria', label: 'Galeria', icon: <ImageIcon size={16} /> },
  ];

  const handleNavClick = (tabId: TabType) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo & Brand Title */}
        <button className="header-brand" onClick={() => handleNavClick('inicio')}>
          <div className="header-logo-wrapper">
            <img 
              src={logoUrl} 
              alt="Logo Oko Ìdílé Ọya" 
              className="header-logo-img"
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
          <div className="header-titles">
            <span className="header-title-main">Oko Ìdílé Ọya</span>
            <span className="header-subtitle-main">Matriz de Omoloko de Raiz Nagô</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegação Principal">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir Menu de Navegação"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Overlay Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div>
            <div className="drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img 
                  src={logoUrl} 
                  alt="Logo" 
                  style={{ width: 36, height: 36, objectFit: 'contain' }}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/logo-oko-idile-oya.svg'; }}
                />
                <span className="drawer-brand-title">Oko Ìdílé Ọya</span>
              </div>
              <button 
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar Menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="drawer-footer">
            <p style={{ fontWeight: 'bold' }}>Oko Ìdílé Ọya</p>
            <p style={{ fontSize: '0.75rem', marginTop: '0.2rem' }}>Matriz de Omoloko de Raiz Nagô</p>
          </div>
        </div>
      </div>
    </header>
  );
};
