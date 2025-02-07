import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from './counter';

const AnimatedCounter = ({ endValue, duration, color, radius, sizeBox }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% видимости
  });

  useEffect(() => {
    if (!inView) return; // Если не в области видимости, не запускать анимацию

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
      ref={ref} // Добавляем ref для отслеживания видимости
      className='flex items-center justify-center'
      style={{ position: 'relative', width: `${sizeBox}`, height: `${sizeBox}` }}
    >
      <svg width={`${sizeBox}`} height={`${sizeBox}`}>
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth="10"
          r={rd}
          cx="110"
          cy="110"
        />
        <motion.circle
          stroke={`${color}`}
          fill="transparent"
          strokeWidth="10"
          r={rd}
          cx="110"
          cy="110"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transition={{ duration: 0.1 }}
        />
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Counter value={Math.round(count)} color={color} /> {/* Применяем округление к значению */}
      </div>
    </div>
  );
};

export default AnimatedCounter;
