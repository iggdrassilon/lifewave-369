import useInViewHook from '@/src/hooks/useInView'
import { motion } from 'framer-motion'
import TechnologyPattern from './TechnologyPattern'
import { cn } from '@/src/lib/utils'

type TechnologyT = {
  content: {
    patch: {
      title: string
      description: string
      link: string
    }
    X39: {
      title: string
      description: string
      link: string
    }
  }
  images: {
    patchTechnology: string
    patchTechnologyX39: string
  }
  readmore: string
}

const Technology = (props: TechnologyT) => {
  const { images, content, readmore } = props
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
        'bg-white text-white'
      )}
    >
      <div className={cn('grid gap-8 items-center', 'md:grid-cols-2')}>
        <TechnologyPattern
          content={content.patch}
          image={images.patchTechnology}
          readmore={readmore}
        />
        <TechnologyPattern
          content={content.X39}
          image={images.patchTechnologyX39}
          readmore={readmore}
        />
      </div>
    </motion.section>
  )
}

export default Technology
