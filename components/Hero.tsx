
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 inline-block"
        >
          <Heart size={64} fill="#FF8DA1" className="text-pink-400 drop-shadow-xl" />
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-fancy text-pink-500 mb-6 drop-shadow-lg">
          Happy Valentine's Day
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-romantic font-semibold max-w-2xl mx-auto mb-10 opacity-80">
          "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
        </p>

        <div className="flex gap-4 justify-center">
          <motion.a
            href="#story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-pink-400 text-white rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-pink-500 transition-colors"
          >
            Our Story
          </motion.a>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-pink-400 border-2 border-pink-100 rounded-full font-bold shadow-lg hover:border-pink-300 transition-all"
          >
            Memories
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-pink-400 mt-2 rounded-full"></div>
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-peach-100 rounded-full blur-3xl opacity-50 -z-10" />
    </section>
  );
};
