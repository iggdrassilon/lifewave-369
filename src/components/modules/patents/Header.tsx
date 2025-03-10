import useInViewHook from '@/src/hooks/useInView'
import { cn } from '@/src/lib/utils'
import { motion } from 'framer-motion'

interface HeaderProps {
  title: string;
  image: string;
}

const Header = ({ title, image }: HeaderProps) => {
  const { ref, isInView } = useInViewHook()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='bg-white text-white'
    >
      {isInView && (
        <>
          <div 
            ref={ref} 
            className={cn(
              'w-[100vw] h-[550px]',
              'flex items-end justify-center',
              'bg-cover bg-center bg-no-repeat',
            )}
            style={{
              backgroundImage: `url(${image})`,  // BACKGROUND
              backgroundPositionX: '65%'
            }}
          >
            <h1
              className={cn(
                'w-[100%]',
                'py-6 px-4',
                'text-4xl font-bold text-center text-title',
                'bg-white/70'
              )}
              >
                {title}
            </h1>
          </div>
        </>
      )}
    </motion.div>
  )
}

export default Header
