import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, ShieldCheck, CheckCircle } from 'lucide-react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { errors } = await client.models.ContactSubmission.create({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        message: formData.company ? `[${formData.company}] ${formData.message}` : formData.message,
      });
      if (errors) {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="pt-32 pb-24 relative min-h-screen">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 w-fit mb-6">
              <span className="text-xs font-mono text-brand-accent uppercase tracking-wider">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Secure your enterprise.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect with our security experts to discuss how Implicit Security can protect your organization from next-generation threats.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl border border-brand-border"
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Message sent!</h4>
                <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 border border-brand-border rounded-lg text-gray-300 hover:text-white hover:border-brand-accent/50 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">How can we help?</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-8 py-4 bg-brand-accent text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : <>Send Message <Send className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-gray-400 text-sm mb-1">For general inquiries and support.</p>
                    <a href="mailto:hello@implicitsecurity.com" className="text-brand-accent hover:underline">hello@implicitsecurity.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-gray-400 text-sm mb-1">Mon-Fri from 8am to 6pm PST.</p>
                    <a href="tel:+18005550199" className="text-brand-accent hover:underline">+1 (800) 555-0199</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Headquarters</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      100 Security Plaza<br />
                      Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-brand-border">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <h4 className="text-white font-medium">24/7 Incident Response</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Are you currently experiencing a cyber attack or breach? Our rapid response team is available 24/7.
              </p>
              <button className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded hover:bg-red-500/20 transition-colors text-sm font-medium w-full">
                Report an Incident
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
