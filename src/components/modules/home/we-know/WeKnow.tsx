import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { MotionSection, MotionText } from "@/src/components/layouts/motionLayout"

import { BlueRotatedFlower } from '@/src/components/ui/sacralGeometry'

import VideoLayout from '@/src/components/layouts/VideoLayout'
import usePublic from '@/src/hooks/use-lang'

import './style.css'

const WeKnow = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS

  const { ref, inView } = useInView({ threshold: 0.1 })  
  const videoRef = useRef(null)

  const [state, setState] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)
  const [sectionMounted, setSectionMounted] = useState(false)
  
  // TEXT
  const shadowElems = '0 2px 5px rgba(0,0,0, .3)'
  // const textColor = 'text-pink-700/90'
  const textColor = 'text-black/90'
  const bgRules = 'bg-neutral-100/60 rounded-xl backdrop-blur-sm'
  const text = 'text-2xl/tight'

  // if need this use global state for set position
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth * 0.8,
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
  }

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
  }

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      if (inView && sectionMounted) {
        setState(true)
        videoElement.play()
      } else {
        // setState(false)
        videoElement.pause()
      }
    }
  }, [inView, sectionMounted])

  const completeAnimation = () => {
    setIsAnimating(false)
  }

  return (
    <MotionSection
      height_initial={0}
      height_viewported={0}
      opacity_initial={1}
      duration={0}
      delay={0}
      once={true}
      className='container z-0 mx-auto px-0'
      sectionMounted={() => setSectionMounted(true)}
    >
      <>
        <motion.div
          ref={ref}
          initial="visible"
          animate="visible"
          className="flex items-center justify-center bg-cover bg-no-repeat relative"
          style={{
            position: 'relative',
            // padding: '20px',
            borderRadius: '10px',
          }}
        >
          {/* <VideoLayout 
            preview={links.previews.weKnow}
            videoRef={videoRef} 
            opacity='30'
            customClass=''
            link={links.videos.weKnow}
            cover={true}
          /> */}
          <div className='relative w-[450px] md:w-[100%] flex mt-[200px] flex-col justify-center items-center px-[20px] md:px-0'>  
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`relative z- overflow-hidden p-[50px]`}
              style={{
                // borderTop: '1px solid rgba(1,1,1,.2)',
                // borderBottom: '1px solid rgba(1,1,1,.2)'
                // boxShadow: shadowElems
              }}
            >
              {/* {Object.values(content.home.weknow).map((word: string, index: number) => (
                <MotionText key={index} className={`${text} mb-8 ${textColor}`} variants={textVariants} height_initial={80} height_viewported={0} duration={index * 0.3} delay={index * 0.3} once={false} complete={completeAnimation}>
                  <span>{word}</span>
                </MotionText>
              ))} */}
              {/* <text className={`${text} mb-8 ${textColor} flex text-center`} dangerouslySetInnerHTML={{ __html: content.home.weknow.we }}></text> */}
            </motion.div>
            {/* <div className='absolute top-[150px] w-[100%] items-center flex justify-center'>
              <BlueRotatedFlower />
            </div> */}
          </div>
        </motion.div>
      </>
    </MotionSection>
  )
}

export default WeKnow
