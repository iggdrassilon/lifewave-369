import React, { useEffect, useState } from 'react';
import { MotionSection } from '../../layouts/motionLayout';
import useLang from '@/src/hooks/use-lang';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"

const HowToUse = () => {
  const content = useLang().CONTENT
  const [ref, inView] = useInView();
  const [state, setState] = useState(false)

  useEffect(() => {
    if (inView) {
      setState(true)
    }
  }, [inView]);

  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='container mx-auto px-0 py-2'
    >
      <div className='relative flex md:flex-row flex-col items-center' style={{ border: '1px solid red'}}>
        <div className='relative w-full md:h-[500px] h-[500px] xl:h-[600px]'>
          <img
            src="/images/patch_place_guy.png" 
            alt="human accupuncture" 
            className="w-auto h-full object-contain" 
            style={{ border: '1px solid green'}}
          />
        </div>
        <div ref={ref} className='min-h-[300px] md:min-h-[500px] w-[100%] md:w-[60%] flex justify-center' style={{ border: '1px solid blue'}}>
          <div className='overflow-hidden xl:w-[calc(100%-100px)] xl:m-[50px] m-[20px] sm:w-[523px] w-[calc(100%-40px)]' style={{ border: '1px solid yellow'}}>
            {Object.values(content.home.howTo).map((value: string, index: number) => (
              <motion.div
                initial={{ opacity: 0, translateX: '300px' }}
                animate={{
                  opacity: state ? 1 : 0,
                  translateX: state ? 0 : '300px'
                }}
                transition={{ duration: 0.8, delay: 1 * index }}
                className="flex justify-start items-center h-[90px] md:h-[100px] text-description md:text-xl text-base sm:text-lg"
                style={{ border: '1px solid mangeta'}}
              >
                <text>{value}</text>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export default HowToUse;
