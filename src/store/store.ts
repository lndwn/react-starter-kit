import { configureStore } from '@reduxjs/toolkit'
import rootReducer, { AppState } from './root-reducer'
import { throttle } from 'lodash'
import warning from 'tiny-warning'

const itemName = `${process.env.npm_package_name}-${process.env.npm_package_version}`

export const loadState = (): AppState | undefined => {
  try {
    const serializedState = localStorage.getItem(itemName)
    if (serializedState === null) return
    return JSON.parse(serializedState)
  } catch (error) {
    warning(true, error)
    return
  }
}

export const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(itemName, serializedState)
  } catch (error) {
    warning(true, error)
  }
}

export const store = configureStore({
  preloadedState: loadState(),
  reducer: rootReducer,
})

store.subscribe(throttle(() => saveState({ ...store.getState() }), 2000))

export type AppDispatch = typeof store.dispatch
