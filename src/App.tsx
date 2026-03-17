import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { ComingSoon } from './pages/ComingSoon';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-accent selection:text-black flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/architecture" element={<ComingSoon />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
