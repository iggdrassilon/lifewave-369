/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/src/lib/utils'
import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export type TextAnimatedT = {
  text: string
  mode: string
  delay: number
  duration: number
  space: number
  color: string
  textSizes: string
}

const TextAnimated = (props: TextAnimatedT) => {
  const { text, mode, delay, color, duration, space, textSizes } = props
  const textRef = useRef(null)

  const chatBox = 'bg-violet-100/5 rounded-xl backdrop-blur-[8px] p-4'

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: delay
  })

  useEffect(() => {
    const spanText = (textElement: any) => {
      const words = textElement.innerText.split(' ')
      let spaned = ''
      words.forEach((word: string, index: number) => {
        let wordSpan = `<span class="word-wrapper inline-block">`
        for (let i = 0; i < word.length; i++) {
          // eslint-disable-next-line max-len
          wordSpan += `<span class="inline-block opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.075,0.82,0.165,1)]">${word.substring(i, i + 1)}</span>`
        }
        wordSpan += `</span>`
        spaned += wordSpan
        if (index < words.length - 1) {
          spaned += ' '
        }
      })
      textElement.innerHTML = spaned
    }

    const headline: any = textRef.current
    spanText(headline)

    const animations = headline.querySelectorAll('span.word-wrapper span')
    if (inView) {
      animations.forEach((letter: HTMLDivElement, i: number) => {
        letter.style.animationDelay = (i * space) + 's'
        letter.classList.add(`${mode}`)
      })
    }
  }, [inView, text])

  return (
    <>
      <div ref={(node: any) => {
        textRef.current = node
        ref(node)
      }} className={`overflow-hidden animation uppercase ${textSizes} tracking-wide ${color} word-wrap`}>
        {text}
      </div>

      <style>
        {`
          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(200px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .slide-left {
            animation: slideLeft ${duration}s forwards;
          }
          .word-wrap {
            white-space: normal;
            word-break: break-word;
          }
        `}
      </style>
    </>
  )
}

export default TextAnimated
