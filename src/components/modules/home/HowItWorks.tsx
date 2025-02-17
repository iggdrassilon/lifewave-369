/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { MotionSection } from '../../layouts/motionLayout';
import useLang from '@/src/hooks/use-lang';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import TextAnimated from '../../ui/textAnimations';
import VideoSection from './VideoSection';
import VideoLayout from '../../layouts/VideoLayout';

const HowItWorks = () => {
  const content = useLang().CONTENT
  const videoRef = useRef<any>()

  const videoSourceLink = 'https://kinescope.io/embed/axnpCT8eeYFrWsPTfQwStr'

  const bgElemsColor = 'bg-neutral-200/60'
  const shadowElems = '0 4px 15px rgba(0,50,250, .4)'
  const textColor = 'titles'
  const fontParams = 'md:text-xl text-base font-normal sm:text-lg '

  const [ ref, inView ] = useInView();
  const [ state, setState ] = useState(false)
  const [sectionMounted, setSectionMounted] = useState(false)

  const refVideo = useRef()

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
      className='container mx-auto px-0 py-0'
      sectionMounted={() => setSectionMounted(true)}
    >
      <>
        <div className='text-center mt-10 text-sm flex items-center justify-center'>
          <TextAnimated text={`${content.home.howitworks}`} color="text-black" textSizes='font-normal text-3xl md:text-5xl' delay={0.3} duration={0.1} space={0.1} mode='slide-left' />
          {/* <div className="absolute select-none -z-[1] top-[-30px] w-[100%] flex justify-center items-center">
            <img src="/images/brush_3.jpg" className="h-[70px] w-[500px]" alt="background" />
          </div> */}
        </div>
        <div className='relative flex flex-col justify-around md:flex-col items-center'
          // style={{ border: '1px solid red'}}
        >
          <div className={`relative w-[calc(100%-40px)] md:w-[60%] md:h-[400px] ${bgElemsColor} rounded-xl backdrop-blur-sm max-w-[400px] min-w-[60%] mt-10`}
            style={{ 
              boxShadow: shadowElems, 
              // border: '1px solid red' 
            }}
            
          >
            <VideoSection
              title='время просмотра 1:22'
              ref={videoRef}
              videoUrl={videoSourceLink}
            />
          </div>
          <h2 className='text-md md:text-md font-normal text-space-dark text-center mb-8 mt-1 overflow-hidden'>
            <text>{content.home.videoTime} 1:22</text>
          </h2>
          <div ref={ref} className='overflow-hidden min-h-[300px] md:min-h-[500px] w-[100%] md:w-[60%] flex justify-center' 
            // style={{ border: '1px solid blue'}}
          >
            <div className='relative text-2xl/tight flex flex-col items-center text-center justify-center gap-5 xl:w-[calc(100%-100px)] xl:m-[50px] my-[20px] md:w-[100%] sm:w-[523px] w-[calc(100%-40px)] space-y-4'
            >
              <div dangerouslySetInnerHTML={{ __html: content.home.aboutX39 }} />
            </div>
          </div>
          
        </div>
        {/* <VideoLayout
          link={videoSourceLink}
          opacity='10'
          videoRef={videoRef}
          cover={true} 
          preview={''}
          customClass={''}
        /> */}
      </>
    </MotionSection>
  );
}

export default HowItWorks
