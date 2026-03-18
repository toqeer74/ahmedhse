import React, { useState } from 'react';
import { motion } from 'motion/react';
import { trainerInfo } from '../data/siteData';
import { MessageCircle, Phone, Mail, Send, CheckCircle2, Video } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const whatsappLink = `https://wa.me/${trainerInfo.whatsapp}?text=Hello Ahmed, I'm interested in your HSE training services.`;

  return (
    <div className="bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get In <span className="text-emerald-500">Touch</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to start your safety training? Contact Ahmed directly for enrollment, course details, or corporate training inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-emerald-600/10 border border-emerald-500/20 p-8 rounded-3xl hover:bg-emerald-600/20 transition-all group"
            >
              <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-slate-400 text-sm mb-4">Fastest way to get a response and book sessions.</p>
              <span className="text-emerald-500 font-bold flex items-center space-x-2">
                <span>Chat Now</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Google Meet</h3>
              <p className="text-slate-400 text-sm mb-4">Live interactive training sessions available by appointment.</p>
              <span className="text-blue-500 font-bold">Scheduled Sessions</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <div className="bg-slate-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-400 text-sm mb-4">{trainerInfo.email}</p>
              <a href={`mailto:${trainerInfo.email}`} className="text-slate-300 font-bold hover:text-white transition-colors">Send Email</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 mb-8">Thank you for your inquiry. Ahmed will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-emerald-500 font-bold underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-8">Send a Quick Inquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-400 text-sm font-bold mb-2 uppercase tracking-widest">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-sm font-bold mb-2 uppercase tracking-widest">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-bold mb-2 uppercase tracking-widest">Training Interest</label>
                      <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors">
                        <option>NEBOSH IGC</option>
                        <option>IOSH Managing Safely</option>
                        <option>OSHA 30-Hour</option>
                        <option>First Aid & BLS</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-bold mb-2 uppercase tracking-widest">Your Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </>
              )}
            </div>
            
            <div className="mt-8 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/10 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Call / WhatsApp</p>
                  <p className="text-white font-bold">{trainerInfo.phone}</p>
                </div>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600/10 text-emerald-500 px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-600 hover:text-white transition-all"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
