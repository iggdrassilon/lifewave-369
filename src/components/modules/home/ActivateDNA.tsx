/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { MotionSection } from '../../layouts/motionLayout'
import useLang from '@/src/hooks/use-lang'
import { useInView } from "react-intersection-observer"
import TextAnimated from '../../ui/textAnimations'
import VideoSection from './VideoSection'
import VideoLayout from '../../layouts/VideoLayout'

const ActivateDNA = () => {
  const content = useLang().CONTENT
  
  const smScreen = 768
  const xlScreen = 1200
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth < xlScreen)
  const [isSmScreen, setIsSmScreen] = useState(window.innerWidth < smScreen)

  const bgElemsColor = 'bg-neutral-200/60'
  const shadowElems = '0 4px 15px rgba(0,50,250, .4)'
  const textColor = 'titles'
  const fontParams = 'md:text-xl text-base font-normal sm:text-lg '
  const textTitle = 'text-2xl md:text-4xl font-bold' 
 

  const [ ref, inView ] = useInView()
  const [ state, setState ] = useState(false)
  const [sectionMounted, setSectionMounted] = useState(false)

  const refVideo = useRef()

  useEffect(() => {
    if (inView && sectionMounted) {
      setState(true)
    }
  
    const handleResize = () => {
      setIsXlScreen(window.innerWidth < xlScreen)
      setIsSmScreen(window.innerWidth < smScreen)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [inView, sectionMounted])

  return (
    <MotionSection
      height_initial={80}
      opacity_initial={0}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='md:container mx-auto px-0 py-0 overflow-y-visible overflow-x-hidden'
      sectionMounted={() => setSectionMounted(true)}
    >
      <div className='relative flex flex-col justify-center items-center' 
        // style={{border: '1px solid green'}}
      >
        <div className='text-center mt-20 text-sm flex items-center justify-center'
          // style={{border: '1px solid green'}}
        >
          {!isSmScreen && (
            <TextAnimated text={`${content.home.activateDNA_md}`} color="text-title" textSizes={`font-bold ${textTitle}`} delay={0.3} duration={0.1} space={0.01} mode='slide-left' />
          )}
          {isSmScreen && (
            <div className='flex flex-col'>
              <TextAnimated text={`${content.home.activateDNA_sm.one}`} color="text-black" textSizes={`font-normal ${textTitle}`} delay={0.3} duration={0.1} space={0.01} mode='slide-left' />
              <TextAnimated text={`${content.home.activateDNA_sm.two}`} color="text-black" textSizes={`font-normal ${textTitle}`} delay={0.3} duration={0.1} space={0.01} mode='slide-left' />
            </div>
          )}
        </div>
        <div className='flex justify-center mt-[100px] text-2xl/tight max-w-[60%] text-center rounded-xl'
          // style={{border: '1px solid red'}}
          style={{
            // border: shadowElems,
            boxShadow: shadowElems, 
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: content.home.patches }} className='py-[20px]' />
        </div>
        <div className='relative flex flex-col md:flex-row mb-[50px] justify-center md:mt-[20px] items-center px-[10px]'
          // style={{ border: '1px solid red'}}
        >
          {/* <h2 className='text-md md:text-md font-normal text-space-dark text-center mt-10 overflow-hidden'>
            <text>{content.home.videoTime} 1:22</text>
          </h2> */}
          <div className={`md:mt-[0] ${bgElemsColor} rounded-xl backdrop-blur-sm sm:m-[100px] md:m-[30px] overflow-hidden`}
            style={{ 
              // boxShadow: shadowElems, 
              // border: '1px solid red' 
            }}
            
          >
            <img
              src="/images/ActivateDNA.JPG" 
              alt="human accupuncture" 
              className="z-10 h-full object-contain " 
              // style={{ border: '1px solid green'}}
            />
          </div>
          <div ref={ref} className='overflow-hidden min-h-[300px] w-[100%] flex justify-center px-[10px]' 
            // style={{ border: '1px solid blue'}}
          >
            <div className={`relative text-2xl/tight md:m-[30px] flex flex-col items-center text-center justify-center gap-5 my-[50px] md:w-[100%] space-y-4 rounded-xl px-[10px] py-[20px] mb-[100px]`}
            style={{
              // border: shadowElems,
              boxShadow: shadowElems, 
            }}
            >
              <div dangerouslySetInnerHTML={{ __html: content.home.stemcells }} />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default ActivateDNA
