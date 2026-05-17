import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HooksSection from './components/sections/HooksSection';
import CTAsSection from './components/sections/CTAsSection';
import IdeasSection from './components/sections/IdeasSection';
import PositioningSection from './components/sections/PositioningSection';
import OpportunitiesSection from './components/sections/OpportunitiesSection';
import ViralPatternsSection from './components/sections/ViralPatternsSection';

type Section = 'hooks' | 'ctas' | 'ideas' | 'positioning' | 'opportunities' | 'patterns';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('hooks');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="main-content">
        <div className="container">
          {activeSection === 'hooks' && <HooksSection searchQuery={searchQuery} />}
          {activeSection === 'ctas' && <CTAsSection searchQuery={searchQuery} />}
          {activeSection === 'ideas' && <IdeasSection searchQuery={searchQuery} />}
          {activeSection === 'positioning' && <PositioningSection searchQuery={searchQuery} />}
          {activeSection === 'opportunities' && <OpportunitiesSection searchQuery={searchQuery} />}
          {activeSection === 'patterns' && <ViralPatternsSection searchQuery={searchQuery} />}
        </div>
      </main>
    </div>
  );
}

export default App;
