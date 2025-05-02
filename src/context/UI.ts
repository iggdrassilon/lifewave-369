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

// Эффект для обновления размеров
export const updateDimensionsFx = createEffect('updateDimensionsFx')

// Хранилище рефов
export const $refs = createStore<RefT[]>([])
  .on(addRef, (refs, newRef) => [...refs, newRef])
  .on(removeRef, (refs, refToRemove) =>
    refs.filter((ref) => ref !== refToRemove)
  )

// Хранилище размеров
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

// Обновление размеров при добавлении рефа
sample({
  clock: addRef,
  target: updateDimensionsFx,
})
