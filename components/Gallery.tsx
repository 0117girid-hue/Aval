
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_DATA } from '../constants.tsx';
import { X, Heart } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-pink-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-romantic font-bold text-pink-600 mb-4">Capturing Moments</h2>
          <p className="text-gray-500 italic">"Pictures tell the story our words can't always describe."</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_DATA.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(item.url)}
              className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg group"
            >
              <img 
                src={item.url} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <Heart className="text-white mb-2" fill="currentColor" size={24} />
                  <p className="text-white font-bold text-xl">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-pink-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
