import { motion } from 'framer-motion'

const SpaceLines = ({inView}: {inView: boolean}) => {

  return (
    <div
      className='absolute inset-0 pointer-events-none z-10 overflow-hidden'
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      {inView && [...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className='absolute h-[1px] bg-blue-600/20'
          style={{
            width: '100%',
            top: `${20 + index * 15}%`,
            left: '-100%',
          }}
          animate={{
            x: ['0%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.5,
          }}
        />
      ))}
      {inView && [...Array(5)].map((_, index) => (
        <motion.div
          key={`vertical-${index}`}
          className='absolute w-[1px] bg-blue-400/20'
          style={{
            height: '100%',
            left: `${20 + index * 15}%`,
            top: '-100%',
          }}
          animate={{
            y: ['0%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.7,
          }}
        />
      ))}
    </div>
  )
}

export default SpaceLines
