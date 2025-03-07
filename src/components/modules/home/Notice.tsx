import React, { useEffect, useState } from 'react'
import { MotionSection } from '../../layouts/motionLayout'
import useLang from '@/src/hooks/use-lang'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import TypewriterText from '@/src/hooks/Writer'
import { cn } from '@/src/lib/utils'
import usePublic from '@/src/hooks/use-lang'

const Notice = () => {
  const content = useLang().CONTENT
  const links = usePublic().LINKS
  const [ref, inView] = useInView()

  const [state, setState] = useState(false)
  const [sectionMounted, setSectionMounted] = useState(false)

  useEffect(() => {
    if (inView) {
      // alert()
      setState(true)
    }
  }, [inView])

  return (
    <MotionSection
      height_initial={0}
      opacity_initial={0}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      style={{}}
      className='mx-auto px-0 py-0 overflow-hidden md:min-h-[400px]'
      sectionMounted={() => setSectionMounted(true)}
    >
      <div className='relative'>
        <div className='bg-blue-700 max-h-[600px]'>
          <img
            src={links.content.noticeWaves}
            alt="blue matrix background" 
            className="opacity-80 hue-rotate-30 w-[100%] h-auto object-cover bg-cover" 
          />
          <div className='absolute top-0 w-[100%] h-[100%]' 
            style={{ 
              // eslint-disable-next-line max-len
              background: 'linear-gradient(to bottom, rgba(250,120,250, .3), rgba(0,0,0, .0), rgba(0,0,0, .0), black), radial-gradient(circle, rgba(250,120,250, .0), rgba(0,0,0, .0), rgba(0,0,0, .0), black)',
            }}
          ></div>
        </div>
        <div ref={ref} className={cn(
          'p-3',
          // 'bg-slate-600/30',
          'absolute align-baseline overflow-hidden',
          'flex items-center justify-center',
          'left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]',
          'w-[100%]',
          'min-h-[10%] sm:min-h-[20%] md:min-h-[10%] h-[auto]',
          "text-white text-sm/4 sm:text-base/5 md:text-xl/5 font-bold",
          // 'rounded-xl backdrop-blur-sm',
        )}>
          {sectionMounted && (
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.8
              }}
              id="notice"
              style={{
                textAlign: "left"
              }}
            >
                <span>{content.home.notice}</span>
            </motion.div>
          )}
        </div>
      </div>
    </MotionSection>
  )
}

export default Notice