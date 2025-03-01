import { useState, useEffect } from 'react'

const useScreenWidth = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  
  const mdBreakpoint = 768

  const checkScreenWidth = () => {
    if (window.innerWidth < mdBreakpoint) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  useEffect(() => {
    checkScreenWidth()

    const handleResize = () => {
      checkScreenWidth()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isSmallScreen
}

export default useScreenWidth
