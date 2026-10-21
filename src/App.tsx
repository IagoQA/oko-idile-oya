import React, { useState } from 'react';
import { Header, TabType } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { HistoriaPage } from './pages/Historia/Historia';
import { ApostilasPage } from './pages/Apostilas/Apostilas';
import { SirePage } from './pages/Sire/Sire';
import { CargosPage } from './pages/Cargos/Cargos';
import { TextosPage } from './pages/Textos/Textos';
import { GaleriaPage } from './pages/Galeria/Galeria';
import { TecladoYorubaPage } from './pages/TecladoYoruba/TecladoYoruba';
import './styles/global.css';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'inicio':
        return <Home onSelectTab={setActiveTab} />;
      case 'historia':
        return <HistoriaPage />;
      case 'apostilas':
        return <ApostilasPage />;
      case 'sire':
        return <SirePage />;
      case 'cargos':
        return <CargosPage />;
      case 'textos':
        return <TextosPage />;
      case 'galeria':
        return <GaleriaPage />;
      case 'tecladoYoruba':
        return <TecladoYorubaPage />;
      default:
        return <Home onSelectTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header activeTab={activeTab} onSelectTab={setActiveTab} />
      <main style={{ flex: 1 }}>
        {renderActiveSection()}
      </main>
      <Footer onSelectTab={setActiveTab} />
    </div>
  );
}

export default App;
