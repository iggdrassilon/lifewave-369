import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const useInViewHook = () => {
  const [isInView, setIsInView] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])

  return { ref, isInView }
}

export default useInViewHook
