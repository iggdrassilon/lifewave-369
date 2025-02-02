import React from 'react';
import { motion } from 'framer-motion';

const SpaceLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-blue-400/20"
          style={{
            width: '100%',
            top: `${20 + i * 15}%`,
            left: '-100%',
          }}
          animate={{
            x: ['0%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`vertical-${i}`}
          className="absolute w-[1px] bg-blue-400/20"
          style={{
            height: '100%',
            left: `${20 + i * 15}%`,
            top: '-100%',
          }}
          animate={{
            y: ['0%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.7,
          }}
        />
      ))}
    </div>
  );
};

export default SpaceLines;