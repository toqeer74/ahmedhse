import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "Mohammad Ali",
    role: "Safety Officer Trainee",
    content: "Ahmed's NEBOSH training was exceptional. He explains complex safety concepts with real-world examples from his own field experience. Highly recommended for anyone serious about HSE.",
    rating: 5
  },
  {
    name: "Sarah Khan",
    role: "HR Manager",
    content: "We booked a corporate session for our team on Fire Safety and First Aid. The Google Meet session was interactive and very informative. Our staff felt much more confident afterward.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Construction Supervisor",
    content: "The OSHA 30-hour training helped me understand site hazards much better. Ahmed is very patient and the WhatsApp support after the sessions is a huge plus.",
    rating: 5
  },
  {
    name: "Abdullah Al-Otaibi",
    role: "Student",
    content: "I was preparing for my IOSH exam and Ahmed's guidance was exactly what I needed. He knows the curriculum inside out and focuses on what actually matters in the field.",
    rating: 5
  },
  {
    name: "Imran Ahmed",
    role: "HSE Professional",
    content: "Even as an experienced professional, I found Ahmed's session on ISO 14001 very refreshing. His knowledge of Saudi Arabian safety standards is impressive.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Student <span className="text-emerald-500">Success Stories</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hear from the students and companies who have advanced their safety knowledge through our training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-slate-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-slate-900/50 border border-slate-800 p-12 rounded-3xl inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Are you a former student?</h3>
            <p className="text-slate-400 mb-8">We'd love to hear about your experience and how the training helped your career.</p>
            <a
              href="https://wa.me/966554190254?text=I'd like to leave a testimonial for my training."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 font-bold hover:underline"
            >
              Share your story on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
