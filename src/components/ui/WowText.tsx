import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const AnimationComponent = () => {
  const demoTextRef = useRef(null)
  const startAnimRef = useRef(null)
  const exitAnimRef = useRef(null)

  useEffect(() => {
    const demoText = demoTextRef.current

    if (demoText) {
      // Оборачиваем каждую букву в <span>
      demoText.innerHTML = demoText.innerText
        .split('')
        .map((char) => `<span>${char}</span>`)
        .join('')
    }
  }, [])

  const startAnimation = () => {
    gsap.to(startAnimRef.current, { autoAlpha: 0 })
    gsap.fromTo(
      demoTextRef.current.querySelectorAll('span'),
      { autoAlpha: 0, scale: 2 },
      { autoAlpha: 1, scale: 1, stagger: 0.01 }
    )
  }

  const exitAnimation = () => {
    gsap.to(startAnimRef.current, { autoAlpha: 0 })
    gsap.fromTo(
      demoTextRef.current.querySelectorAll('span'),
      { autoAlpha: 1, scale: 1 },
      { autoAlpha: 0, scale: 2, stagger: 0.01 }
    )
  }

  return (
    <div>
      <div
        className='gsap-anim-button'
        ref={startAnimRef}
        onClick={startAnimation}
      >
        Start animation
      </div>
      <div
        className='gsap-anim-button'
        ref={exitAnimRef}
        onClick={exitAnimation}
      >
        Exit animation
      </div>
      <div ref={demoTextRef}>Wow, TweenMax can tween scale!</div>
    </div>
  )
}

export default AnimationComponent
