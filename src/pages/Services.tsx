import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  CloudCog, 
  Smartphone, 
  Fingerprint, 
  Activity, 
  Database,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 w-fit mb-6">
            <span className="text-xs font-mono text-brand-accent uppercase tracking-wider">Our Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Comprehensive <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">AI Defense.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From the endpoint to the cloud, our autonomous platform provides continuous, adaptive protection against the most sophisticated cyber threats.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceList = () => {
  const services = [
    {
      id: "threat-detection",
      icon: <ShieldAlert className="w-8 h-8 text-brand-accent" />,
      title: "Autonomous Threat Detection",
      description: "Our core neural engine monitors network traffic, user behavior, and system logs in real-time. By understanding the 'normal' state of your environment, it instantly identifies anomalous patterns indicative of zero-day attacks, ransomware, and insider threats.",
      features: [
        "Behavioral anomaly detection",
        "Encrypted traffic analysis",
        "Automated threat hunting",
        "Sub-millisecond response times"
      ]
    },
    {
      id: "cloud-security",
      icon: <CloudCog className="w-8 h-8 text-brand-accent" />,
      title: "Cloud Native Protection",
      description: "Secure your multi-cloud and hybrid environments. Implicit Security integrates directly with AWS, Azure, and GCP to provide unified visibility and control over your cloud workloads, containers, and serverless functions.",
      features: [
        "CSPM (Cloud Security Posture Management)",
        "CWPP (Cloud Workload Protection)",
        "Kubernetes & Container security",
        "Infrastructure as Code (IaC) scanning"
      ]
    },
    {
      id: "endpoint-defense",
      icon: <Smartphone className="w-8 h-8 text-brand-accent" />,
      title: "Endpoint Detection & Response (EDR)",
      description: "Extend autonomous protection to every device. Our lightweight agent uses local AI models to stop malware, fileless attacks, and lateral movement directly on the endpoint, even when disconnected from the network.",
      features: [
        "Offline AI protection",
        "Automated device isolation",
        "Deep forensic telemetry",
        "Ransomware rollback capabilities"
      ]
    },
    {
      id: "identity-access",
      icon: <Fingerprint className="w-8 h-8 text-brand-accent" />,
      title: "Zero Trust Identity",
      description: "Move beyond perimeter defense. We continuously verify trust based on user context, device health, and behavioral biometrics, ensuring that only authenticated and authorized entities access your critical assets.",
      features: [
        "Continuous authentication",
        "Risk-based access controls",
        "Behavioral biometrics",
        "Privileged access management"
      ]
    },
    {
      id: "data-security",
      icon: <Database className="w-8 h-8 text-brand-accent" />,
      title: "Data Security Posture",
      description: "Discover, classify, and protect sensitive data across your entire organization. Our AI automatically identifies PII, PHI, and intellectual property, enforcing encryption and access policies to prevent data exfiltration.",
      features: [
        "Automated data classification",
        "DLP (Data Loss Prevention)",
        "Quantum-resistant encryption",
        "Compliance reporting"
      ]
    },
    {
      id: "soc-automation",
      icon: <Activity className="w-8 h-8 text-brand-accent" />,
      title: "SOC Automation (SOAR)",
      description: "Force-multiply your security team. Our platform automatically investigates alerts, correlates events across domains, and executes remediation playbooks, reducing alert fatigue and MTTR (Mean Time To Respond).",
      features: [
        "Automated alert triage",
        "Cross-domain correlation",
        "Custom remediation playbooks",
        "GenAI security assistant"
      ]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,157,0.1)]">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{service.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/architecture" className="text-brand-accent font-semibold hover:text-white transition-colors flex items-center gap-2 group">
                  Explore Technical Specs 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="aspect-square rounded-2xl glass-panel border border-brand-border p-8 relative overflow-hidden group">
                  {/* Abstract visualization placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-surface to-brand-dark opacity-80"></div>
                  <div className="absolute inset-0 grid-bg opacity-30"></div>
                  
                  {/* Animated elements based on service type could go here */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-brand-accent/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-brand-accent/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                      <span>MODULE: {service.id.toUpperCase()}</span>
                      <span className="text-brand-accent">ACTIVE</span>
                    </div>
                    
                    <div className="self-center text-center">
                       {React.cloneElement(service.icon as React.ReactElement, { className: "w-24 h-24 text-brand-accent/50 mx-auto mb-4 group-hover:scale-110 transition-transform duration-700" })}
                    </div>
                    
                    <div className="text-xs font-mono text-gray-500">
                      SYSTEM_STATUS: <span className="text-white">OPTIMAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesCTA = () => {
  return (
    <section className="py-32 relative border-t border-brand-border bg-brand-surface/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Need a custom deployment?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Our engineering team works directly with enterprise clients to integrate Implicit Security into complex, bespoke environments.
        </p>
        <Link to="/contact" className="px-8 py-4 bg-brand-accent text-black font-semibold rounded-sm hover:bg-opacity-90 transition-all">
          Contact Solutions Engineering
        </Link>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <main>
      <ServicesHero />
      <ServiceList />
      <ServicesCTA />
    </main>
  );
};
