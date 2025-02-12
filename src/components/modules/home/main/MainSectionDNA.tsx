/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import VideoLayout from '@/src/components/layouts/VideoLayout'
import usePublic from '@/src/hooks/use-lang'

import '../style.css'

const DnaHero = () => {
  const links = usePublic().LINKS;

  const [ ref, inView ] = useInView();
  const videoRef = useRef<any>()
 
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth * 0.9,
    y: window.innerHeight * 0.5,
  })

  const handlePointerMove = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()
    let x: any, y: any

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    setMousePosition({ x, y })
  }

    useEffect(() => {
      if (videoRef.current) {
        if (inView) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }, [inView]);

  return (
    <motion.div
      initial={{ filter: 'brightness(20%)', y: 20 }}
      animate={{ filter: 'brightness(100%)', y: 0 }}
      transition={{ duration: 0.8 }}
      className='relative z-999 text-center'

    >
      {/* bg-[url('/images/DNA.gif')] */}
      <div
        className="dna-rotate min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat 
        rotate-180 overfrow-hidden"
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
        onTouchStart={handlePointerMove}
      >
        <VideoLayout
          link={links.videos.dna}
          opacity='10'
          videoRef={videoRef}
          cover={true}
        />
        <div className=' absolute top-[50%] md:top-[50%] z-100'>
          <div className="rounded-full w-[270px] h-[270px] animate-rotate bg-[url('/public/images/standart_white_2.png')] bg-cover bg-no-repeat"></div>
          <div className="absolute right-3 bottom-2 rotate-180 inset-0 -z-10 before:block before:content-[''] before:rounded-full before:w-[250px] before:h-[250px] before:shadow-custom before:bg-transparent before:translate-y-1"></div>
        </div>
        <div className='absolute top-[18%] w-[100vw] rotate-180 font-kefa text-white text-[150px] font-bold'>
          <text ref={ref}>X39</text>
        </div>
      </div>

    </motion.div>
  )
}

export default DnaHero
// bg-gradient-to-b from-[#f6f7fc] to-[#d5e1e8]

{
  /* <h1 className="text-5xl md:text-7xl font-bold text-space-dark mb-6">
          Transform Your Health
        </h1>
        <p className="text-xl md:text-2xl text-space-medium max-w-2xl mx-auto">
          Advanced Stem Cell Activation Technology
        </p> */
}

