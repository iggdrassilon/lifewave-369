import { createStore, createEvent } from 'effector'

export const setCacheVideo = createEvent<string>()

export const $videoCache = createStore<string[]>([])

$videoCache.on(setCacheVideo, (state: string[], link: string) => {
  if (!state.includes(link)) {
    return [...state, link]
  }
  return state
})
