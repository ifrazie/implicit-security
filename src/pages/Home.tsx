import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Network, Lock, Eye, Zap, ChevronRight, Terminal, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs font-mono text-brand-accent uppercase tracking-wider">Next-Gen Threat Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Security that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">thinks ahead.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Implicit Security leverages autonomous AI to detect, analyze, and neutralize zero-day threats before they breach your perimeter. Zero trust, infinite scale.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link to="/contact" className="px-8 py-4 bg-brand-accent text-black font-semibold rounded-sm hover:bg-opacity-90 transition-all flex items-center gap-2">
              Request Demo <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/architecture" className="px-8 py-4 bg-transparent border border-brand-border text-white font-semibold rounded-sm hover:bg-white/5 transition-all">
              View Architecture
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-panel rounded-lg p-1 shadow-2xl shadow-brand-accent/5">
            <div className="bg-brand-surface rounded-md border border-brand-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-black/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-gray-500 ml-4 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> implicit-core-v2.4.1
                </div>
              </div>
              <div className="p-6 font-mono text-sm text-gray-400 flex flex-col gap-2 h-[320px] overflow-hidden relative">
                <div className="flex justify-between text-xs text-gray-600 mb-2">
                  <span>TIMESTAMP</span>
                  <span>EVENT</span>
                  <span>STATUS</span>
                </div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                  className="flex justify-between items-center border-b border-white/5 pb-2"
                >
                  <span className="text-gray-500">16:44:37</span>
                  <span className="text-white">Ingesting network telemetry...</span>
                  <span className="text-brand-accent">OK</span>
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
                  className="flex justify-between items-center border-b border-white/5 pb-2"
                >
                  <span className="text-gray-500">16:44:38</span>
                  <span className="text-white">Analyzing behavioral patterns...</span>
                  <span className="text-brand-accent">OK</span>
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.1 }}
                  className="flex justify-between items-center border-b border-white/5 pb-2"
                >
                  <span className="text-gray-500">16:44:39</span>
                  <span className="text-red-400">Anomalous payload detected (IP: 192.168.x.x)</span>
                  <span className="text-red-500 animate-pulse">WARN</span>
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.8 }}
                  className="flex justify-between items-center border-b border-white/5 pb-2 bg-red-500/10 -mx-6 px-6 py-2"
                >
                  <span className="text-gray-500">16:44:39</span>
                  <span className="text-white">Initiating automated isolation protocol...</span>
                  <span className="text-yellow-500">EXEC</span>
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3.5 }}
                  className="flex justify-between items-center pt-2"
                >
                  <span className="text-gray-500">16:44:40</span>
                  <span className="text-brand-accent glow-text">Threat neutralized. System secure.</span>
                  <span className="text-brand-accent">SAFE</span>
                </motion.div>
                
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-surface to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-brand-accent" />,
      title: "Neural Threat Detection",
      description: "Our proprietary LLM models analyze network traffic semantics, identifying sophisticated attacks that bypass traditional signature-based systems."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-accent" />,
      title: "Autonomous Response",
      description: "Sub-millisecond automated remediation isolates compromised endpoints before lateral movement can occur."
    },
    {
      icon: <Network className="w-6 h-6 text-brand-accent" />,
      title: "Zero-Trust Architecture",
      description: "Continuous verification of every user, device, and application attempting to access your critical infrastructure."
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-accent" />,
      title: "Predictive Analytics",
      description: "Forecast potential vulnerabilities by analyzing global threat intelligence feeds and your specific attack surface."
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-accent" />,
      title: "Quantum-Resistant Encryption",
      description: "Future-proof your data with post-quantum cryptographic algorithms securing data at rest and in transit."
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-accent" />,
      title: "Unified Telemetry",
      description: "A single pane of glass for all your security operations, aggregating logs, metrics, and traces into actionable insights."
    }
  ];

  return (
    <section id="platform" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The intelligence advantage.</h2>
          <p className="text-gray-400 text-lg">
            Legacy security tools look for what they already know. Implicit Security understands context, intent, and behavior to stop the unknown.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl hover:bg-white/[0.02] transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center mb-6 group-hover:border-brand-accent/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-24 border-y border-brand-border bg-brand-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">99.9<span className="text-brand-accent">%</span></div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Threat Detection Rate</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">&lt;10<span className="text-brand-accent">ms</span></div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Response Latency</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">50<span className="text-brand-accent">M+</span></div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Endpoints Secured</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">0</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Zero-Day Breaches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to secure your future?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join Fortune 500 companies who trust Implicit Security to protect their most critical digital assets.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-all">
            Request a Demo
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-border text-white font-semibold rounded-sm hover:bg-white/5 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </main>
  );
};
