import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer'

import { MotionSection, MotionText } from "@/src/components/layouts/motionLayout"

import useLang from "@/src/hooks/use-lang"

import { motion } from 'framer-motion'
import { BlueRotatedFlower } from '@/src/components/ui/sacralGeometry';
import VideoLayout from '@/src/components/layouts/VideoLayout';
import Card3D from '../Card3D';

const WeKnow = () => {
  const content = useLang().CONTENT
  const { ref, inView } = useInView({ threshold: 0.1 })
  
  const videoRef = useRef(null);

  const [state, setState] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true);
  const [sectionMounted, setSectionMounted] = useState(false)
  
  // TEXT
  const shadowElems = '0 2px 5px rgba(0,0,0, .3)'
  const textColor = 'text-pink-700/90'

  // if need this use global state for set position
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth * 0.9,
    y: window.innerHeight * 0.5,
  })

  const variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    },
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (inView && sectionMounted) {
        setState(true)
        videoElement.play();
      } else {
        // setState(false)
        videoElement.pause();
      }
    }
  }, [inView, sectionMounted]);

  const completeAnimation = () => {
    setIsAnimating(false);
  };

  return (
    <MotionSection
      height_initial={0}
      height_viewported={0}
      opacity_initial={1}
      duration={0}
      delay={0}
      once={true}
      className='container z-0 mx-auto px-0 py-2 mt-[10px]'
      sectionMounted={() => setSectionMounted(true)}
    >
      <>
        <motion.div
          ref={ref}
          initial="visible"
          animate="visible"
          className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat relative"
          style={{
            position: 'relative',
            // padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className='absolute top-[-15%] md:top-[-18%] w-[90vw] max-w-[300px] aspect-video' style={{ 
            // border: '1px solid red' 
          }}>
            <Card3D mousePosition={mousePosition}>
              <div className="layer-1 absolute z-[9999] inset-[0] bg-[url('/public/images/X39-card1.png')] bg-cover bg-no-repeat" />
              <div
                className="layer-2 absolute z-[9999] inset-[0] bg-[url('/public/images/X39-card1.png')] bg-cover bg-no-repeat"
                data-offset='20'
              />
              <div
                className="layer-3 absolute z-[9999] left-[2px] inset-[-10px] bg-[url('/public/images/X39-card1.png')] bg-cover bg-no-repeat"
                data-offset='40'
              />
            </Card3D>
          </div>
          <VideoLayout 
            videoRef={videoRef} 
            opacity='30'
            link='/video/human_meridians_rotate.mp4'
            cover={true}
          />
          <div className='relative h-[350px] w-[450px] md:w-[598px] flex items-center flex-col justify-between px-[20px] md:px-0'>
            <div className="relative z-10 text-center overflow-hidden bg-neutral-100/60 rounded-xl backdrop-blur-sm p-1"
              style={{
                boxShadow: shadowElems
              }}
            >
              {state && Object.values(content.home.weknow).map((word: string, index: number) => (
                <MotionText className={`text-xl/tight font-bold text-center mb-8 ${textColor}`} variants={textVariants} height_initial={80} height_viewported={0} duration={4 * Number(`0.${index + 1}`)} delay={3 * Number(`0.${index + 3}`)} once={false} complete={completeAnimation}>
                  <span>{word}</span>
                </MotionText>
              ))}
            </div>
            <div className="relative z-10 text-center overflow-hidden bg-neutral-100/60 rounded-xl backdrop-blur-sm p-1"
              style={{
                boxShadow: shadowElems
              }}
            >
              {state && !isAnimating && Object.values(content.home.our).map((word: string, index: number) => (
                <MotionText className={`text-xl/tight font-bold text-center mb-8 ${textColor}`} variants={textVariants} height_initial={80} height_viewported={0} duration={4 * Number(`0.${index + 1}`)} delay={3 * Number(`0.${index + 3}`)} once={false} complete={completeAnimation}>
                  <span>{word}</span>
                </MotionText>
              ))}
            </div>
            <div className='absolute top-[150px] w-[100%] items-center flex justify-center'>
              <BlueRotatedFlower />
            </div>
          </div>
        </motion.div>
      </>
    </MotionSection>
  )
}

export default WeKnow
