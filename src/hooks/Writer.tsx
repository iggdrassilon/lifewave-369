import { useState, useEffect, useRef } from 'react'
import { cn } from '@/src/lib/utils'
import { useInView } from 'react-intersection-observer'

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

const TypewriterText = ({
  text,
  className,
  speed = 50,
  delay = 0,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const timer = useRef<NodeJS.Timeout | null>(null)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      timer.current = setTimeout(
        () => {
          if (currentIndex < text.length) {
            setDisplayText((prev) => prev + text[currentIndex])
            setCurrentIndex((prev) => prev + 1)
          } else {
            setIsTyping(false)
          }
        },
        currentIndex === 0 ? delay : speed
      )
    }

    return () => clearTimeout(timer.current)
  }, [currentIndex, text, speed, delay, inView])

  return (
    <div ref={ref} className={cn('relative inline-block', className)}>
      {displayText}
      <span
        className={cn(
          '',
          isTyping ? 'animate-[blink_1s_steps(1)_infinite]' : 'opacity-0'
        )}
        aria-hidden='true'
      />
    </div>
  )
}

export default TypewriterText
