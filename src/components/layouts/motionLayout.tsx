import { useInView } from 'react-intersection-observer'
import { MotionDescriptionT, MotionHookT, MotionPartTextT, MotionSectionT, MotionTextT } from '../../types/hooks'
import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

const MotionLayout = (props: MotionHookT) => {
  const { children, duration, delay } = props

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
      className='mx-auto px-0 py-0 relative z-10'
    >
      {children}
    </motion.section>
  )
}

export const MotionSection = (props: MotionSectionT) => {
  const { children, className, duration, delay, height_initial, height_viewported, once, sectionMounted, opacity_initial } = props

  return (
    <motion.section
      initial={{ opacity: opacity_initial, y: height_initial }}
      whileInView={{ opacity: 1, y: height_viewported }}
      transition={{ duration: duration, delay: delay }}
      viewport={{ once: once }}
      className={className}
      onAnimationComplete={() => sectionMounted()}
    >
      {children}
    </motion.section>
  )
}

const MotionText = (props: MotionTextT) => {
  const { children, className, duration, delay, height_initial, height_viewported, once, variants, complete } = props

  const [state, setState] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.3,
    delay: 0.3
  })

  useEffect(() => {
    if (inView) {
      setState(true)
    }
  }, [inView])

  const setComplete = () => {
    setTimeout(() => {
      complete()
    }, 3000)
  }

  return (
    <motion.text
      ref={ref}
      initial={{ opacity: 0, y: height_initial }}
      animate={{ opacity: state ? 1 : 0, y: state ? height_viewported : height_initial }}
      transition={{ duration: duration, delay: delay }}
      variants={variants}
      className={className}
      onAnimationComplete={() => setComplete()}
    >
      {children}
    </motion.text>
  )
}

const MotionDescription = (props: MotionDescriptionT) => {
  const { color, children, className, duration, delay, height_initial, height_viewported, once, complete, refOne, style } = props

  const [state, setState] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.3,
    delay: 0.3
  })

  useEffect(() => {
    if (inView) {
      setState(true)
    }
  }, [inView])

  const setComplete = () => {
    setTimeout(() => {
      complete()
    }, 3000)
  }

  return (
    <motion.text
      ref={ref}
      initial={{ opacity: 0, y: height_initial }}
      animate={{ opacity: state ? 1 : 0, y: state ? height_viewported : height_initial }}
      transition={{ duration: duration, delay: delay }}
      className={`${className} ${color}`}
      style={style}
      onAnimationComplete={() => setComplete()}

    >
      <div ref={refOne}>{children}</div>
    </motion.text>
  )
}

const MotionTextPart = (props: MotionPartTextT) => {
  const { children, duration, color, delay, right_initial, right_viewported, once, className, complete, refOutdoor } = props

  const [state, setState] = useState(false)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setState(true)
    }
  }, [])

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: '-300px',
      }}
      animate={{
        opacity: state ? 1 : 0,
        translateY: state ? 0 : '-300px'
      }}
      transition={{ duration: 2, delay: 0.2 }}
      className="z-10 flex items-center justify-center mt-[50px] md:my-0 my-[50px]"
      >
      {children}
    </motion.div>
  )
}

export { MotionLayout, MotionText, MotionDescription }
