import useInViewHook from '@/src/hooks/useInView'
import { cn } from '@/src/lib/utils'
import { motion } from 'framer-motion'

interface DnaHeaderProps {
  title: string;
  image: string;
}

const DnaHeader = ({ title, image }: DnaHeaderProps) => {
  const { ref, isInView } = useInViewHook()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='bg-space-dark text-white'
    >
      {isInView && (
        <>
          <div 
            ref={ref} 
            className={cn(
            // "absolute top-[4rem] left-0  mx-auto",
            'w-[100vw] h-[500px]',
            'flex items-end justify-center',
            'bg-cover bg-center bg-no-repeat',
            )} 
            style={{
              backgroundImage: `url(${image})`,  // WHITE WAVE BACKGROUND
            }}
          >
            <h1 
              className={cn(
                'w-[100%]',
                'py-4',
                'text-4xl font-bold text-center',
                'bg-slate-600/70'
              )}
              >{title}
            </h1>
          </div>
        </>
      )}
    </motion.div>
  )
}

export default DnaHeader
