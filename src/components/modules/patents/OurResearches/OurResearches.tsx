import { motion } from 'framer-motion'

import { cn } from '@/src/lib/utils'
import useInViewHook from '@/src/hooks/useInView'

import ResearchMap from './ResearchMap'
import InformationMap from './InformationMap'
import SecurityMap from './SecurityMap'

export type Documents = {
  [key: string]: {
    title: string
    description?: string
    link: string
  }
}

type OurResearchesT = {
  content: {
    research: {
      title: string
      description: string
      documents: Documents
    }
    information: {
      about: string
      documents: Documents
    }
    security: {
      about: string
      documents: Documents
    }
  }
  readmore: string
  mode: string
}

const OurResearches = (props: OurResearchesT) => {
  const { content, readmore, mode } = props
  const { ref, isInView } = useInViewHook()

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
      }}
      className={cn(
        'w-full max-w-7xl mx-auto px-4 py-8',
        'md:py-16 flex flex-col gap-8',
        'bg-white text-black'
      )}
    >
      {mode === 'before_acupressure' && (
        <ResearchMap content={content.research} readmore={readmore} />
      )}
      {/* // acupressure */}
      {mode === 'after_acupressure' && (
        <>
          <InformationMap content={content.information} readmore={readmore} />
          <SecurityMap content={content.security} readmore={readmore} />
        </>
      )}
    </motion.section>
  )
}

export default OurResearches
