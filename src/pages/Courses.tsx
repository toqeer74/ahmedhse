import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { courses, trainerInfo } from '../data/siteData';
import { MessageCircle, CheckCircle2, Award } from 'lucide-react';
import { generateImage } from '../services/imageService';

const CourseImage = ({ title }: { title: string }) => {
  const [img, setImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImg = async () => {
      const prompt = `A professional, high-quality industrial safety photo representing ${title}. Clean, modern, professional setting. High resolution, cinematic lighting.`;
      const result = await generateImage(prompt, "16:9");
      setImg(result);
      setLoading(false);
    };
    fetchImg();
  }, [title]);

  if (loading) {
    return <div className="w-full h-48 bg-slate-800 animate-pulse flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>;
  }

  return (
    <div className="w-full h-48 overflow-hidden">
      <img 
        src={img || `https://picsum.photos/seed/${title}/800/450`} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

const Courses = () => {
  return (
    <div className="bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full mb-8"
          >
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">Professional Development</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none"
          >
            HSE Training <span className="text-emerald-500">Courses</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Professional safety training tailored for students, workers, and companies. Delivered online via Google Meet with full WhatsApp support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.8
              }}
              className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col group hover:border-emerald-500/50 hover:shadow-[0_40px_80px_rgba(16,185,129,0.1)] transition-all duration-500"
            >
              <CourseImage title={course.title} />
              <div className="p-10 flex-grow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors" />
                
                <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-500">
                  <course.icon className="w-8 h-8 text-emerald-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-emerald-500 transition-colors">{course.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  {course.description}
                </p>
                
                <div className="space-y-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-500/20 p-1 rounded-lg mt-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    </div>
                    <div>
                      <p className="text-white text-[8px] font-black uppercase tracking-widest mb-0.5">Target Audience</p>
                      <p className="text-slate-400 text-xs font-bold">{course.target}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-500/20 p-1 rounded-lg mt-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    </div>
                    <div>
                      <p className="text-white text-[8px] font-black uppercase tracking-widest mb-0.5">Key Benefits</p>
                      <p className="text-slate-400 text-xs font-bold">{course.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 pt-0 mt-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${trainerInfo.whatsapp}?text=I'm interested in the ${course.title} training.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-black text-base flex items-center justify-center space-x-3 transition-all shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enroll Now</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Training Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter relative z-10">Need Custom <br /><span className="text-emerald-500">Team Training?</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-xl font-medium leading-relaxed relative z-10">
            We provide specialized online safety awareness sessions for corporate teams and industrial workers. Contact us to discuss your company's specific HSE requirements.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${trainerInfo.whatsapp}?text=I want to discuss corporate team training.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-slate-950 px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl relative z-10"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Request Corporate Training</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
