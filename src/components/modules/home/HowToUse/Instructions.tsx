import React from 'react'
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
}

const Instructions = React.forwardRef<HTMLDivElement, InstructionsT>((props, ref) => {
  const { refStatus, customCl, content, status } = props

  return (
    <>
      <div ref={ref} className={cn(
        'min-h-[280px] se:min-h-[240px] md:min-h-[220px]',
        'overflow-hidden',
        'backdrop-blur-sm',
        `${customCl.parent}`
      )}>
        {refStatus && Object.values(content).map((value: string, index: number) => (
          <motion.div
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
            key={index}
          >
            <text>{value}</text>
          </motion.div>
        ))}
      </div>
    </>
  )
})

Instructions.displayName = 'Instructions'

export default Instructions
