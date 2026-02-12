
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Heart } from 'lucide-react';

export const PoemGenerator: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePoem = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    setPoem('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Write a short, beautiful, and cute romantic poem or love note (max 4 lines) for a Valentine's gift based on this keyword: ${keyword}. Make it feel dreamy and heartwarming.`,
        config: {
          temperature: 0.8,
          topP: 0.9,
        },
      });

      setPoem(response.text || "You are the melody that makes my heart dance with joy.");
    } catch (error) {
      console.error("AI Error:", error);
      setPoem("In every heartbeat, I find a new reason to love you even more.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-pink-50/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-pink-100 rounded-full">
              <Sparkles className="text-pink-500" size={32} />
            </div>
          </div>
          
          <h2 className="text-3xl font-romantic font-bold text-gray-800 mb-4">AI Love Muse</h2>
          <p className="text-gray-600 mb-8">Type a word that reminds you of us, and I'll whisper a poem...</p>

          <div className="flex gap-2 mb-8">
            <input 
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. Sunset, Coffee, Rain..."
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-pink-100 focus:border-pink-300 outline-none transition-all"
            />
            <button
              onClick={generatePoem}
              disabled={loading}
              className="px-8 py-4 bg-pink-400 hover:bg-pink-500 text-white rounded-2xl transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? "Thinking..." : <Send size={20} />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {poem && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 bg-pink-50 rounded-2xl border-2 border-dashed border-pink-200 relative"
              >
                <Heart className="absolute -top-3 -right-3 text-pink-400 fill-current" size={24} />
                <p className="text-xl font-romantic text-pink-800 leading-relaxed italic whitespace-pre-wrap">
                  {poem}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
