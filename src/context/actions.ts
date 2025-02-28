import { createDomain } from "effector"

const actionsDomain = createDomain()

const setAction = actionsDomain.createEvent<{ key: string; value: boolean }>()

const $actions = actionsDomain
  .createStore({
    burger: false,
    language: false,
  })
  .on(setAction, (state, {key, value}) => ({
    ...state,
    [key]: value
  }))

$actions.watch((state) => {
  // console.log(state);
})

export { setAction, $actions }
