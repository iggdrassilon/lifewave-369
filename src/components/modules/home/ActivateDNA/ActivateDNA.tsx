/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react'
import { MotionSection } from '../../../layouts/motionLayout'
import useLang from '@/src/hooks/use-lang'
import { useInView } from "react-intersection-observer"
import TextAnimated from '../../../ui/textAnimations'
import VideoSection from '../VideoSection'
import VideoLayout from '../../../layouts/VideoLayout'
import GridSection from '@/src/components/layouts/GridSection'
import { cn } from '@/src/lib/utils'

const ActivateDNA = () => {
  const content = useLang().CONTENT

  const smScreen = 768
  const xlScreen = 1200
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth < xlScreen)
  const [isSmScreen, setIsSmScreen] = useState(window.innerWidth < smScreen)

  const bgElemsColor = 'bg-neutral-200/60'
  const textColor = 'titles'
  const fontParams = 'md:text-xl text-base font-normal sm:text-lg '
  const textTitle = 'text-[17px] se:text-2xl sm:text-3xl md:text-4xl font-bold' 
 

  const [ ref, inView ] = useInView()
  const [ state, setState ] = useState(false)
  const [ sectionMounted, setSectionMounted ] = useState(false)

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
      className={cn(
        'mx-auto px-0 py-0',
        // 'md:container',
        // 'overflow-y-visible overflow-x-hidden'
      )}
      sectionMounted={() => setSectionMounted(true)}
    >
      <GridSection
        customClasses={{
          header: 'space-y-4',
          body: '',
          wrapper: ''
        }}
        title={
          <div className={cn(
            'mt-20', // CORDS
            'flex items-center justify-center', // CTR
            'text-center text-sm', // FONT
            'text-title' // COLOR
          )}>
            {!isSmScreen && (
              <TextAnimated 
                text={`${content.home.activateDNA_md}`} 
                color="" 
                textSizes={`font-bold ${textTitle}`} 
                delay={0.3} 
                duration={0.1} 
                space={0.02} 
                mode='slide-left' />
            )}
            {isSmScreen && (
              <div className='flex flex-col'>
                <TextAnimated 
                  text={`${content.home.activateDNA_sm.one}`} 
                  color="" 
                  textSizes={`font-bold ${textTitle}`} 
                  delay={0.3} 
                  duration={0.1} 
                  space={0.01} 
                  mode='slide-left' />
                <TextAnimated 
                  text={`${content.home.activateDNA_sm.two}`} 
                  color="" 
                  textSizes={`font-bold ${textTitle}`} 
                  delay={0.3} 
                  duration={0.1} 
                  space={0.01} 
                  mode='slide-left' />
              </div>
            )}
          </div>
        }
        description={{
          description: <div dangerouslySetInnerHTML={{ __html: content.home.patches }} />,
          customCl: ''
        }}
        image={{
          src: "/images/ActivateDNA.JPG",
          alt: "steem sels for every neuron",
          customCl: "",
          artefact: null
        }}
        content={
          <div ref={ref} dangerouslySetInnerHTML={{ __html: content.home.stemcells }} />
        }
      />
      {/* <div className='relative flex flex-col justify-center items-center' >
        <div className='relative flex flex-col md:flex-row mb-[50px] justify-center md:mt-[20px] items-center px-[10px]'>
          <div className={`md:mt-[0] ${bgElemsColor} rounded-xl backdrop-blur-sm sm:m-[100px] md:m-[30px] overflow-hidden`}></div>
          <div ref={ref} className='overflow-hidden min-h-[300px] w-[100%] flex justify-center px-[10px]' >
            <div className={`relative text-2xl/tight md:m-[30px] flex flex-col items-center text-center justify-center gap-5 my-[50px] md:w-[100%] space-y-4 rounded-xl px-[10px] py-[20px] mb-[100px]`}>
              
            </div>
          </div>
        </div>
      </div> */}
    </MotionSection>
  )
}

export default ActivateDNA
