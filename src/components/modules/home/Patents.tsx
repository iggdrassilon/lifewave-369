import React, { useEffect, useState } from 'react'
import useLang from '@/src/hooks/use-lang'
import { cn } from '@/src/lib/utils'
import { useInView } from 'react-intersection-observer'
import GridSection from '@/src/components/layouts/GridSection'
import { MotionSection } from '@/src/components/layouts/motionLayout'
import TextAnimated from '@/src/components/ui/textAnimations'
import GlowButton from '@/src/components/atoms/GlowButton'
import usePublic from '@/src/hooks/use-lang'

const Patents = () => {
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
  const textTitle = 'text-[17px] se:text-2xl sm:text-3xl md:text-4xl font-bold'
  const textDescr = 'font-bold text-xl text-description'
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
        'activate_dna mx-auto px-0 py-0 min-h-[795px] md:min-h-[600px]',
        // 'md:container',
        // 'overflow-y-visible overflow-x-hidden'
      )}
      sectionMounted={() => setSectionMounted(true)}
    >
      {status && (
        <>
          <GridSection
            imageOnRight={false}
            imageOnTop={false}
            headerOnTop={true}
            isColumnTotal={true}
            reverseTotalColumn={false}
            customClasses={{
              header: `space-y-4 ${bgElemsColor}`,
              body: '',
              wrapper: 'gap-0'
            }}
            title={{
              customCl: '',
              title: (
                <div className={cn(
                  // 'md:mt-20', // CORDS
                  'mt-0',
                  'flex items-center justify-center', // CTR
                  'text-center text-sm', // FONT
                  'text-description' // COLOR
                )}>
                  <TextAnimated 
                    text={`${content.home.patents.title}`} 
                    color="" 
                    textSizes={`font-bold ${textTitle}`} 
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
                  dangerouslySetInnerHTML={{ __html: content.home.patents.description }} // CHILD
                  className={cn(
                    'mt-[50px] p-[20px] md:p-[50px]',
                    'w-[100%] rounded-xl',
                    // `${shadowElems}`
                  )}
                  style={{
                    boxShadow: '0 4px 15px rgba(0,50,250, 0.7)'
                  }}
                />,
            }}
            image={{
              src: `${links.content.x39patents}`, // IMG OF PATENTS
              alt: "patents",
              customCl: 'mt-[50px] min-h-[200px]',
              artefact: '',
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
                  duration: 1,
                  delay: 0.4
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
                >
                  <h2 className={cn(
                    'font-bold uppercase'
                    )}
                  >
                    {content.home.patents.patents}
                  </h2>
                  <div className={cn(
                      'mt-4'
                    )}
                  >
                    {content.home.patents.numbers}
                  </div>
                </div>
              ),
              customCl: cn(
                // 'rounded-xl'
              ),
              style: {
                // boxShadow: '0 4px 15px rgba(0,50,250, 0.4)'
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
          <div className={cn(
            'flex justify-center items-center',
            'mb-[80px]',
          )}>
            <GlowButton
              link='/patents-research'
              message={content.home.patents.button} 
            />
          </div>
        </>
      )}
    </MotionSection>
  )
}
export default Patents
