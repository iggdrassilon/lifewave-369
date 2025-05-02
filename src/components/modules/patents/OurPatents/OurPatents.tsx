import { motion } from 'framer-motion'

import useInViewHook from '@/src/hooks/useInView'
import PatentsPattern from './PatentsPattern'

import { cn } from '@/src/lib/utils'
import { title } from 'process'

export type Documents = {
  [key: string]: {
    title: string
    description?: string
    link: string
  }
}

type OurPatentsT = {
  content: {
    title: string
    description: string
    patents: {
      title: string
      description: string
    }
  }
  readmore?: string
}

const OurPatents = (props: OurPatentsT) => {
  const { content } = props
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
      <div
        className={cn('grid gap-8 items-start', 'grid-cols-1 md:grid-cols-2')}
      >
        <PatentsPattern
          title={content.title}
          description={content.description}
        />
        <PatentsPattern
          title={content.patents.title}
          description={content.patents.description}
        />
      </div>
    </motion.section>
  )
}

export default OurPatents
