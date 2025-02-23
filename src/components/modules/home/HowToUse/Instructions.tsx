import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/src/lib/utils'

type InstructionsT = {
  refStatus: boolean;
  customCl?: {
    parent: string;
    child: string;
  };
  content: object;
  status: boolean;
  endAnim: (value: boolean) => void;
}

const Instructions = React.forwardRef<HTMLDivElement, InstructionsT>((props, ref) => {
  const { 
    refStatus, 
    customCl,   
    content, 
    status, // IF SECTION BLOCK VIEWED
    endAnim 
  } = props

  const [ state, setState ] = useState(false)

  const statusEnd = () => {
    endAnim(true)
  }

  return (
    <div 
      className=''
    >
      <motion.div
        initial={{
          opacity: 0,
          translateY: '50px'
        }}
        animate={{
          opacity: status ? 1 : 0,
          translateY: status ? 0 : '50px'
        }}
        transition={{
          delay: 0.8,
          duration: 1
        }}
        ref={ref} 
        onAnimationComplete={() => setState(true)}
        className={cn(
          'opacity-0',
          'overflow-hidden',
          'backdrop-blur-sm',
          'min-h-[280px] se:min-h-[232px] md:min-h-[220px]',
          `${customCl.parent}`
        )}
      >
        {refStatus && state && Object.values(content).map((value: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateX: '300px' }}
            animate={{
              opacity: status ? 1 : 0,
              translateX: status ? 0 : '300px'
            }}
            transition={{ duration: 0.8, delay: 1 * index }}
            className={cn(
              'max-w-[800px] min-w-[60%] md:min-w-[40%] h-[auto] py-2 px-3',
              'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
              'text-description align-baseline',
              'flex justify-start items-center',
              `${customCl.child}`,
            )}
            onAnimationComplete={() => {
              if (index === Object.values(content).length - 1) {
                statusEnd()
              }
            }}
          >
            <text>{value}</text>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
})

Instructions.displayName = 'Instructions'

export default Instructions
