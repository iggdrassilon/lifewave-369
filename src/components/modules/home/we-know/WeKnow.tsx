import { MotionSection } from "@/src/components/layouts/motionLayout"
import AnimatedCounter from "@/src/components/ui/AnimatedCounter"
import WaveText from "@/src/components/ui/waveText"
import useLang from "@/src/hooks/use-lang"
import { motion } from 'framer-motion'

const WeKnow = () => {
  const content = useLang().CONTENT
  const variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    },
  };
  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='container mx-auto px-4 py-2'
    >
      <>
        {/* <h2 className='text-3xl font-bold text-center mb-8 text-title'></h2> */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <motion.h2 className="text-3xl font-bold text-center mb-8 text-title" variants={textVariants}>{content.home.weknow}</motion.h2>
        </motion.div>
      </>
    </MotionSection>
  )
}

export default WeKnow