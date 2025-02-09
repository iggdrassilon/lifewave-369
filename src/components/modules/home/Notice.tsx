import React, { useEffect, useState } from 'react';
import { MotionSection } from '../../layouts/motionLayout';
import useLang from '@/src/hooks/use-lang';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const Notice = () => {
  const content = useLang().CONTENT
  const text = content.home.notice;

  const [ref, inView] = useInView();

  const [state, setState] = useState(false)
  const [displayedText, setDisplayedText] = useState('');
  // BUG IN 0 SYMBOL RENDERING
  useEffect(() => {
    setDisplayedText('')
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length && state) {
        setDisplayedText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [text, state]);

  useEffect(() => {
    if (inView) {
      setState(true)
    }
  }, [inView]);

  return (
    <MotionSection
      height_initial={0}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='mx-auto px-0 py-0 overflow-hidden'
    >
      <div className='relative'>
        <div className='bg-blue-700 max-h-[600px]'>
          <img
            src="/images/blue_waves_background.jpg"
            alt="blue matrix background" 
            className="opacity-80 hue-rotate-30 w-[100%] h-auto object-cover bg-cover" 
          />
          <div className='absolute top-0 w-[100%] h-[100%]' 
            style={{ 
              background: 'linear-gradient(to bottom, rgba(250,120,250, .3), rgba(0,0,0, .0), rgba(0,0,0, .0), black), radial-gradient(circle, rgba(250,120,250, .0), rgba(0,0,0, .0), rgba(0,0,0, .0), black)',
            }}
          ></div>
        </div>
        <div ref={ref} className="absolute text-white align-baseline text-sm/4 sm:text-base/5 md:text-xl/5 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-[800px] min-w-[63%] md:min-w-[40%] xl:min-w-[400px] min-h-[10%] sm:min-h-[20%] md:min-h-[10%] h-[auto] bg-slate-600/30 rounded-xl backdrop-blur-sm p-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: state && 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            id="notice"
            style={{ textAlign: "left" }}
          >
            {displayedText}
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}

export default Notice;