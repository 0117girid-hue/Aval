
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartProps {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const HeartElement: React.FC<HeartProps> = ({ x, size, duration, delay }) => {
  return (
    <motion.div
      initial={{ y: '110vh', x: `${x}vw`, opacity: 0, scale: 0 }}
      animate={{ 
        y: '-10vh', 
        opacity: [0, 0.7, 0], 
        scale: [0.5, 1, 0.5],
        rotate: [0, 45, -45, 0]
      }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity,
        ease: "linear" 
      }}
      className="absolute pointer-events-none text-pink-300"
      style={{ left: 0 }}
    >
      <Heart size={size} fill="currentColor" />
    </motion.div>
  );
};

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 15,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <AnimatePresence>
        {hearts.map((heart) => (
          <HeartElement key={heart.id} {...heart} />
        ))}
      </AnimatePresence>
    </div>
  );
};
