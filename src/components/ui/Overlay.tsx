import { useEffect, useState } from 'react'
import useDispatch from '@/src/hooks/dispatcher'
import { setAction } from '@/src/context/actions'
import { bodyUnfixed } from '@/src/hooks/dom'

const Overlay = () => {
  const [state, setState] = useState(false)
  const status = useDispatch().burgerStatus

  useEffect(() => {
    if (status.burger) {
      setState(true)
    } else {
      setState(false)
    }
  }, [status])

  const handleClick = () => {
    setAction({ key: 'burger', value: false })
    bodyUnfixed()
    setState(false)
  }

  return (
    <>
      {state && (
        <div
          onClick={() => handleClick()}
          className='fixed top-[0] z-[1] left-0 w-[100vw] h-[100vh]'
        ></div>
      )}
    </>
  )
}

export default Overlay
