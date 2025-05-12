/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/src/lib/utils'

import { ChevronLeft } from 'lucide-react'
import { useOurUI } from '@/src/hooks/useUI'

interface ReviewDetailedBtnProps {
  content: any
}

const ReviewDetailedBtn = (props: ReviewDetailedBtnProps) => {
  const { content } = props
  const [state, setState] = useState<boolean>(false)
  const [params, setParams] = useState({
    titleH: 0,
    btnTop: 0,
    btnH: 0,
  })

  const ref = useRef<HTMLAnchorElement | null>(null)
  const refs = useOurUI().Refs

  useEffect(() => {
    const titleRef = refs.filter((ref) => ref.id === 'titles')[0]
    const descrRef = refs.filter((ref) => ref.id === 'title')[0]
    const headerRef = refs.filter((ref) => ref.id === 'header')[0]
    const btnCordTop = Number(
      window.getComputedStyle(ref.current).top.slice(0, -2)
    )
    const btnPaddings = Number(
      window.getComputedStyle(ref.current).padding.slice(0, -2)
    )
    const handleScroll = () => {
      if (titleRef && descrRef && headerRef) {
        const titleH = titleRef.ref.getBoundingClientRect().height
        const descrH = descrRef.ref.getBoundingClientRect().height
        const header = headerRef.ref.getBoundingClientRect().height
        setParams((prev) => ({
          ...prev,
          titleH: titleH - descrH - header - btnCordTop + btnPaddings * 2,
          btnTop: ref.current.clientTop,
          btnH: ref.current.clientHeight,
        }))
      }
    }
    window.addEventListener('scroll', handleScroll)
    console.log(refs)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [refs])

  useMemo(() => {
    if (ref.current && window.scrollY >= params.titleH) {
      setState(true)
    } else {
      setState(false)
    }
  }, [params])

  return (
    <Link
      to='/reviews'
      ref={ref}
      className={cn(
        'top-[80px] left-4 h-[40px]',
        'fixed z-[1]',
        'rounded-xl',
        'hover:text-description bg-cyan-100/70 font-bold',
        'inline-flex items-center transition-colors font-extrabold',
        'overflow-hidden text-ellipsis whitespace-nowrap',
        `${state ? 'bg-cyan-50' : 'bg-cyan-100/70'}`
      )}
      style={{
        transition: 'width 0.2s linear',
        width: state ? `${params.btnH}px` : '200px',
        boxShadow: '0 4px 10px rgba(1,1,1,.2)',
        // paddingLeft: state ? '' : '40px'
      }}
    >
      <ChevronLeft className='w-[20px] h-[20px] absolute left-[10px]' />
      <span className='pl-[40px]'>
        {state ? '' : content.main.getBackSimple}
      </span>
    </Link>
  )
}

export default ReviewDetailedBtn
