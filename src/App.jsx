import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FicheArtisan from './pages/FicheArtisan';
import ListeArtisans from './pages/ListeArtisan'; 
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<ListeArtisans />} />
          <Route path="/artisan/:id" element={<FicheArtisan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;