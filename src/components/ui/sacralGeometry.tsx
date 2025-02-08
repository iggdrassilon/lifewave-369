import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const BlueRotatedFlower = () => {
  const [state, setState] = useState(false)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      setState(true)
    }
  }, [inView])

  return (
    <div ref={ref} className='sm:w-[360px] w-[320px] md:w-[598px] h-[150px] flex justify-between items-center'>
      <div className={`${state ? 'animate-rotate' : ''} w-[80px] h-[80px] bg-[url(/icons/sacral-blue-circles.svg)] bg-cover bg-no-repeat`}></div>
      <div className={`${state ? 'animate-rotate' : ''} rotate-180 w-[80px] h-[80px] bg-[url(/icons/sacral-blue-circles.svg)] bg-cover bg-no-repeat`}></div>
    </div>
  )
}

export { BlueRotatedFlower }