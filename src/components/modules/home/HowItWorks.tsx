/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { MotionSection } from '../../layouts/motionLayout'
import useLang from '@/src/hooks/use-lang'
import { useInView } from 'react-intersection-observer'
import TextAnimated from '../../ui/textAnimations'
import VideoSection from './VideoSection'
import { cn } from '@/src/lib/utils'

const HowItWorks = () => {
  const content = useLang().CONTENT
  const videoRef = useRef<any>(null)

  const videoSourceLink = 'https://kinescope.io/embed/axnpCT8eeYFrWsPTfQwStr'

  const bgElemsColor = 'bg-neutral-200/60'
  const textColor = 'titles'
  const fontParams = 'md:text-xl text-base font-normal sm:text-lg '
  const shadowElems =
    'drop-shadow-[0_4px_15px_rgba(0,50,250,0.4)] rounded-xl backdrop-blur-sm'
  const [ref, inView] = useInView()
  const [state, setState] = useState(false)
  const [sectionMounted, setSectionMounted] = useState(false)

  const refVideo = useRef(null)

  useEffect(() => {
    if (inView && sectionMounted) {
      setState(true)
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
      className='container mx-auto px-0 py-0'
      style={{}}
      sectionMounted={() => setSectionMounted(true)}
    >
      <>
        <div className='text-center mt-10 text-sm flex items-center justify-center'>
          <TextAnimated
            text={`${content.home.howitworks}`}
            color='text-black'
            textSizes='font-normal text-3xl md:text-5xl'
            delay={0.3}
            duration={0.1}
            space={0.1}
            mode='slide-left'
          />
        </div>
        <div className='flex flex-col items-center'>
          <h2
            className={cn(
              'mt-10',
              'overflow-hidden',
              'text-md md:text-md font-normal text-space-dark text-center'
            )}
          >
            <span>{content.home.videoTime} 1:22</span>
          </h2>
          <div
            className={cn(
              'relative',
              'w-[calc(100%-40px)] md:w-[80%]',
              'flex flex-col justify-center items-center'
            )}
          >
            <div
              className={cn(
                'relative',
                'w-[100%] md:w-[80%]',
                'rounded-xl',
                // `${shadowElems}`,
                `${bgElemsColor}`
              )}
            >
              <VideoSection
                title=''
                ref={videoRef}
                videoUrl={videoSourceLink}
              />
            </div>
            <div
              ref={ref}
              className={cn(
                'flex justify-center',
                'min-h-[300px] md:min-h-[500px] w-[100%] md:w-[80%]'
              )}
            >
              <MotionSection
                height_initial={100}
                opacity_initial={0}
                height_viewported={0}
                duration={0.6}
                delay={0.4}
                once={true}
                className={cn(
                  'relative',
                  'rounded-xl text-2xl/tight',
                  'flex flex-col items-center text-center justify-center',
                  'gap-5 my-[50px] py-[30px] px-[20px] md:px-[30px] space-y-4',
                  'md:w-[100%]'
                  // `${shadowElems}`
                )}
                style={{
                  // boxShadow: '0 4px 15px rgba(0,50,250, 0.4)',
                }}
                sectionMounted={() => ''}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: content.home.aboutX39 }}
                />
              </MotionSection>
            </div>
          </div>
        </div>
      </>
    </MotionSection>
  )
}

export default HowItWorks
