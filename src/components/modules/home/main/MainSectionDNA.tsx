/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { motion } from 'framer-motion'
import Card3D from '../Card3D'
import '../style.css'

const DnaHero = () => {
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
  return (
    <motion.div
      initial={{ filter: 'brightness(20%)', y: 20 }}
      animate={{ filter: 'brightness(100%)', y: 0 }}
      transition={{ duration: 0.8 }}
      className='relative z-10 text-center'
    >
      {/* bg-[url('/images/DNA.gif')] */}
      <div
        className="dna-rotate min-h-screen flex items-center justify-center bg-cover bg-no-repeat 
          bg-[url('/images/DNA.gif')] 
        rotate-180 overfrow-hidden"
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
        onTouchStart={handlePointerMove}
      >
        <div className=' absolute top-[60%] md:top-[60%] z-100'>
          <div className="rounded-full w-[200px] h-[200px] animate-rotate bg-[url('/public/images/standart_white_2.png')] bg-cover bg-no-repeat"></div>
          <div className="absolute right-3 bottom-2 rotate-180 inset-0 -z-10 before:block before:content-[''] before:rounded-full before:w-[180px] before:h-[180px] before:shadow-custom before:bg-transparent before:translate-y-1"></div>
        </div>
        <div className='rotate-180 translate-y-[-60%] w-[90vw] max-w-[500px] aspect-video'>
          <Card3D mousePosition={mousePosition}>
            <div className="layer-1 absolute inset-[-10px] bg-[url('/public/images/X39-card1.png')] bg-cover bg-no-repeat" />
            <div
              className="layer-2 absolute inset-[-10px] bg-[url('/public/images/X39-card1.png')] bg-cover bg-no-repeat"
              data-offset='20'
            />
            <div
              className="layer-3 absolute inset-[-10px] bg-[url('/public/images/X39-card1.png')] bg-cover bg-no-repeat"
              data-offset='40'
            />
          </Card3D>
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
