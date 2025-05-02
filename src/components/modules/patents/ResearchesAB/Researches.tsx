import useInViewHook from '@/src/hooks/useInView'
import { motion } from 'framer-motion'
import GridSectionSimple from '@/src/components/layouts/GridSectionSimple'
import ResearchA from './ResearchA'
import ResearchB from './ResearchB'

export type ResearchesT = {
  images: {
    researchA: string
    researchB: string
  }
  content: {
    subtitle: string
    a: {
      title: string
      description: string
      link: string
    }
    b: {
      title: string
      description: string
      link: string
    }
  }
}

const Researches = (props: ResearchesT) => {
  const { images, content } = props
  const { ref, isInView } = useInViewHook()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
      }}
      className='bg-white text-white container'
    >
      <ResearchA content={content} images={images} />
      <ResearchB content={content} images={images} />
    </motion.div>
  )
}

export default Researches
