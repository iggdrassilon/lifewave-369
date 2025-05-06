import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { MotionSection } from '@/src/components/layouts/motionLayout'
import VideoLayout from '@/src/components/layouts/VideoLayout'

import usePublic from '@/src/hooks/use-lang'
import GridSection from '../../../layouts/GridSection'
import { cn } from '@/src/lib/utils'

import './style.css'
import TextAnimated from '@/src/components/ui/textAnimations'
import Instructions from './Instructions'
import SubTitle from './SubTitle'
import Title from './Title'

const HowToUse = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS

  const videoRef = useRef<HTMLVideoElement>(null)

  const [ref, inView] = useInView()

  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
  })

  const [refDescr, refDescrInView] = useInView({
    triggerOnce: true,
  })

  const [refDescr2, refDescr2InView] = useInView({
    triggerOnce: true,
  })

  const [status, setStatus] = useState(false)
  const [state, setState] = useState(false)
  const [count, setCount] = useState(0)
  const [sectionMounted, setSectionMounted] = useState(false)

  const bgElemsColor = 'bg-neutral-200/60 rounded-xl'
  const shadowElems = 'shadow-[0_4px_15px_rgba(0,0,0,0.4)]'
  const textTitle = 'text-[17px] se:text-2xl sm:text-3xl md:text-4xl font-bold'
  const fontParams = 'md:text-xl text-base font-bold sm:text-lg'

  const motionSetup = {
    init: {
      opacity: 1,
      translateX: '0',
      translateY: '0',
    },
    animate: {
      opacity: 1,
      translateX: '0',
      translateY: '0',
    },
    transition: {
      duration: 0,
      delay: 0,
    },
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
      setStatus(true)
    }
  }, [gridInView])

  useEffect(() => {
    if (refDescrInView) {
      // console.log('viewed')
      // alert('viewed')
    }
  }, [refDescrInView])

  const Iteration = (value: boolean) => {
    if (value) {
      setCount((prev) => prev + 1)
    }
  }

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
      className='mx-auto px-0 py-0 x-clip min-h-[600px]'
      sectionMounted={() => setSectionMounted(true)}
    >
      {status && (
        <>
          <GridSection
            ref={ref}
            imageOnRight={true}
            imageOnTop={true}
            headerOnTop={true}
            customClasses={{
              wrapper: cn('pt-2', 'md:gap-6'),
              body: 'min-h-[754px]',
            }}
            title={{
              title: (
                <Title
                  content={content.home.howtouse}
                  customCl={{
                    parent: `${shadowElems}`,
                    child: `${textTitle} ${shadowElems} p-2 mx-4 rounded-full ${bgElemsColor}`,
                  }}
                />
              ),
            }}
            image={{
              src: '/images/patch_place_guy.png',
              alt: 'human accupuncture',
              artefact: '',
              customCl: cn(
                shadowElems,
                bgElemsColor,
                'mt-0 mb-0 md:mb-4 md:m-0 p-[10px]'
              ),
              motion: motionSetup,
            }}
            content={{
              text: (
                <>
                  <Instructions
                    ref={refDescr}
                    refStatus={refDescrInView}
                    content={content.home.howTo}
                    status={state}
                    customCl={{
                      parent: `${bgElemsColor} ${shadowElems}`,
                      child: `${fontParams} text-title`,
                    }}
                    endAnim={(value: boolean) => Iteration(value)}
                  />
                  <SubTitle
                    status={count > 0 && state}
                    content={content.home.howitworks_2}
                    customCl={{
                      parent: `${shadowElems}`,
                      child: `${textTitle}`,
                    }}
                    endAnim={(value: boolean) => Iteration(value)}
                  />
                  <Instructions
                    ref={refDescr2}
                    refStatus={refDescr2InView}
                    content={content.home.howTo_2}
                    status={count === 2 && state}
                    customCl={{
                      parent: `${bgElemsColor} ${shadowElems}`,
                      child: `${fontParams} text-title`,
                    }}
                    endAnim={() => ''}
                  />
                </>
              ),
              motion: motionSetup,
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
