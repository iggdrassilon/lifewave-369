import { useUnit } from 'effector-react'
import { $states } from '../context/states'

const useStates = () => {
  const states = useUnit($states)

  return { states }
}

export default useStates
