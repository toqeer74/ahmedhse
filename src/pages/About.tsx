import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { trainerInfo } from '../data/siteData';
import { Award, BookOpen, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { generateImage } from '../services/imageService';

const About = () => {
  const [trainerImage, setTrainerImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using the provided portrait image
    setTrainerImage("input_file_8.png");
    setLoading(false);
  }, []);

  return (
    <div className="bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
              The Face Behind <br />
              <span className="text-emerald-500">AhmedHSE</span>
            </h1>
            <div className="space-y-8 text-slate-400 text-xl leading-relaxed font-medium">
              <p>
                Ahmed Khurshid is a dedicated HSE Trainer and Safety Officer with a passion for promoting occupational health and safety across diverse industries. With over 5 years of hands-on experience in Saudi Arabia's most challenging oil, gas, and construction projects, Ahmed brings a practical, real-world perspective to his training sessions.
              </p>
              <p>
                His mission is to bridge the gap between theoretical safety knowledge and field implementation, ensuring that students and workers are not just certified, but truly prepared to manage risks in the workplace.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center space-x-5 bg-slate-900/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-800">
                <div className="bg-emerald-500/10 p-3 rounded-2xl">
                  <Globe className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <p className="text-white font-black text-lg">Languages</p>
                  <p className="text-slate-400 text-sm font-bold">{trainerInfo.languages.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-5 bg-slate-900/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-800">
                <div className="bg-emerald-500/10 p-3 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <p className="text-white font-black text-lg">Status</p>
                  <p className="text-slate-400 text-sm font-bold">{trainerInfo.status}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/20 blur-[100px] rounded-full opacity-50" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl aspect-[4/5] bg-slate-900">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <img
                  src={trainerImage || "https://picsum.photos/seed/ahmed/800/1000"}
                  alt="Ahmed Khurshid"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
            <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-10 rounded-[3rem] shadow-2xl hidden md:block">
              <p className="text-white text-6xl font-black leading-none mb-2">HSE</p>
              <p className="text-emerald-100 font-black uppercase tracking-[0.3em] text-[10px]">Professional Trainer</p>
            </div>
          </motion.div>
        </div>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-[3rem] border border-slate-800"
          >
            <div className="flex items-center space-x-6 mb-12">
              <div className="bg-emerald-500/10 p-4 rounded-2xl">
                <BookOpen className="w-10 h-10 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">Academic Background</h2>
            </div>
            <ul className="space-y-8">
              {[
                { title: "Diploma of Safety Engineering (2 Years)", sub: "Skill Testing Association (STA), Pakistan" },
                { title: "Intermediate", sub: "AJK BISE Mirpur Board" },
                { title: "Matriculation", sub: "AJK BISE Mirpur Board" }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-5">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div>
                    <p className="text-white font-black text-xl mb-1">{item.title}</p>
                    <p className="text-slate-400 text-base font-medium">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-[3rem] border border-slate-800"
          >
            <div className="flex items-center space-x-6 mb-12">
              <div className="bg-emerald-500/10 p-4 rounded-2xl">
                <Award className="w-10 h-10 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">Why Trust Ahmed?</h2>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {[
                "NEBOSH International General Certificate Holder",
                "IOSH Managing Safely Certified",
                "OSHA 30-Hours General Industry Expert",
                "Extensive field experience in Oil & Gas (JGC, SISCO)",
                "Proven track record in safety inspections and audits",
                "Bilingual training (English, Urdu, Arabic)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 bg-slate-800/30 p-5 rounded-2xl border border-white/5 group hover:border-emerald-500/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-base font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Training Philosophy</h2>
          <p className="text-slate-400 text-lg italic">
            "Safety is not just a set of rules; it's a mindset. My goal is to empower every trainee with the confidence and knowledge to identify hazards before they become accidents. Practical experience is the best teacher, and I bring that field reality into every online session."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
