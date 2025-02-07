import { MotionHookT, MotionSectionT } from '../../types/hooks'
import { motion } from 'framer-motion'

const MotionLayout = (props: MotionHookT) => {
  const { children, duration, delay } = props

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
      className='container mx-auto px-0 py-0 relative z-10'
    >
      {children}
    </motion.section>
  )
}

const MotionSection = (props: MotionSectionT) => {
  const {
    children,
    className,
    duration,
    delay,
    height_initial,
    height_viewported,
    once,
  } = props

  return (
    <motion.section
      initial={{ opacity: 0, y: height_initial }}
      whileInView={{ opacity: 1, y: height_viewported }}
      transition={{ duration: duration, delay: delay }}
      viewport={{ once: once }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export { MotionLayout, MotionSection }
