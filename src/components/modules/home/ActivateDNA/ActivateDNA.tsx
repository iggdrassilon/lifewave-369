import { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer"

import { MotionSection } from '@/src/components/layouts/motionLayout'
import TextAnimated from '@/src/components/ui/textAnimations'
import GridSection from '@/src/components/layouts/GridSection'

  import useLang from '@/src/hooks/use-lang'

import { cn } from '@/src/lib/utils'
import usePublic from '@/src/hooks/use-lang'

const ActivateDNA = () => {
  const content = useLang().CONTENT
  const link = usePublic().LINKS
  const [ state, setState ] = useState(false)
  const [ status, setStatus ] = useState(false)
  const [ sectionMounted, setSectionMounted ] = useState(false)

  const [ ref, inView ] = useInView()
  const [ gridRef, gridInView ] = useInView({
    triggerOnce: true
  })

  const smScreen = 768
  const xlScreen = 1200
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth < xlScreen)
  const [isSmScreen, setIsSmScreen] = useState(window.innerWidth < smScreen)

  const bgElemsColor = 'rounded-xl backdrop-blur-sm'
  const textColor = 'titles'
  const fontParams = 'md:text-xl text-base font-normal sm:text-lg '
  const textTitle = 'text-[17px] se:text-2xl sm:text-3xl md:text-4xl font-bold'
  const textDescr = 'text-[21px] text-description'
  const textContent = 'text-xl md:text-2xl text-description text-center'
  const borderDev = 'border border-solid border-red-500 border-[1px]' 

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

  useEffect(() => {
    if (gridInView) {
      // console.log('ACTIVATE_DNA SHOWED!')
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
      className={cn(
        'activate_dna mx-auto px-0 py-0 min-h-[600px] md:min-h-[600px]',
        // 'md:container',
        // 'overflow-y-visible overflow-x-hidden'
      )}
      sectionMounted={() => setSectionMounted(true)}
    >
      {status && (
        <GridSection
          imageOnRight={false}
          imageOnTop={true}
          headerOnTop={true}
          customClasses={{
            header: `space-y-4 ${bgElemsColor}`,
            body: '',
            wrapper: 'gap-8'
          }}
          title={{
            customCl: '',
            title: (
              <div className={cn(
                'md:mt-0', // CORDS
                'flex items-center justify-center', // CTR
                'text-center text-sm', // FONT
                'text-description' // COLOR
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
            )
          }}
          description={{
            customCl: cn(
              'flex justify-center',
              `${textDescr}`,
              'rounded-xl'
            ), // PARENT
            description: <div 
              dangerouslySetInnerHTML={{ __html: content.home.patches }} // CHILD
              className={cn(
                'p-[20px] md:p-[30px]',
                'md:max-w-[80%] lg:max-w-[60%]',
              )} />,
            style: {
              boxShadow: '0 4px 15px rgba(0,50,250, 0.4)'
            }
          }}
          image={{
            src: `${link.content.activateDNA}`, // IMG OF STEM SELS
            alt: "steem sels for every neuron",
            customCl: '',
            artefact: '',
            motion: {
              init: {
                opacity: 0,
                translateX: '200px',
                translateY: ''
              },
              animate: {
                opacity: 1,
                translateX: '0',
                translateY: '0'
              },
              transition: {
                duration: 0.6,
                delay: 0.6
              }
            }
          }}
          content={{
            text: (
              <div 
                ref={ref}
                className={cn(
                  `${textContent}`,
                  'p-[10px] md:p-[20px]'
                )}
                dangerouslySetInnerHTML={{ __html: content.home.stemcells }} 
              />
            ),
            customCl: cn(
              'rounded-xl'
            ),
            style: {
              boxShadow: '0 4px 15px rgba(0,50,250, 0.4)'
            },
            motion: {
              init: {
                opacity: 0,
                translateX: '0',
                translateY: '80px'
              },
              animate: {
                opacity: 1,
                translateX: '0',
                translateY: '0'
              },
              transition: {
                duration: 1,
                delay: 0.3

              }
            }
          }}
        />
      )}
    </MotionSection>
  )
}

export default ActivateDNA

