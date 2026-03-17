import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ComingSoon = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Coming Soon</h1>
        <p className="text-lg text-gray-400 max-w-md">
          We're working on something great. Check back soon for updates.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent text-black font-semibold rounded-sm hover:bg-opacity-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </section>
  );
};
