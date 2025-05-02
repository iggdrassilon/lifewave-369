import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const WaveText = ({
  text,
  color,
  textSize,
}: {
  text: string
  color: string
  textSize: string
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    delay: 5,
  })

  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    if (inView) {
      setStartAnimation(true)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className={`overflow-hidden flex ${color}`}
      style={{ flexWrap: 'wrap' }}
    >
      {Array.from(text).map((char: string, index: number) => (
        <>
          {startAnimation && (
            <span
              key={index}
              className={`${textSize} transition-opacity duration-500 ${startAnimation ? 'animate-ferrari opacity-1' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 5}ms` }}
            >
              {char === ' ' ? '\u00A0' : char} {/* Неразрывный пробел */}
            </span>
          )}
        </>
      ))}
    </div>
  )
}

export default WaveText
