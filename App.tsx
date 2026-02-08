
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');

  return (
    <Router>
      <div className="relative selection:bg-black selection:text-white">
        <CustomCursor />
        {/* FloatingElements moved into Home to support scroll progress tracking */}
        
        <Routes>
          <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
          <Route path="/resume" element={<Resume lang={lang} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
