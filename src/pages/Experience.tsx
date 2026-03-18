import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { experience, trainerInfo } from '../data/siteData';
import { Briefcase, Calendar, Building2, CheckCircle2, HardHat, ShieldAlert } from 'lucide-react';
import { generateImage } from '../services/imageService';

const ProjectImage = ({ project }: { project: string }) => {
  const [img, setImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImg = async () => {
      const prompt = `A professional, high-quality industrial safety photo of ${project}. Show industrial facilities, oil rigs, or construction sites with safety protocols in place. High resolution, cinematic lighting.`;
      const result = await generateImage(prompt, "16:9");
      setImg(result);
      setLoading(false);
    };
    fetchImg();
  }, [project]);

  if (loading) {
    return <div className="w-full h-64 bg-slate-800 animate-pulse rounded-3xl mb-8 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  return (
    <div className="w-full h-64 overflow-hidden rounded-3xl mb-8 border border-white/10 group">
      <img 
        src={img || `https://picsum.photos/seed/${project}/1200/600`} 
        alt={project} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

const Experience = () => {
  return (
    <div className="bg-slate-950 pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full mb-8"
          >
            <HardHat className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">Career Journey</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none"
          >
            Field <span className="text-emerald-500">Experience</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            A proven track record of safety excellence in major industrial, oil & gas, and construction projects across Saudi Arabia.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line - Gradient and Animated */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-slate-800 to-slate-900 opacity-30" />

          <div className="space-y-32">
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot with Glow */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 z-10">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
                    <div className="relative w-full h-full bg-emerald-500 rounded-full border-4 border-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'} pl-16 md:pl-0`}>
                    <motion.div 
                      whileHover={{ y: -10 }}
                      className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 md:p-12 rounded-[3rem] hover:border-emerald-500/40 transition-all duration-500 shadow-2xl group relative overflow-hidden"
                    >
                      <ProjectImage project={exp.project} />
                      
                      {/* Decorative Background Icon */}
                      <ShieldAlert className="absolute -right-12 -bottom-12 w-56 h-56 text-emerald-500/5 group-hover:text-emerald-500/10 transition-all duration-700 rotate-12 group-hover:rotate-0" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center space-x-3 text-emerald-500 font-black text-[10px] uppercase tracking-[0.2em] bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="bg-slate-800/50 p-3 rounded-2xl border border-white/5">
                            <Briefcase className="w-6 h-6 text-slate-400" />
                          </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black text-white mb-8 group-hover:text-emerald-500 transition-colors leading-tight tracking-tight">
                          {exp.project}
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                          <div className="bg-slate-800/30 p-5 rounded-2xl border border-white/5">
                            <div className="flex items-center space-x-2 mb-2">
                              <Building2 className="w-4 h-4 text-emerald-500" />
                              <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Company</p>
                            </div>
                            <p className="text-white text-base font-black">{exp.company}</p>
                          </div>
                          <div className="bg-slate-800/30 p-5 rounded-2xl border border-white/5">
                            <div className="flex items-center space-x-2 mb-2">
                              <Briefcase className="w-4 h-4 text-emerald-500" />
                              <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Client</p>
                            </div>
                            <p className="text-white text-base font-black truncate">{exp.contractor || exp.client}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="h-px flex-grow bg-slate-800" />
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Core Impact</p>
                            <div className="h-px flex-grow bg-slate-800" />
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {exp.responsibilities.map((res, i) => (
                              <div key={i} className="flex items-start space-x-4 group/item">
                                <div className="mt-1.5 bg-emerald-500/20 p-1 rounded-lg">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 group-hover/item:scale-110 transition-transform" />
                                </div>
                                <span className="text-slate-400 text-sm leading-relaxed font-bold group-hover/item:text-slate-200 transition-colors">{res}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block md:w-[10%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 text-center"
        >
          <div className="inline-block p-1 rounded-[3rem] bg-gradient-to-r from-emerald-500 to-blue-500 shadow-2xl">
            <div className="bg-slate-950 rounded-[2.9rem] px-16 py-16 md:px-24 md:py-20">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Learn from the <span className="text-emerald-500">Field</span></h3>
              <p className="text-slate-400 mb-12 max-w-xl mx-auto text-xl font-medium leading-relaxed">
                Ahmed brings these real-world insights into every training session. Don't just learn theory—learn how it's done on the ground.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${trainerInfo.whatsapp}`}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-600/20"
                >
                  Discuss Training
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
