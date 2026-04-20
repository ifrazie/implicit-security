import React from 'react';
import { motion } from 'motion/react';

export const Newsroom = () => {
  return (
    <main className="pt-32 pb-24 relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Coming Soon</h1>
        </motion.div>
      </div>
    </main>
  );
};
