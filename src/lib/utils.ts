import React from 'react'
import { useLocation } from 'react-router-dom'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const RootStyler = () => {
  const root = document.getElementById('root')
  const location = useLocation()
  const isReviewsPage = location.pathname.startsWith('/reviews')
  const isExactReviewsPage = location.pathname === '/reviews'

  React.useEffect(() => {
    if (isExactReviewsPage) {
      root.style.backgroundColor = ''
    } else if (location.pathname.startsWith('/reviews')) {
      root.style.backgroundColor = 'white'
    } else {
      root.style.backgroundColor = ''
    }
  }, [location.pathname, isExactReviewsPage])

  return null
}

export { RootStyler, cn }
