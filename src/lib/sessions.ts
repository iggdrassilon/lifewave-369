import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const timer = useRef(null)

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    if (pathname !== '/reviews') {
      window.scrollTo(0, 0)
    } else {
      if (pathname.split('/').length === 2) {
        const scrollPosition = sessionStorage.getItem('scrollPosition')
        if (scrollPosition !== null) {
          timer.current = setTimeout(() => {
            window.scrollTo({
              top: parseInt(scrollPosition, 10),
              behavior: 'smooth',
            })
          }, 300)
        }
      }
    }
    const handleRouteChange = () => {
      if (pathname === '/reviews') {
        sessionStorage.setItem('scrollPosition', String(window.scrollY))
      }
    }

    window.addEventListener('scroll', handleRouteChange)
    return () => {
      window.removeEventListener('scroll', handleRouteChange)
    }
  }, [pathname])
  return null
}

export { ScrollToTop }
