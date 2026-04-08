import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-brand-accent flex items-center justify-center">
                <ShieldCheck className="text-brand-dark w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tight">IMPLICIT<span className="text-brand-accent">_</span>SECURITY</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Autonomous AI cybersecurity for the modern enterprise. Defending the digital frontier.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/services#threat-detection" className="hover:text-brand-accent transition-colors">Threat Detection</Link></li>
              <li><Link to="/services#identity-access" className="hover:text-brand-accent transition-colors">Zero Trust</Link></li>
              <li><Link to="/services#cloud-security" className="hover:text-brand-accent transition-colors">Cloud Security</Link></li>
              <li><Link to="/services#endpoint-defense" className="hover:text-brand-accent transition-colors">Endpoint Protection</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">Newsroom</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Implicit Security Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://x.com/ImplicitSec" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-gray-500 hover:text-white cursor-pointer transition-colors">
              <span className="text-xs font-mono">X</span>
            </a>
            <a href="https://www.linkedin.com/company/nekurasystems" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-gray-500 hover:text-white cursor-pointer transition-colors">
              <span className="text-xs font-mono">in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
