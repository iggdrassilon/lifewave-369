/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { m, motion } from "framer-motion"

import { MotionDescription } from "@/src/components/layouts/motionLayout"
import TextAnimated from "@/src/components/ui/textAnimations"
import { cn } from "@/src/lib/utils"

const FirstBlock = ({ content }: any) => {
  // state of complete status of description
  const [state, setState] = useState(false)
  const [viewed, setViewed] = useState({
    girl: false,
    titles: false
  })

  const [ref, inView] = useInView()
  const [titleRef, titleInView] = useInView()

  useEffect(() => {
    setViewed((prev) => ({
      girl: prev.girl || inView,
      titles: prev.titles || titleInView
    }))
  }, [inView, titleInView])

  return (
    <>
      <div className="overflow-hidden">
        <h2
          className={cn(
            'mb-20',
            'text-center',
            'flex items-center justify-center',
            'relative overflow-hidden'
          )} 
          ref={titleRef}
        >
          <TextAnimated 
            mode='slide-left' 
            textSizes=" text-3xl md:text-5xl" 
            text={`${content.home.revol}`} 
            color="text-black  font-normal z-10" 
            delay={0.4} 
            duration={0.3} 
            space={0.01} />
        </h2>
        <div 
          className={cn(
            'flex w-[100%] md:flex-row mx-0 md:mx-0',
            'flex-col items-center md:items-start justify-center'
          )}
        >
          {viewed.titles && (
            <MotionDescription
              refOne={ref}
              color="text-neutral-700"
              className={cn(
                "z-10 px-2 md:mt-[50px] mt-0 ml-0 md:ml-10",
                'text-xl/tight md:text-[26px]/tight font-normal',
                'flex items-center justify-center',
                'min-w-descr sm:w-[80%] w-[calc(100%-40px)] md:min-w-0 md:max-w-descr_md',
              )}
              style={''}
              duration={1}
              delay={0.6}
              height_initial={60}
              height_viewported={0}
              once={true}
              complete={() => setState(true)}
            >
              {content.home.firstinworld}
            </MotionDescription>
          )}
          <motion.div
            initial={{ opacity: 0, translateX: '170px' }}
            animate={{
              opacity: viewed.girl ? 1 : 0,
              translateX: viewed.girl ? 0 : '170px'
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="z-10 flex items-center justify-center mt-[50px] md:my-0"
          >
            <div 
              className={cn(
                'w-[300px] h-[400px] md:w-[400px] md:h-[600px]',
                'flex items-center justify-center',
                'bg-cover bg-no-repeat',
                "bg-[url('/images/girl_patched.png')]" // GIRL SMILE BACKGROUND
              )}
            />
          </motion.div>
        </div>
        <div
          className={cn(
            'absolute top-0 -z-1',
            'flex items-center justify-center',
            'w-[100%] h-[100%] md:w-[100%] md:h-[100%]',
            'bg-cover bg-no-repeat',
            "bg-[url('/images/layout-wave.png')]" // WHITE WAVE BACKGROUND
          )}
        />
        <div 
          className={cn(
            'absolute bottom-0 -z-10',
            'w-[100%] h-[50%] md:w-[100%] md:h-[100%]',
            'flex items-center justify-center',
            'bg-cover bg-no-repeat',
            "bg-[url('/images/blue-graphs.jpg')]" // BLUE GRAPHS BACKGROUND
          )}
        >
        </div>
      </div>
      <div 
        className={cn(
          'absolute z-[9] top-[84%] se:top-[82%] sm:top-[80%] md:top-[82%] w-[100%]',
          'flex justify-center items-center'
        )}
      >
        <img 
          src="/images/perla.png" // BRIDGE RAINBOW BACKGROUND
          className="h-[300px] w-[100%]" 
          alt="background" 
        />
      </div>
    </>
  )
}

export { FirstBlock }