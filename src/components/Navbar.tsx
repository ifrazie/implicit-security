import React, { useState, useEffect } from 'react';
import { ShieldCheck, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-brand-accent flex items-center justify-center">
            <ShieldCheck className="text-brand-dark w-5 h-5" />
          </div>
          <span className="font-mono font-bold text-xl tracking-tight">IMPLICIT<span className="text-brand-accent"> </span>SECURITY</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/services" className="hover:text-white transition-colors">Solutions</Link>
          <Link to="/about" className="hover:text-white transition-colors">Company</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sign In</button>
          <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
            Request Demo <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-brand-border p-6 flex flex-col gap-4">
          <Link to="/" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link to="/about" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Company</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          <hr className="border-brand-border my-2" />
          <button className="text-left text-gray-300 hover:text-white">Sign In</button>
          <button className="px-5 py-2.5 bg-brand-accent text-black text-sm font-semibold rounded-sm hover:bg-opacity-90 transition-colors w-full text-center">
            Request Demo
          </button>
        </div>
      )}
    </nav>
  );
};
