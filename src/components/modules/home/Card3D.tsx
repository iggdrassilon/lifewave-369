import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/src/lib/utils'

interface Card3DProps {
  className?: string
  children?: React.ReactNode
  mousePosition: { x: number; y: number }
}

const Card3D: React.FC<Card3DProps> = ({
  className,
  children,
  mousePosition,
}) => {
  const posterRef = useRef<HTMLDivElement>(null)
  const shineRef = useRef<HTMLDivElement>(null)
  const [layers, setLayers] = useState<HTMLElement[]>([])

  const sensitivity = 0.05
  const maxTiltAngle = 85

  useEffect(() => {
    if (posterRef.current) {
      const layerElements = posterRef.current.querySelectorAll('[data-offset]')
      setLayers(Array.from(layerElements as NodeListOf<HTMLElement>))
    }
  }, [])

  useEffect(() => {
    if (!posterRef.current || !shineRef.current) return

    const rect = posterRef.current.getBoundingClientRect()
    const w = rect.width
    const h = rect.height

    const offsetX = 0.5 - mousePosition.x / window.innerWidth
    const offsetY = 0.5 - mousePosition.y / window.innerHeight

    const tiltX = offsetY * maxTiltAngle
    const tiltY = offsetX * maxTiltAngle

    const transformPoster = `perspective(1000px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg)`

    const dy = mousePosition.y - h / 2
    const dx = mousePosition.x - w / 2
    const theta = Math.atan2(dy, dx)
    let angle = (theta * 180) / Math.PI

    if (angle < 0) {
      angle += 360
    }

    posterRef.current.style.transform = transformPoster
    shineRef.current.style.background = `linear-gradient(${angle - 90}deg, rgba(255,255,255,${mousePosition.y / window.innerHeight}) 0%, rgba(255,255,255,0) 80%)`

    layers.forEach((layer) => {
      const offsetLayer = parseFloat(layer.dataset.offset || '0')
      const transformLayer = `translateX(${offsetX * offsetLayer}px) translateY(${offsetY * offsetLayer}px)`
      layer.style.transform = transformLayer
    })
  }, [mousePosition, layers])

  return (
    <div
      ref={posterRef}
      className={cn(
        'w-[100%] h-[90%] relative shadow-[0_45px_150px_rgba(0,0,0,.8)] overflow-hidden transition-transform duration-100 ease-out touch-nones',
        className
      )}
    >
      <div
        ref={shineRef}
        className='absolute inset-0 pointer-events-none z-[999]'
      />
      {children}
    </div>
  )
}

export default Card3D
