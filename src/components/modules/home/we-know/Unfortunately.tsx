/* eslint-disable @typescript-eslint/no-explicit-any */
import { MotionSection } from "@/src/components/layouts/motionLayout"
import VideoLayout from "@/src/components/layouts/VideoLayout"
import AnimatedCounter from "@/src/components/ui/AnimatedCounter"
import TextAnimated from "@/src/components/ui/textAnimations"
import WaveText from "@/src/components/ui/waveText"
import useLang from "@/src/hooks/use-lang"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

const Unfortunately = () => {
  const content = useLang().CONTENT
  const [sectionMounted, setSectionMounted] = useState(false)
  const videoRef = useRef<any>()
  const [ref, inView] = useInView()
  const chatBox = 'bg-violet-100/60 rounded-xl backdrop-blur-sm p-3'
  const textDensity = 'text-sm/4 sm:text-base/5 md:text-lg'
  useEffect(() => {
    if (videoRef.current) {
      if (inView && sectionMounted) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [inView, sectionMounted]);

  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='px-0 py-0'
      sectionMounted={() => setSectionMounted(true)}
    >
      <>
        <div ref={ref} className="flex flex-col justify-center items-center"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(250,250,250, 1), rgba(0,0,0, .0), rgba(0,0,0, .0),rgba(250,250,100, .0), hwb(229 29% 43% / 0)), linear-gradient(to bottom, rgba(250,250,250, 0), rgba(0,0,0, .0), rgba(250, 250, 255, .0)), linear-gradient(to bottom, rgba(250,250,250, .0), rgba(0,0,0,.0)',
          }}
        >
          <h2 className='font-bold text-center mt-10 mb-8 flex items-center justify-center'>
            <TextAnimated text={`${content.home.unfortunately}`} color="text-title" delay={0.3} duration={0.1} space={0.1} mode='slide-left' />
          </h2>
          <div className={`text-xl max-w-[500px] text-description prose text-center ${chatBox} ${textDensity}`}>
            {content.home.slowlyregenerate}
          </div>
          <AnimatedCounter
            endValue={50}
            duration={3000}
            color='var(--persentage-color)'
            radius={50}
            sizeBox={220}
            delay={0.4}
          />
          <div className={`text-xl text-description max-w-[500px] text-center ${chatBox} ${textDensity}`}>
            {content.home.to30years}
          </div>
          <AnimatedCounter
            endValue={90}
            duration={3000}
            color='var(--persentage-color)'
            radius={50}
            sizeBox={220}
            delay={0.4}
          />
          <div className={`text-xl text-description max-w-[500px] text-center ${chatBox} ${textDensity}`}>
            {content.home.to60years}
          </div>
          <div className={`my-[80px] text-xl text-description prose max-w-[500px] text-center ${chatBox} ${textDensity}`}>
            {content.home.stemcells}
          </div>
        </div>
        <VideoLayout
          link="/video/waves_purple.mp4"
          videoRef={videoRef}
          opacity="40"
          cover={true}
        />
      </>
    </MotionSection>
  )
}

export default Unfortunately