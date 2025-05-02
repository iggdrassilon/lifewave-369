import { useUnit } from 'effector-react'
import { $actions } from '../context/actions'
import { $videoCache } from '../context/cache'

const useDispatch = () => {
  const burgerStatus = useUnit($actions)
  const videoCache = useUnit($videoCache)

  return {
    burgerStatus,
    videoCache,
  }
}

export default useDispatch
