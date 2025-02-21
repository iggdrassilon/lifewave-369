/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer"
import { motion } from 'framer-motion'

import { MotionSection } from '@/src/components/layouts/motionLayout'
import VideoLayout from '@/src/components/layouts/VideoLayout'

import usePublic from '@/src/hooks/use-lang'
import GridSection from '../../../layouts/GridSection'
import { cn } from '@/src/lib/utils'

import './style.css'

const HowToUse = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS

  const videoRef = useRef<HTMLVideoElement>(null)

  const [ ref, inView ] = useInView()

  const [ gridRef, gridInView ] = useInView({
    triggerOnce: true
  })

  const [ status, setStatus ] = useState(false)
  const [ state, setState ] = useState(false)
  const [sectionMounted, setSectionMounted] = useState(false)

  const bgElemsColor = 'bg-neutral-200/60 rounded-xl'
  const shadowElems = 'shadow-[0_4px_15px_rgba(0,0,0,0.4)]'
  const textColor = 'titles'
  const fontParams = 'md:text-xl text-base font-bold sm:text-lg'

  const motionSetup = {
    init: {
      opacity: 1,
      translateX: '0',
      translateY: '0'
    },
    animate: {
      opacity: 1,
      translateX: '0',
      translateY: '0'
    },
    transition: {
      duration: 0,
      delay: 0
    }
  }

  useEffect(() => {
    if (inView) {
      setState(true)
    }
    if (videoRef.current) {
      if (inView && sectionMounted) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [inView, sectionMounted])

  useEffect(() => {
    if (gridInView) {
      console.log('HOWTOUSE SHOWED!')
      setStatus(true)
    }
  }, [gridInView])

  return (
    <MotionSection
      height_initial={80}
      opacity_initial={0}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      style={{}}
      ref={gridRef}
      className='mx-auto px-0 py-0 x-clip'
      sectionMounted={() => setSectionMounted(true)}
    >
      {status && (
        <>
          <GridSection
            ref={ref}
            imageOnRight={true}
            customClasses={{
              header: '',
              body: '',
              wrapper: cn(
                'pt-2'
              )
            }}
            title={null}
            description={null}
            image={{
              src: '/images/patch_place_guy.png',
              alt: 'human accupuncture',
              artefact: '',
              customCl: cn(
                shadowElems,
                bgElemsColor,
                'm-4 md:m-'
              ),
              motion: motionSetup
            }}
            content={{
              text: (
                Object.values(content.home.howTo).map((value: string, index: number) => (
                  <motion.div
                    initial={{ opacity: 0, translateX: '300px' }}
                    animate={{
                      opacity: state ? 1 : 0,
                      translateX: state ? 0 : '300px'
                    }}
                    transition={{ duration: 0.8, delay: 1 * index }}
                    className={cn(
                      "max-w-[800px] min-w-[60%] md:min-w-[40%] h-[auto] p-3",
                      "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
                      `flex justify-start items-center`,
                      `${fontParams} text-${textColor} text-description align-baseline`,
                      `${bgElemsColor} ${shadowElems} backdrop-blur-sm`,
                    )}
                    key={index}
                  >
                    <text>{value}</text>
                  </motion.div>
                ))
              ),
              motion: motionSetup
            }}
          />
          <VideoLayout
            preview={links.previews.howToUse}
            link={links.videos.howToUse}
            opacity='10'
            customClass=''
            videoRef={videoRef}
            cover={true}
          />
        </>
      )}
    </MotionSection>
  )
}

export default HowToUse