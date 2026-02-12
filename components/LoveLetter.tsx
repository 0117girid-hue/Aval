
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const letterContent = `My Dearest,

hiiiiii
Yours always,
Me`;

export const LoveLetter: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < letterContent.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + letterContent[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="letter" className="py-24 px-6 mb-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-12 md:p-20 rounded-3xl shadow-2xl relative border-8 border-white ring-1 ring-pink-100"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-400 p-4 rounded-full shadow-lg">
            <Heart className="text-white fill-current" size={32} />
          </div>

          <div className="font-romantic text-2xl md:text-3xl text-gray-700 leading-loose whitespace-pre-wrap min-h-[400px]">
            {displayText}
            <span className="inline-block w-2 h-8 bg-pink-400 animate-pulse ml-1 align-middle"></span>
          </div>
          
          <div className="mt-12 text-center">
             <motion.div 
               animate={{ scale: [1, 1.2, 1] }} 
               transition={{ duration: 2, repeat: Infinity }}
               className="inline-block"
             >
                <Heart className="text-pink-400" fill="currentColor" size={48} />
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
