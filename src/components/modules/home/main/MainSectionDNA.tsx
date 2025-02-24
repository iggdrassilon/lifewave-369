/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Card3D from '@/src/components/modules/home/Card3D'

import VideoLayout from '@/src/components/layouts/VideoLayout'
import usePublic from '@/src/hooks/use-lang'

import '../style.css'
import { cn } from '@/src/lib/utils'

const DnaHero = () => {
  const links = usePublic().LINKS
  const [ ref, inView ] = useInView()
  const [ rotate, setRotate ] = useState(false)
  const videoRef = useRef<any>(null)
 
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth * 0.8,
    y: window.innerHeight * 0.5,
  })

  const handlePointerMove = (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()
    let x: any, y: any

    if ('touches' in event) {
      x = event.touches[0].clientX - rect.left
      y = event.touches[0].clientY - rect.top
    } else {
      x = event.clientX - rect.left
      y = event.clientY - rect.top
    }

    setMousePosition({ x, y })
  }

    useEffect(() => {
      inView ? setRotate(true) : setRotate(false)

      if (videoRef.current) {
        if (inView) {
          // For firefox need small delay before play
          setTimeout(() => {
            videoRef.current.play()
          }, 11)
        } else {
          videoRef.current.pause()
        }
      }
    }, [inView])

  return (
    <motion.div
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 5 }}
      className='relative z-999 text-center'
    >
      <div
        className={cn(
          'overfrow-hidden',
          'flex flex-col items-center justify-center'
        )}
        // onMouseMove={handlePointerMove}
        // onTouchMove={handlePointerMove}
        // onTouchStart={handlePointerMove}
      >
        <VideoLayout
          preview={links.previews.dna}
          link={links.videos.dna}
          opacity='10'
          customClass='rotate-[180deg]'
          videoRef={videoRef}
          cover={true} 
        />
        <div className='relative mt-[100px] p-[10px] overflow-hidden'>
          <div className={cn(
            'w-[270px] h-[270px]',
            `${rotate ? 'animate-rotate' : ''} rounded-full`,
            'bg-cover bg-no-repeat',
            "bg-[url('/public/images/standart_white_2.png')]"
          )} />
          <div className={cn(
            'absolute z-[9]',
            'before:absolute inset-0',
            'before:w-[252px] before:h-[252px]',
            "before:top-[15px] before:left-[18px] before:translate-y-1",
            'before:rounded-full before:shadow-custom'
          )} />
        </div>
        <div className={cn(
          'w-[100%] pb-[100px]',
          'font-kefa text-white text-[120px] font-bold',
        )}>
          <text ref={ref}>X39</text>
        </div>
        <div className={cn(
          'absolute top-[565px]',
          'w-[100vw] max-w-[410px]',
          'mr-[20px]',
          'aspect-video',
        )} >
          <Card3D mousePosition={mousePosition}>
            <div className={cn(
              "layer-1",
              'absolute -z-[1] inset-[0]',
              'bg-cover bg-no-repeat',
            )} 
              style={{
                backgroundImage: `url(${links.content.x39card})`
              }}
            />
            <div
              className={cn(
                "layer-2",
                'absolute -z-[1] inset-[0]',
                'bg-cover bg-no-repeat',
              )}
              style={{
                backgroundImage: `url(${links.content.x39card})`
              }}
              data-offset='20'
            />
            <div
              className={cn(
                "layer-3",
                'absolute -z-[1] left-[0] inset-[0]',
                'bg-cover bg-no-repeat',
              )}
              style={{
                backgroundImage: `url(${links.content.x39card})`
              }}
              data-offset='40'
            />
          </Card3D>
        </div>
      </div>
    </motion.div>
  )
}

export default DnaHero
