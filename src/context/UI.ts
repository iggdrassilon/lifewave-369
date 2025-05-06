// model.js
import { createEvent, createStore, createEffect, sample } from 'effector'
export type RefT = { id: string; ref: HTMLElement }

export interface DimensionsIN {
  id: number
  width: number
  height: number
}

export type Dimensions = {
  [key: string]: DimensionsIN
}

export const addRef = createEvent<RefT>('addRef')
export const removeRef = createEvent<RefT>('removeRef')
export const updateDimensions = createEvent<Dimensions>({})

export const updateDimensionsFx = createEffect('updateDimensionsFx')

export const $refs = createStore<RefT[]>([])
  .on(addRef, (refs, newRef) => {
    const existing = refs.some((ref) => ref.id === newRef.id)
    return existing ? refs : [...refs, newRef]
  })
  .on(removeRef, (refs, refToRemove) =>
    refs.filter((ref) => ref.id !== refToRemove.id)
  )

export const $dimensions = createStore({
  id: 0,
  width: 0,
  height: 0,
}).on(updateDimensions, (dimensions, { width, height }) => ({
  ...dimensions,
  [dimensions.id]: {
    width,
    height,
  },
}))

sample({
  clock: addRef,
  target: updateDimensionsFx,
})
