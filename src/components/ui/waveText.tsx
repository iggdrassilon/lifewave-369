import { ReactNode, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const WaveText = ({ text, color }: { text: string, color: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`flex text-2xl overflow-hidden ${color}`}>
      {Array.from(text).map((char: string, index: number) => (
        <span
          key={index}
          className={`text-4xl md:text-4xl font-bold transition-opacity duration-500 ${startAnimation ? 'animate-ferrari opacity-100' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 5}ms` }}
        >
          {char === ' ' ? '\u00A0' : char} {/* Неразрывный пробел */}
        </span>
      ))}
    </div>
  );
};

export default WaveText;