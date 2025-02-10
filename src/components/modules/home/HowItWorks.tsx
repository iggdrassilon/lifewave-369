/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { MotionSection } from '../../layouts/motionLayout';
import useLang from '@/src/hooks/use-lang';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import VideoLayout from '../../layouts/VideoLayout';
import TextAnimated from '../../ui/textAnimations';
import VideoSection from './VideoSection';

const HowItWorks = () => {
  const content = useLang().CONTENT
  const videoRef = useRef<any>()

  const bgElemsColor = 'bg-neutral-200/60'
  const shadowElems = '0 4px 15px rgba(0,0,0, .4)'
  const textColor = 'titles'

  const [ ref, inView ] = useInView();
  const refVideo = useRef()
  const [ state, setState ] = useState(false)
  const [sectionMounted, setSectionMounted] = useState(false)

  useEffect(() => {
    if (inView && sectionMounted) {
      setState(true)
    }
  }, [inView, sectionMounted]);

  return (
    <MotionSection
      height_initial={80}
      opacity_initial={0}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='mx-auto px-0 py-0'
      sectionMounted={() => setSectionMounted(true)}
    >
      <>
        <div className='text-center mt-10 mb-8 text-sm flex items-center justify-center'>
          <TextAnimated text={`${content.home.howitworks}`} color="text-title" textSizes='text-3xl md:text-3xl' delay={0.3} duration={0.1} space={0.1} mode='slide-left' />
        </div>
        <div className='container relative flex flex-col-reverse justify-around md:flex-row items-center'
          // style={{ border: '1px solid red'}}
        >
          <div className={`relative w-[100%] md:w-[40%] md:h-[100%] ${bgElemsColor} rounded-xl backdrop-blur-sm max-w-[400px] min-w-[60%] md:min-w-[0] md:max-w-[400px] my-10`}
            style={{ 
              boxShadow: shadowElems, 
              // border: '1px solid red' 
            }}
            
          >
            <VideoSection
              title=''
              ref={videoRef}
              videoUrl='https://www.youtube.com/embed/lMESLSNnauA?feature=oembed'
            />
          </div>
          <div ref={ref} className='overflow-hidden min-h-[300px] md:min-h-[500px] w-[100%] md:w-[60%] flex justify-center' 
            // style={{ border: '1px solid blue'}}
          >
            <div className='relative flex flex-col items-center justify-center gap-5 xl:w-[calc(100%-100px)] xl:m-[50px] m-[20px] sm:w-[523px] w-[calc(100%-40px)] space-y-4' 
              // style={{ border: '1px solid yellow'}}
            >
              {Object.values(content.home.aboutX39).map((value: string, index: number) => (
                <motion.div
                  initial={{ opacity: 0, translateX: '300px' }}
                  animate={{
                    opacity: state ? 1 : 0,
                    translateX: state ? 0 : '300px'
                  }}
                  transition={{ duration: 0.8, delay: 1 * index }}
                  className={`flex justify-start items-center text-description md:text-base text-base sm:text-sm text-${textColor}  align-baseline left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-[800px] min-w-[60%] md:min-w-[40%] h-[auto] ${bgElemsColor} rounded-xl backdrop-blur-sm p-3`}
                  style={{ 
                    // border: '1px solid mangeta', 
                    boxShadow: shadowElems
                  }}
                >
                  <text>{value}</text>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
        {/* <VideoLayout
          link='/video/source_of_light.mp4'
          opacity='10'
          videoRef={videoRef}
          cover={true}
        /> */}
      </>
    </MotionSection>
  );
}

export default HowItWorks
