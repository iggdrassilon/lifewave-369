import { createDomain } from 'effector'

const statesDomain = createDomain()

const setStateAction = statesDomain.createEvent<{
  key: string
  value: boolean
}>()

const $states = statesDomain
  .createStore({})
  .on(setStateAction, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))

$states.watch((state) => {
  console.log(state)
})

export { setStateAction, $states }
