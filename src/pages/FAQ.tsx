import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data/siteData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="bg-slate-950 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </motion.h1>
          <p className="text-slate-400 text-lg">
            Everything you need to know about our HSE training programs and delivery.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <HelpCircle className={`w-5 h-5 ${activeIndex === idx ? 'text-emerald-500' : 'text-slate-500'}`} />
                  <span className="text-white font-bold">{faq.question}</span>
                </div>
                {activeIndex === idx ? (
                  <Minus className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-emerald-600/10 border border-emerald-500/20 p-10 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8">If you couldn't find the answer you're looking for, feel free to reach out to Ahmed directly.</p>
          <a
            href="https://wa.me/966554190254"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-all inline-block"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
