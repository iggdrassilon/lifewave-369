/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

import { MotionSection } from "@/src/components/layouts/motionLayout"
import VideoLayout from "@/src/components/layouts/VideoLayout"
import AnimatedCounter from "@/src/components/ui/AnimatedCounter"
import TextAnimated from "@/src/components/ui/textAnimations"
import usePublic from "@/src/hooks/use-lang"

const Unfortunately = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS

  const videoRef = useRef<any>()
  const [ref, inView] = useInView()

  const [sectionMounted, setSectionMounted] = useState(false)

  const chatBox = 'bg-violet-100 rounded-xl backdrop-blur-sm p-3'
  const textDensity = 'md:w-[100%] md:text-[25px] text-base text-center sm:text-lg text-description overflow-hidden'
  const shadowElems = '0 4px 15px rgba(0,0,0, .2)'

  useEffect(() => {
    if (videoRef.current) {
      if (inView && sectionMounted) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
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
      className='px-0 py-0 overflow-hidden'
      sectionMounted={() => setSectionMounted(true)}
    >
      <>
        <div ref={ref} className="px-0 flex flex-col justify-center items-center"
          style={{ 
            // eslint-disable-next-line max-len
            background: 'linear-gradient(to bottom, rgba(250,250,250, 1), rgba(0,0,0, .0), rgba(0,0,0, .0),rgba(250,250,100, .0), hwb(229 29% 43% / 0)), linear-gradient(to bottom, rgba(250,250,250, 0), rgba(0,0,0, .0), rgba(250,250,250, 1)), linear-gradient(to bottom, rgba(250,250,250, .0), rgba(0,0,0,.0)',
          }}
        >
          <h2 className='text-center mt-20 mb-8 flex items-center justify-center'>
            {/* eslint-disable-next-line max-len */}
            <TextAnimated text={`${content.home.unfortunately}`} textSizes="text-3xl md:text-4xl" color="font-bold text-title" delay={0.3} duration={0.1} space={0.1} mode='slide-left' />

          </h2>
          <div className="sm:w-[523px] pb-[100px] md:w-[60%] mb-[10 0px] max-w-[800px] flex flex-col items-center justify-center w-[calc(100%-40px)]">
            <div className={`text-description prose font-bold ${chatBox} ${textDensity} sm:text-3xl`}
              style={{
                boxShadow: shadowElems
              }}
            >
              {content.home.slowlyregenerate}
            </div>
            <AnimatedCounter
              endValue={50}
              duration={3000}
              color='var(--persentage-color)'
              radius={50}
              sizeBox={180}
              delay={0.4}
            />
            <div className={`mt-5 text-description ${chatBox} ${textDensity}`}
              style={{
                boxShadow: shadowElems
              }}
            >
              {content.home.to30years}
            </div>
            <AnimatedCounter
              endValue={90}
              duration={3000}
              color='var(--persentage-color)'
              radius={50}
              sizeBox={180}
              delay={0.4}
            />
            <div className={`text-description ${chatBox} ${textDensity}`}
              style={{
                boxShadow: shadowElems
              }}
            >
              {content.home.to60years}
            </div>
            {/* <div className={`mb-[100px] text-description prose ${chatBox} ${textDensity}`}
              style={{
                boxShadow: shadowElems
              }}
            >
              {content.home.stemcells}
            </div> */}
          </div>
          </div>
        <VideoLayout
          preview={links.previews.unfortunately}
          videoRef={videoRef}
          customClass=""
          link={links.videos.unfortunately}
          opacity="40"
          cover={true}
        />
        {/* <div className='absolute z-10 opacity-20 right-[-50px] md:right-[-120px] bottom-[-440px]'>
          <div className={` rounded-full w-[600px] h-[600px] bg-[url('/public/images/standart_blue.png')] bg-cover bg-no-repeat`}></div>
        </div> */}
      </>
    </MotionSection>
  )
}

export default Unfortunately