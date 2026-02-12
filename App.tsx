
import React, { useState, useEffect } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Moments } from './components/Moments';
import { MusicPlayer } from './components/MusicPlayer';
import { LoveLetter } from './components/LoveLetter';
import { PoemGenerator } from './components/PoemGenerator';
import { Heart, Music, Camera, BookHeart, MessageCircleHeart, History } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundMusic } from "./components/BackgroundMusic";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F9] text-gray-800 selection:bg-pink-200 selection:text-pink-900">
      <FloatingHearts />
      
      {/* Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${scrolled ? 'w-[95%] md:w-auto' : 'w-full px-6'}`}>
        <div className={`mx-auto flex items-center justify-between md:justify-center gap-2 md:gap-8 px-4 md:px-10 py-4 rounded-full backdrop-blur-lg border border-white/40 shadow-lg ${scrolled ? 'bg-white/70' : 'bg-transparent shadow-none border-transparent'}`}>
          <a href="#home" className="p-2 hover:bg-pink-50 rounded-full transition-colors text-pink-500 font-bold hidden md:block">
            <Heart size={24} />
          </a>
          <div className="flex items-center gap-1 md:gap-6">
            <NavLink href="#story" icon={<History size={18} />} label="Story" />
            <NavLink href="#gallery" icon={<Camera size={18} />} label="Gallery" />
            <NavLink href="#moments" icon={<BookHeart size={18} />} label="Moments" />
            <NavLink href="#music" icon={<Music size={18} />} label="Music" />
            <NavLink href="#letter" icon={<MessageCircleHeart size={18} />} label="Letter" />
          </div>
          <div className="p-2 bg-pink-100 rounded-full md:hidden">
            <Heart size={18} className="text-pink-500" fill="currentColor" />
          </div>
        </div>
      </nav>

      <main>
        <BackgroundMusic/>
        <Hero />
        <Timeline />
        <Gallery />
        <Moments />
        {/* <PoemGenerator /> */}
        <MusicPlayer />
        <LoveLetter />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-pink-50 text-center">
        <div className="flex justify-center gap-4 mb-6">
          <Heart className="text-pink-200" fill="currentColor" />
          <Heart className="text-pink-300" fill="currentColor" />
          <Heart className="text-pink-400" fill="currentColor" />
        </div>
        <p className="text-gray-400 font-medium">Made with all my heart &copy; 2026</p>
        <p className="text-pink-300 font-romantic text-xl mt-2">Forever & Always</p>
      </footer>
    </div>
  );
};

const NavLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-full hover:bg-pink-100 transition-all text-gray-600 hover:text-pink-600 font-semibold text-sm md:text-base group"
  >
    <span className="text-pink-400 group-hover:scale-110 transition-transform">{icon}</span>
    <span className="hidden sm:inline">{label}</span>
  </a>
);

export default App;
