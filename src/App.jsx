import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import CarKey from './pages/projects/CarKey';
import Photo from './pages/projects/Photo';
import CZ from './pages/projects/CZ';
import DinamicIsland from './pages/projects/DinamicIsland';
import NoLimits from './pages/projects/NoLimits';
import Village from './pages/projects/Village';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/carkey" element={<CarKey />} />
      <Route path="/projects/photo" element={<Photo />} />
      <Route path="/projects/cz" element={<CZ />} />
      <Route path="/projects/dinamicisland" element={<DinamicIsland />} />
      <Route path="/projects/nolimits" element={<NoLimits />} />
      <Route path="/projects/village" element={<Village />} />
    </Routes>
  );
};

export default App;
