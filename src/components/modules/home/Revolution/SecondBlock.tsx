/* eslint-disable @typescript-eslint/no-explicit-any */
import WaveText from "@/src/components/ui/waveText"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { m, motion } from "framer-motion"
import { MotionDescription } from "@/src/components/layouts/motionLayout"
import { cn } from "@/src/lib/utils"

const SecondBlock = ({ content }: any) => {
  const smScreen = 768
  const xlScreen = 1200
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth < xlScreen)
  const [isSmScreen, setIsSmScreen] = useState(window.innerWidth < smScreen)

  const [state, setState] = useState(false)
  const [viewed, setViewed] = useState({
    sun: false,
    description: false
  })

  const chatBox = 'bg-violet-100 rounded-xl backdrop-blur-md p-3'
  const shadowElems = '0 4px 15px rgba(0,0,0, .4)'

  const [ref, inView] = useInView()

  useEffect(() => {
    const handleResize = () => {
      setIsXlScreen(window.innerWidth < xlScreen)
      setIsSmScreen(window.innerWidth < smScreen)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setViewed((prev) => ({
      sun: prev.sun || inView,
      description: prev.description || inView
    }))
  }, [inView])

  return (
    <>
      <div className={cn(
        'md:container',
        'w-[100%]',
        'flex flex-col-reverse md:flex-row justify-center',
        'md:p-[20px]'
      )}>
        <motion.div
          initial={{
            opacity: 0,
            translateX: !isXlScreen ? 0 : '-200px',
            translateY: '150px',
          }}
          animate={{
            opacity: viewed.sun ? 1 : 0,
            translateX: viewed.sun ? !isXlScreen ? '100px' : 0 : null,
            translateY: viewed.sun ? !isSmScreen ? '50px' : '-50px' : '250px',
          }}
          transition={{ duration: 2, delay: 0.2 }}
          className="z-10 flex items-center justify-center md:mt-[90px] md:my-0 my-[50px]"
        >
          <div 
            className={cn(
              'z-10',
              'w-full h-[350px] w-[350px] md:h-[400px] md:w-[400px]',
              'flex items-center justify-center',
              'bg-cover bg-no-repeat',
              "bg-[url('/images/sun.png')]" // SUN BACKGROUND
            )}
          />
        </motion.div>
        <div className={cn(
          'xl:w-[60%]',
          'relative flex items-center md:items-start justify-end',
          'md:pr-[3rem] xl:pr-0 mx-0  pt-[180px] md:pt-5 px-[20px] md:mx-0'
        )}>
          {viewed.sun && (
            <div className={cn(
              'ml-0 md:mt-[250px] text-right rounded-lg',
              'text-xl/tight md:text-2xl/tight font-normal text-description',
              'max-w-descr md:max-w-descr_md xl:max-w-[100%]',
              'flex items-center justify-center',
            )}>
              <MotionDescription
                refOne={ref}
                color="text-description"
                className={cn(
                  `text-black ${chatBox}`,
                  'flex items-center justify-center',
                  `z-10 p-[20px] ml-0`,
                  'min-w-descr sm:w-[100%] md:min-w-0 md:max-w-descr_md'
                )}
                style={{ boxShadow: shadowElems }}
                duration={1}
                delay={0.6}
                height_initial={60}
                height_viewported={0}
                once={true}
                complete={() => setState(true)}
              >
                {content.home.enerhyuse}
              </MotionDescription>
            </div>
          )}
        </div>
      </div >
      <div ref={ref} className={cn(
        "absolute rotate-180 top-[60%] md:top-[50%] lg:top-[40%] right-0 -z-1",
        'w-[100%] h-[100%] min-h-[530px] md:w-[101%] md:h-[100%] lg:h-[120%]',
        'flex items-center justify-center',
        'bg-cover bg-no-repeat',
        "bg-[url('/images/layout-wave.png')]"  // WHITE WAVE BACKGROUND
      )} />
      <div className={cn(
        "absolute top-0 right-0 rotate-180 -z-10",
        'w-[100%] h-[100%] md:w-[100%] md:h-[100%]',
        'flex items-center justify-center',
        'bg-cover bg-no-repeat',
        "bg-[url('/images/blue-graphs.jpg')]" // BLUE GRAPHS BACKGROUND
      )} />
    </>
  )
}

export { SecondBlock }