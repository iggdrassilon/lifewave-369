import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from './counter';

const AnimatedCounter = ({ endValue, duration, color, radius, sizeBox, delay }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 1, // 100%
    delay
  });

  useEffect(() => {
    if (!inView) return;

    const increment = (endValue / duration) * 50;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= endValue) {
          clearInterval(interval);
          return endValue;
        }
        return Math.min(prev + increment, endValue);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [endValue, duration, inView]);

  const rd = radius;
  const circumference = 2 * Math.PI * rd;
  const offset = circumference - (count / 100 * circumference);

  return (
    <div
      ref={ref}
      className='flex items-center justify-center'
      style={{ 
        position: 'relative',
        width: sizeBox,
        height: sizeBox,
        // border: '1px solid red' 
      }}
    >
      <svg width={sizeBox} height={sizeBox} className='absolute'
        style={{ 
          top: '20%', 
          left: '20%', 
          // transform: 'translate(-50%, -50%)', 
          textAlign: 'center'
        }}
      >
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth="8"
          r={rd}
          cx={rd + 4}
          cy={rd + 4}
        />
        <motion.circle
          stroke={color}
          fill="transparent"
          strokeWidth="8"
          r={rd}
          cx={rd + 4}
          cy={rd + 4}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${rd + 4} ${rd + 4})`}
          transition={{ duration: 0.1 }}
        />
      </svg>
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center'
        }}
      >
        <Counter value={Math.round(count)} color={color} />
      </div>
    </div>
  );
};
export default AnimatedCounter;
