import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer'

import { MotionSection, MotionText } from "@/src/components/layouts/motionLayout"

import useLang from "@/src/hooks/use-lang"

import { motion } from 'framer-motion'
import { BlueRotatedFlower } from '@/src/components/ui/sacralGeometry';
import VideoLayout from '@/src/components/layouts/VideoLayout';

const WeKnow = () => {
  const content = useLang().CONTENT
  const { ref, inView } = useInView({ threshold: 0.1 })
  const videoRef = useRef(null);
  const [state, setState] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true);
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
      if (inView) {
        setState(true)
        videoElement.play();
      } else {
        // setState(false)
        videoElement.pause();
      }
    }
  }, [inView]);

  const completeAnimation = () => {
    setIsAnimating(false);
  };

  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='container mx-auto px-0 py-2'
    >
      <>
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat relative overflow-hidden"
          style={{
            position: 'relative',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <VideoLayout 
            videoRef={videoRef} 
            opacity='30'
            link='/video/human_meridians_rotate.mp4'
            cover={false}
          />
          <div className='relative h-[350px] w-[450px] md:w-[598px] flex items-start flex-col justify-between '>
            <div className="relative z-10 text-center">
              {state && Object.values(content.home.weknow).map((word: string, index: number) => (
                <MotionText className="text-3xl font-bold text-center mb-8 text-title" variants={textVariants} height_initial={80} height_viewported={0} duration={4 * Number(`0.${index + 1}`)} delay={3 * Number(`0.${index + 3}`)} once={false} complete={completeAnimation}>
                  <span>{word}</span>
                </MotionText>
              ))}
            </div>
            <div className="relative z-10 text-center">
              {state && !isAnimating && Object.values(content.home.our).map((word: string, index: number) => (
                <MotionText className="text-3xl font-black text-center mb-8 text-title" variants={textVariants} height_initial={80} height_viewported={0} duration={4 * Number(`0.${index + 1}`)} delay={3 * Number(`0.${index + 3}`)} once={false} complete={completeAnimation}>
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
