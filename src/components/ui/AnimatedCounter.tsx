import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Counter from './counter';

const AnimatedCounter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
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
  }, [endValue, duration]);

  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100 * circumference);

  return (
    <div style={{ position: 'relative', width: '220px', height: '220px' }}>
      <svg width="220" height="220">
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth="20"
          r={radius}
          cx="110"
          cy="110"
        />
        <motion.circle
          stroke="#4caf50"
          fill="transparent"
          strokeWidth="20"
          r={radius}
          cx="110"
          cy="110"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transition={{ duration: 0.5 }}
        />
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Counter value={count} />
      </div>
    </div>
  );
};

export default AnimatedCounter;
