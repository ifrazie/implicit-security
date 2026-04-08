import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Users, Shield, Zap, ChevronDown, Quote, Lock, FileCheck, Database, ExternalLink } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 w-fit mb-6">
            <span className="text-xs font-mono text-brand-accent uppercase tracking-wider">Our Mission</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Securing the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">autonomous future.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We believe that as threats evolve at machine speed, our defenses must be faster, smarter, and inherently autonomous. Implicit Security was founded to bridge the gap between human capability and AI-driven threats.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-brand-accent" />,
      title: "Absolute Precision",
      description: "We don't guess. Our models are trained to deliver deterministic outcomes in non-deterministic environments, ensuring zero false positives."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-accent" />,
      title: "Machine Speed",
      description: "Human reaction time is no longer sufficient. We build systems that detect, analyze, and remediate in milliseconds."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-accent" />,
      title: "Implicit Trust",
      description: "Trust is earned through continuous verification. We apply zero-trust principles not just to our products, but to how we operate."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-accent" />,
      title: "Collective Defense",
      description: "A threat to one is a threat to all. Our federated learning models ensure that an attack on one client immunizes our entire network."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Core Values</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-brand-border"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: "Dr. Elena Rostova",
      role: "Chief Executive Officer",
      bio: "Pioneer in autonomous cyber defense systems.",
      image: "https://picsum.photos/seed/elena/400/400?grayscale"
    },
    {
      name: "Marcus Chen",
      role: "Chief Technology Officer",
      bio: "Creator of an open-source neural threat framework. 15+ years in offensive security.",
      image: "https://picsum.photos/seed/marcus/400/400?grayscale"
    },
    {
      name: "Sarah Jenkins",
      role: "VP of Threat Intelligence",
      bio: "Former cryptanalyst. Specializes in state-sponsored APT tracking and mitigation.",
      image: "https://picsum.photos/seed/sarah/400/400?grayscale"
    },
    {
      name: "David Al-Fayed",
      role: "Head of Engineering",
      bio: "Scaled distributed systems at major tech giants. Expert in high-throughput data pipelines.",
      image: "https://picsum.photos/seed/david/400/400?grayscale"
    }
  ];

  return (
    <section className="py-24 bg-brand-surface/30 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The minds behind the machine.</h2>
          <p className="text-gray-400 text-lg">
            Our team brings together world-class expertise in artificial intelligence, cryptography, and offensive security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-square bg-brand-surface border border-brand-border">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <div className="text-brand-accent font-mono text-xs uppercase tracking-wider mb-3">{member.role}</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Implicit Security's autonomous response capabilities have fundamentally changed how we handle threats. What used to take our SOC hours is now resolved in milliseconds.",
      author: "Sarah Jenkins",
      title: "CISO",
      company: "Global Financial Services"
    },
    {
      quote: "The reduction in false positives is staggering. Our team can finally focus on strategic security initiatives instead of chasing ghosts in the network.",
      author: "Michael Chang",
      title: "VP of Security",
      company: "HealthTech Solutions"
    },
    {
      quote: "Deploying Implicit Security was seamless. Within 24 hours, the neural models identified an advanced persistent threat that our legacy systems had missed for months.",
      author: "David Rodriguez",
      title: "Director of IT",
      company: "AeroSpace Dynamics"
    }
  ];

  return (
    <section className="py-24 bg-brand-surface/30 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 text-lg">See what our clients have to say about the Implicit Security platform.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-brand-border relative"
            >
              <Quote className="w-10 h-10 text-brand-accent/20 absolute top-6 right-6" />
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-brand-accent font-mono text-xs">{testimonial.title}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustCenter = () => {
  const trustItems = [
    {
      icon: <Lock className="w-6 h-6 text-brand-accent" />,
      title: "Enterprise Security",
      description: "Security is built into every layer of our platform. We employ end-to-end encryption, regular penetration testing, and strict access controls to ensure your data remains protected at all times.",
      linkText: "View Security Architecture",
      linkUrl: "#"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-brand-accent" />,
      title: "Compliance & Certifications",
      description: "We adhere to the highest industry standards. Implicit Security is SOC 2 Type II compliant and ISO 27001 certified, demonstrating our ongoing commitment to operational excellence and security.",
      linkText: "Download Compliance Reports",
      linkUrl: "#"
    },
    {
      icon: <Database className="w-6 h-6 text-brand-accent" />,
      title: "Data Privacy",
      description: "Your data belongs to you. We are fully compliant with GDPR, CCPA, and other global privacy regulations. Our federated learning models ensure that sensitive data never leaves your environment.",
      linkText: "Read Privacy Policy",
      linkUrl: "#"
    }
  ];

  return (
    <section className="py-24 relative border-t border-brand-border bg-brand-surface/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Trust Center</h2>
          <p className="text-gray-400 text-lg">
            Transparency and security are the foundation of everything we do. Learn how we protect your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-brand-border flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              <a href={item.linkUrl} className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors text-sm font-medium mt-auto">
                {item.linkText} <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How does Implicit Security's AI differ from traditional machine learning?",
      answer: "Unlike traditional ML that relies on historical signatures and static baselines, our neural models understand the semantics of network traffic and user behavior. This allows us to identify novel attack vectors and zero-day threats without prior knowledge."
    },
    {
      question: "What is your false positive rate?",
      answer: "Our deterministic models operate with a near-zero false positive rate. By correlating multiple telemetry streams and applying contextual analysis, we ensure that security teams only receive actionable, high-fidelity alerts."
    },
    {
      question: "Do you offer on-premise deployments?",
      answer: "Yes. While our cloud-native platform offers the fastest time-to-value, we provide fully air-gapped, on-premise deployments for highly regulated industries, including defense and critical infrastructure."
    },
    {
      question: "How does the autonomous response work?",
      answer: "When a critical threat is detected, our system can autonomously execute predefined remediation playbooks—such as isolating an endpoint or blocking a malicious IP—in milliseconds, neutralizing the threat before human intervention is possible."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Common questions about our technology and approach.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-panel rounded-xl border border-brand-border overflow-hidden transition-colors hover:border-brand-accent/30">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180 border-brand-accent/50 text-brand-accent' : 'text-gray-400'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      <div className="pt-4 border-t border-brand-border/50">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <main>
      <AboutHero />
      <Values />
      <Team />
      <Testimonials />
      <TrustCenter />
      <FAQ />
    </main>
  );
};
