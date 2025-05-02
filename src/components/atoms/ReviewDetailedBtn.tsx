import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/src/lib/utils'

import { ChevronLeft } from 'lucide-react'
import { addRef, removeRef, updateDimensions } from '@/src/context/UI'

const ReviewDetailedBtn: React.FC = () => {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const height = ref.current.getBoundingClientRect().height
  const width = ref.current.getBoundingClientRect().width

  useEffect(() => {
    if (ref.current) {
      addRef({ id: 'componentB', ref: ref.current })
      updateDimensions({
        id: 1,
        width: height,
        height: width,
      })
    }

    return () => {
      removeRef({ id: 'componentB', ref: ref.current })
    }
  }, [])

  return (
    <Link
      to='/reviews'
      ref={ref}
      className={cn(
        'top-[80px] left-4',
        'fixed',
        'mt-2 mb-6 p-2 pr-4 rounded-xl',
        'text-title hover:text-description bg-cyan-100/70 font-bold',
        'inline-flex items-center transition-colors font-extrabold'
      )}
    >
      <ChevronLeft className='w-4 h-4 mr-1' />
      {/* {window.scrollX >= 200 ? '<' : content.main.getBackSimple} */}
    </Link>
  )
}

export default ReviewDetailedBtn
