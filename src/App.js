import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Propos from './Pages/aPropos/Propos';
import Logements from './Pages/ficheLogements/Logement';

// Importation Routes
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Propos" element={<Propos />} />
        <Route path="/ficheLogement" element={<Logements />} />
      </Routes>
    </div>

  );
}

export default App;
