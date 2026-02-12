
import React from 'react';
import { motion } from 'framer-motion';
import { MOMENTS_DATA } from '../constants.tsx';
import { Quote } from 'lucide-react';

export const Moments: React.FC = () => {
  return (
    <section id="moments" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-romantic font-bold text-pink-600 mb-4">Little Things</h2>
          <p className="text-gray-500">The small whispers of love that mean everything.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOMENTS_DATA.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
              className={`${note.color} p-10 rounded-[2rem] shadow-sm border border-black/5 relative overflow-hidden flex flex-col justify-between`}
            >
              <Quote size={40} className="text-pink-200 absolute -top-2 -left-2 rotate-12" />
              <p className="text-2xl font-romantic text-gray-700 leading-relaxed mb-6 italic">
                "{note.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2px] bg-pink-300"></div>
                <span className="text-pink-400 font-bold uppercase tracking-widest text-xs">With Love, {note.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
