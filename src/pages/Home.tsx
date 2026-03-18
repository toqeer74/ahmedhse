import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Video, ChevronRight, Award, ShieldCheck, Users, HelpCircle, Sparkles } from 'lucide-react';
import { trainerInfo, courses, experience, faqs } from '../data/siteData';
import { generateImage } from '../services/imageService';

const Home = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const prompt = "A stunning, hyper-realistic 3D render of a futuristic industrial safety helmet floating in a void of emerald light. The helmet has a glowing visor showing safety analytics. Cinematic lighting, 8k resolution, ultra-modern, eye-catchy, safety-first aesthetic.";
        const img = await generateImage(prompt, "4:5");
        setHeroImage(img);
      } catch (error) {
        console.error("Failed to generate hero image:", error);
      } finally {
        setLoadingImage(false);
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full mb-4"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">Excellence in Safety Training</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.85] mb-1 tracking-tighter">
                MASTER <br />
                <span className="text-emerald-500">SAFETY</span> <br />
                EXCELLENCE
              </h1>
              
              <p className="text-slate-400 text-xl md:text-2xl mb-8 max-w-xl leading-relaxed font-medium">
                Expert-led safety training designed for the modern industrial landscape. Join <span className="text-white font-black">Ahmed Khurshid</span> for interactive, field-proven HSE education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${trainerInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 transition-all shadow-2xl shadow-emerald-600/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Start Training</span>
                </motion.a>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/courses"
                    className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 transition-all group"
                  >
                    <span>Browse Courses</span>
                    <ChevronRight className="w-6 h-6 group-hover:text-emerald-500 transition-colors" />
                  </Link>
                </motion.div>
              </div>

              <div className="mt-16 flex items-center space-x-6 pt-16 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/safety_student_${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm font-black uppercase tracking-widest">
                  <span className="text-white">500+</span> Professionals Trained
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5] max-w-[500px] mx-auto lg:ml-auto">
                {loadingImage ? (
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  <img 
                    src={heroImage || "https://picsum.photos/seed/safety_hero/800/1000"} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Master Safety Excellence"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-500 p-3 rounded-2xl">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-black text-lg">NEBOSH IGC</p>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Certified Excellence</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Meet Your <span className="text-emerald-500">Trainer</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
                {trainerInfo.summary}
              </p>
              <div className="grid grid-cols-2 gap-12 mb-12 border-y border-slate-800 py-10">
                <div className="space-y-2">
                  <p className="text-emerald-500 font-black text-5xl">5+</p>
                  <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-emerald-500 font-black text-5xl">15+</p>
                  <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">HSE Topics</p>
                </div>
              </div>
              <Link to="/about" className="group inline-flex items-center space-x-3 text-emerald-500 font-black text-lg hover:text-emerald-400 transition-colors">
                <span>Learn more about Ahmed</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Certified Expert", desc: "NEBOSH, IOSH, and OSHA qualified trainer." },
                { icon: Video, title: "Live Sessions", desc: "Interactive training via Google Meet.", offset: true },
                { icon: MessageCircle, title: "Direct Support", desc: "24/7 guidance through WhatsApp." },
                { icon: Users, title: "Practical Focus", desc: "Real field experience from major projects.", offset: true }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-slate-900/50 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-800 hover:border-emerald-500/30 transition-all group ${item.offset ? 'lg:mt-12' : ''}`}
                >
                  <div className="bg-emerald-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                    <item.icon className="w-7 h-7 text-emerald-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-white font-black text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Popular <span className="text-emerald-500">Training</span> Topics</h2>
              <p className="text-slate-400 text-xl font-medium">Choose from a variety of safety courses designed for different industries and professional levels.</p>
            </div>
            <Link to="/courses" className="group inline-flex items-center space-x-3 bg-slate-900 border border-slate-800 text-white px-8 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all">
              <span>View All Courses</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 6).map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] hover:border-emerald-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors" />
                
                <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors">
                  <course.icon className="w-8 h-8 text-emerald-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">{course.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">{course.description}</p>
                <Link to="/courses" className="inline-flex items-center space-x-2 text-emerald-500 font-black group/link">
                  <span className="text-sm uppercase tracking-widest">Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-emerald-600 skew-y-[-2deg] origin-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">How It <span className="text-emerald-950/40">Works</span></h2>
            <p className="text-emerald-50 text-xl md:text-2xl max-w-2xl mx-auto font-medium">Simple steps to start your professional safety training journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Contact on WhatsApp", desc: "Reach out to discuss your training goals and requirements." },
              { step: "02", title: "Discuss Needs", desc: "We'll tailor a training plan that fits your schedule and level." },
              { step: "03", title: "Attend Live Session", desc: "Join interactive classes on Google Meet with expert guidance." },
              { step: "04", title: "Get Support", desc: "Receive ongoing learning support and certification guidance." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="text-emerald-400/40 text-8xl font-black mb-6 group-hover:text-emerald-300/50 transition-colors leading-none tracking-tighter">{item.step}</div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-emerald-50/90 text-lg font-medium leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-6 w-12 h-px bg-emerald-400/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Field <span className="text-emerald-500">Experience</span></h2>
              <p className="text-slate-400 text-xl font-medium">Ahmed has worked on major onshore and offshore oil facilities and industrial projects across Saudi Arabia.</p>
            </div>
            <Link to="/experience" className="group inline-flex items-center space-x-3 text-emerald-500 font-black text-lg">
              <span>View All Projects</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {experience.slice(0, 2).map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 p-12 rounded-[3rem] relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <ShieldCheck className="w-40 h-40 text-white" />
                </div>
                <div className="text-emerald-500 font-black text-xs mb-4 uppercase tracking-[0.3em]">{exp.duration}</div>
                <h3 className="text-3xl font-black text-white mb-8 leading-tight">{exp.project}</h3>
                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="bg-slate-800/80 px-4 py-2 rounded-xl text-xs text-slate-200 font-bold border border-white/5">Company: {exp.company}</div>
                  <div className="bg-slate-800/80 px-4 py-2 rounded-xl text-xs text-slate-200 font-bold border border-white/5">Contractor: {exp.contractor}</div>
                </div>
                <ul className="space-y-5">
                  {exp.responsibilities.slice(0, 3).map((res, i) => (
                    <li key={i} className="flex items-start space-x-4 text-slate-400 text-base font-medium">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Condensed Section */}
      <section className="py-32 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Common <span className="text-emerald-500">Questions</span></h2>
              <p className="text-slate-400 text-xl font-medium">Quick answers to the most frequent inquiries about our HSE training programs.</p>
            </div>
            <Link to="/faq" className="group inline-flex items-center space-x-3 text-emerald-500 font-black text-lg">
              <span>View All FAQs</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.slice(0, 4).map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-10 rounded-[2.5rem] hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-500/10 p-3 rounded-2xl shrink-0 group-hover:bg-emerald-500 transition-colors">
                    <HelpCircle className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-4 leading-tight">{faq.question}</h3>
                    <p className="text-slate-400 text-base leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(16,185,129,0.2)]"
          >
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-black/20 blur-[100px] rounded-full -ml-20 -mb-20" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">Ready to Lead <br />with <span className="text-emerald-950/40">Safety?</span></h2>
                <p className="text-emerald-50 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                  Join hundreds of students and professionals who have built their safety knowledge with AhmedHSE. Your career transformation starts here.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${trainerInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-900 px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl"
                  >
                    Chat on WhatsApp
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-emerald-950 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-black transition-all border border-white/10"
                    >
                      Contact Ahmed
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
