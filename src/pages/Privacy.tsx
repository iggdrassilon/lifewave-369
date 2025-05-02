import usePublic from '@/src/hooks/use-lang'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

export interface TextAnimatedProps {
  $action: boolean
}

const Privacy = () => {
  const privacy = usePublic().PRIVACY
  const sanitizePrivacy = DOMPurify.sanitize(privacy)
  const [_, state] = useState(false)
  useEffect(() => {
    state(true)

    return () => {
      state(false)
    }
  }, [])

  return (
    <div className='md:container px-2 flex justify-center items-center w-[100vw] h-[100vh]'>
      <TextAnimated
        className='rounded-xl px-4 py-6 md:p-12 text-description'
        style={{
          border: '1px solid rgba(1,1,1, .1)',
          backgroundColor: 'rgba(27,103,154, .1)',
          boxShadow: '0 4px 15px rgba(1,1,1, .1)',
        }}
        dangerouslySetInnerHTML={{ __html: sanitizePrivacy }}
        $action={_ ? true : false}
      />
    </div>
  )
}

export default Privacy

const TextAnimated = styled.div<TextAnimatedProps>`
  ${(props) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(10px + 1vmin);
    z-index: 1;
    padding-top: 80px;
    ${props.$action &&
    `
    animation: rise 4s ease-in-out forwards;
  `}

    @keyframes rise {
      from {
        color: var(--description-color);
      }
      to {
        color: white;
      }
    }
  `}
  @media (min-width: 476px) {
    //
  }

  @media (min-width: 568px) {
    //
  }

  @media (min-width: 768px) {
    padding-top: 3rem;
  }

  @media (min-width: 1200px) {
    //
  }
`
