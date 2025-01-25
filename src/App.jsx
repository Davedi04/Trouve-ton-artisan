import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/ArtisanList';
import ArtisanDetails from './pages/ArtisanDetails';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ArtisanDetails" element={<Services />} />
          <Route path="/artisans/:id" element={<ArtisanDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;