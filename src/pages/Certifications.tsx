import React from 'react';
import { motion } from 'motion/react';
import { certifications } from '../data/siteData';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Professional <span className="text-emerald-500">Certifications</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Globally recognized accreditations that validate Ahmed's expertise in Occupational Health and Safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all group relative flex flex-col"
            >
              {/* Certificate Image Preview */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award className="w-12 h-12 text-slate-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                
                {/* Verification Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-emerald-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-white mb-2 leading-tight">{cert.title}</h3>
                <p className="text-emerald-500 font-bold text-sm mb-6">{cert.issuer}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{cert.date}</span>
                  {cert.verificationUrl && cert.verificationUrl !== '#' ? (
                    <a 
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 text-xs font-bold flex items-center space-x-1 hover:text-emerald-400 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-slate-400 text-xs font-bold flex items-center space-x-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credential Highlights */}
        <div className="mt-24">
          <h2 className="text-3xl font-black text-white mb-12 text-center">Credential Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group bg-slate-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src="input_file_5.png" 
                  alt="NEBOSH Certificate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-xl flex items-center space-x-2 shadow-xl">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Verified Original</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-white font-black text-xl mb-2">NEBOSH IGC</h3>
                <p className="text-slate-400 text-sm font-medium">Awarded 11 April 2025 • SQA Ref: R630 04</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group bg-slate-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src="input_file_3.png" 
                  alt="ISO 14001 Certificate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-xl flex items-center space-x-2 shadow-xl">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Verified Original</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-white font-black text-xl mb-2">ISO 14001:2015 EMS</h3>
                <p className="text-slate-400 text-sm font-medium">Awarded 13 November 2019 • Knights Safety</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group bg-slate-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src="input_file_6.png" 
                  alt="OSHAcademy Certificate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-xl flex items-center space-x-2 shadow-xl">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Verified Original</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-white font-black text-xl mb-2">OSHAcademy 30-Hour</h3>
                <p className="text-slate-400 text-sm font-medium">Awarded 12 June 2023 • Credential ID: 226052-106</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
