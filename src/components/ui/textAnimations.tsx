/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type TextAnimatedT = {
  text: string
  mode: string
  delay: number
  duration: number
  space: number
  color: string
}

// modes:
// slide-left, 
const TextAnimated = (props: TextAnimatedT) => {
  const { text, mode, delay, color, duration, space } = props
  const textRef = useRef();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: delay
  });

  useEffect(() => {
    const spanText = (textElement: any) => {
      const string = textElement.innerText;
      let spaned = '';
      for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) === ' ') {
          spaned += string.substring(i, i + 1);
        } else {
          spaned += `<span class="inline-block opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.075,0.82,0.165,1)]">${string.substring(i, i + 1)}</span>`;
        }
      }
      textElement.innerHTML = spaned;
    };

    const headline: any = textRef.current;
    spanText(headline);

    const animations = headline.querySelectorAll('span');
    if (inView) {
      animations.forEach((letter: any, i: number) => {
        letter.style.animationDelay = (i * space) + 's';
        letter.classList.add(`${mode}`);
      });
    }
  }, [inView, text]);

  return (
    <>
      <text ref={(node: any) => {
        textRef.current = node;
        ref(node);
      }} className={`overflow-hidden animation text-center uppercase text-3xl md:text-5xl tracking-wide ${color}`}>
        {text}
      </text>

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
        `}
      </style>
    </>
  );
};

export default TextAnimated;
