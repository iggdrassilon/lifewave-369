/* eslint-disable @typescript-eslint/no-explicit-any */
import { addRef, removeRef } from '@/src/context/UI'
import { cn } from '@/src/lib/utils'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface TitleProps {
  links: any
  title: any
  description: any
}

const Titles = (props: TitleProps) => {
  const { title, links, description } = props
  const ref = useRef<HTMLDivElement | null>(null)
  const refTitle = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    addRef({ id: 'titles', ref: ref.current })
    addRef({ id: 'title', ref: refTitle.current })
    return () => {
      removeRef( { id: 'titles', ref: ref.current } )
      removeRef( { id: 'title', ref: refTitle.current } )
    }
  }, [ref.current, refTitle.current])

  return (
    <div
      className={cn(
        'mb-8',
        'w-[100vw] h-[550px]',
        'flex items-end',
        'bg-cover bg-center bg-no-repeat',
        'bg-white'
      )}
      style={{
        backgroundImage: `url(${links.content.reviewsPage.background})`,
        backgroundPositionX: '65%',
      }}
      ref={ref}
    >
      <motion.div
        ref={refTitle}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'py-4',
          'mx-auto w-[100%]',
          'text-4xl font-bold text-center text-title',
          'bg-white/70'
        )}
      >
        <h1
          className={cn(
            'text-title font-bold',
            'text-center text-3xl md:text-4xl tracking-tight mb-2'
          )}
        >
          {title}
        </h1>
        <p className='text-center text-lg text-description'>{description}</p>
      </motion.div>
    </div>
  )
}

export default Titles
