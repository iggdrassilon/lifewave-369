import React, { useEffect, useState } from 'react'
import { MotionSection } from '../../layouts/motionLayout'
import { cn } from '@/src/lib/utils'
import { useInView } from 'react-intersection-observer'
import useLang from '@/src/hooks/use-lang'
import GridSection from '../../layouts/GridSection'
import TextAnimated from '../../ui/textAnimations'
import usePublic from '@/src/hooks/use-lang'

const BreakThrough = () => {
  const content = useLang().CONTENT
  const links = usePublic().LINKS
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
  const textTitle = 'text-[17px] se:text-2xl sm:text-3xl md:text-4xl'
  const textDescr = 'font-bold font text-sm se:text-xl text-description uppercase'
  const textContent = 'text-xl md:text-2xl text-description text-center'
  const shadowElems = 'drop-shadow-[0_4px_15px_rgba(0,50,250,0.4)] rounded-xl backdrop-blur-sm'
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
      console.log('ACTIVATE_DNA SHOWED!')
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
        'activate_dna mx-auto px-0 py-0 min-h-[768px] lg:min-h-[822px]',
        // 'md:container',
        // 'overflow-y-visible overflow-x-hidden'
      )}
      sectionMounted={() => setSectionMounted(true)}
    >
      {status && (
        <GridSection
          imageOnRight={false}
          imageOnTop={false}
          headerOnTop={false}
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
                'text-left text-sm', // FONT
                'text-description' // COLOR
              )}>
                <TextAnimated 
                  text={`${content.home.breakthrough.title}`} 
                  color="" 
                  textSizes={`${textTitle}`} 
                  delay={0.3}          
                  duration={0.1} 
                  space={0.02} 
                  mode='slide-left' 
                />
              </div>
            )
          }}
          description={{
            customCl: cn(
              'flex justify-center',
              `${textContent}`
            ), // PARENT
            description: 
              <div 
                dangerouslySetInnerHTML={{ __html: content.home.breakthrough.annotation }} // CHILD
                className={cn(
                  'mt-[50px] mb-[50px] p-[20px] md:p-[50px]',
                  'w-[100%]',
                  `${shadowElems}`
                )}
                style={{
                  boxShadow: '0 4px 15px rgba(0,50,250, 0.4)'
                }}
              />,
          }}
          image={{
            src: `${links.content.x39card2d}`, // IMG OF STEM SELS
            alt: "steem sels for every neuron",
            customCl: 'mt-[70px] md:mt-[50px]',
            // artefact: '',
            artefact: (
              <div
                className={cn(
                  'absolute -z-[1]',
                  'opacity-100 overflow-hidden',
                  'top-[-60px] se:top-[-70px] sm:top-[-80px] md:top-[110px] lg:top-[140px]',
                  'left-[0] sm:left-[0] md:left-[-80%]'
                )}
              >
                <div
                  className={cn(
                    'w-[110px] se:w-[130px] sm:w-[175px] md:w-[160px] lg:w-[180px]',
                    'h-[50px] se:h-[60px] sm:h-[80px] md:h-[70px] lg:h-[80px]',
                    'rounded-full bg-cover bg-no-repeat',
                    // 'animate-rotate',
                  )}
                  style={{
                    backgroundImage: `url(${links.content.patents})`
                  }}
                />
              </div>
            ),
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
                className={textDescr}
                dangerouslySetInnerHTML={{ __html: content.home.breakthrough.description }} 
              />
            ),
            motion: {
              init: {
                opacity: 0,
                translateX: '-200px',
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
        />
      )}
    </MotionSection>
  )
}

export default BreakThrough
