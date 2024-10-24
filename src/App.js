import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.module.css';
import Home from './pages/Home/Home';
import About from './pages/About/About'; 
import Tours from './pages/Tours/Tours';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
