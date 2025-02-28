/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

// eslint-disable-next-line react/display-name
const SpaceBackground = React.forwardRef(({ inView }: any , ref: any) => {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const starsRef = useRef(null)

  const container = containerRef.current

  const starCount = 1000
  const starLimit = 1000

  useEffect(() => {
    if (!container || !ref.current || !inView) return
    // console.log(inView)
    const parentH = ref.current.offsetHeight
    const parentW = ref.current.offsetWidth

    sceneRef.current = new THREE.Scene()
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      parentW / parentH,
      0.1,
      1000
    )
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true })

    const renderer = rendererRef.current
    renderer.setSize(parentW, parentH)
    container.appendChild(renderer.domElement)

    const createStars = () => {
      if (starsRef.current) {
        sceneRef.current.remove(starsRef.current)
      }

      const starsGeometry = new THREE.BufferGeometry()
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
      })

      const starsVertices = []
      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * starLimit
        const y = (Math.random() - 0.5) * starLimit
        const z = (Math.random() - 0.5) * starLimit
        starsVertices.push(x, y, z)
      }

      starsGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(starsVertices, 3)
      )
      starsRef.current = new THREE.Points(starsGeometry, starsMaterial)
      sceneRef.current.add(starsRef.current)
    }

    createStars()

    cameraRef.current.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      if (starsRef.current) {
        starsRef.current.rotation.x += 0.0001
        starsRef.current.rotation.y += 0.0001
      }

      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }
    
    
    const handleResize = () => {
      const newParentH = ref.current.offsetHeight
      const newParentW = ref.current.offsetWidth
      
      cameraRef.current.aspect = newParentW / newParentH
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(newParentW, newParentH)
      
      createStars()
    }
    
    window.addEventListener('resize', handleResize)

    if (inView) {
      animate()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
    }

  }, [ref, container, inView])

  return (
    <div
      ref={containerRef}
      className='absolute inset-0 pointer-events-none z-[-1]'
      style={{ background: 'linear-gradient(to top, #0a1930 0%, #000 100%)' }}
    />
  )
})

export default SpaceBackground
