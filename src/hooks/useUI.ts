import { useUnit } from 'effector-react'
import { $dimensions, $refs, DimensionsIN, RefT } from '../context/UI'

import { updateDimensionsFx } from '../context/UI'
import { ReactNode, useEffect } from 'react'

interface UseUi {
  DimensionsStore: DimensionsIN
  Refs: RefT[]
}

const useOurUI = (): UseUi => {
  // STORES
  const DimensionsStore = useUnit($dimensions)
  const Refs = useUnit($refs)
  return {
    DimensionsStore,
    Refs,
  }
}

const UseTargetElementsParams = (): ReactNode | Promise<ReactNode> => {
  const refs = useOurUI().Refs
  const dimensions = useOurUI().DimensionsStore
  useEffect(() => {
    const handleResize = () => {
      refs.forEach(({ id, ref }) => {
        if (ref) {
          const { width, height } = ref.getBoundingClientRect()
          updateDimensionsFx({ id, width, height })
        }
      })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleResize)

    // Первоначальное обновление размеров
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleResize)
    }
  }, [refs])

  useEffect(() => {
    console.log('Updated dimensions:', dimensions)
  }, [dimensions])
  return ''
}

const logRefs = () => {
  const refs = useOurUI().Refs
  console.log(refs)
}

export { useOurUI, UseTargetElementsParams, logRefs }
