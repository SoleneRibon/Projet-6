import React from 'react';
import './Styles/main.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Logements from './Pages/ficheLogements/Logement';
import Error from './Pages/errorPage/Error';
import Layout from "./Components/Layout/Layout";

// Importation Routes
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="ficheLogement/:id" element={<Logements />} />
          <Route path='/erreur' element={<Error />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
