import { useUnit } from "effector-react"
import { $actions } from "../context/actions"

const useDispatch = () => {
  const burgerStatus = useUnit($actions)
  return { burgerStatus }
}

export default useDispatch
