import React, { useEffect, useRef, useState } from 'react';
import { MotionSection } from '../../layouts/motionLayout';
import useLang from '@/src/hooks/use-lang';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import VideoLayout from '../../layouts/VideoLayout';

const HowToUse = () => {
  const content = useLang().CONTENT
  const videoRef = useRef()

  const bgElemsColor = 'bg-neutral-200/60'
  const shadowElems = '0 4px 15px rgba(0,0,0, .4)'
  const textColor = 'titles'

  const [ ref, inView ] = useInView();
  const [ state, setState ] = useState(false)

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
      className='mx-auto px-0 py-0'
    >
      <>
        <div className='container relative flex md:flex-row flex-col items-center'
          // style={{ border: '1px solid red'}}
        >
          <div className={`relative w-full md:h-[500px] h-[500px] xl:h-[600px] ${bgElemsColor} rounded-xl backdrop-blur-sm m-5 md:m-5 lg:m-10 p-10 md:p-0 lg:p-10`}
            style={{ boxShadow: shadowElems }}
          >
            <img
              src="/images/patch_place_guy.png" 
              alt="human accupuncture" 
              className="z-10 w-auto h-full object-contain" 
              // style={{ border: '1px solid green'}}
            />
            <div className="absolute top-[-15%] right-[50%] translate-x-[50%] bottom-[0] -z-10 w-[200px] h-[200px] object-contain bg-[url('/public/icons/golden-flower-sacral.svg')] bg-cover bg-no-repeat"></div>
          </div>
          <div ref={ref} className='overflow-hidden min-h-[300px] md:min-h-[500px] w-[100%] md:w-[60%] flex justify-center' 
            // style={{ border: '1px solid blue'}}
          >
            <div className='relative xl:w-[calc(100%-100px)] xl:m-[50px] m-[20px] sm:w-[523px] w-[calc(100%-40px)] space-y-4' 
              // style={{ border: '1px solid yellow'}}
            >
              {Object.values(content.home.howTo).map((value: string, index: number) => (
                <motion.div
                  initial={{ opacity: 0, translateX: '300px' }}
                  animate={{
                    opacity: state ? 1 : 0,
                    translateX: state ? 0 : '300px'
                  }}
                  transition={{ duration: 0.8, delay: 1 * index }}
                  className={`flex justify-start items-center text-description md:text-xl text-base sm:text-lg text-${textColor}  align-baseline left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-[800px] min-w-[60%] md:min-w-[40%] h-[auto] ${bgElemsColor} rounded-xl backdrop-blur-sm p-3`}
                  style={{ border: '1px solid mangeta', boxShadow: shadowElems}}
                >
                  <text>{value}</text>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <VideoLayout
          link='/video/source_of_light.mp4'
          opacity='10'
          videoRef={videoRef}
          cover={true}
        />
      </>
    </MotionSection>
  );
}

export default HowToUse;
