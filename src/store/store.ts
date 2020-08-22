import { configureStore } from '@reduxjs/toolkit'
import appReducer, { AppState } from './app.reducer'
import { throttle } from 'lodash'
import { name } from '../../package.json'

export const loadState = (): AppState | undefined => {
  try {
    const serializedState = localStorage.getItem(`${name}store`)
    if (serializedState === null) return
    return JSON.parse(serializedState)
  } catch (error) {
    // tslint:disable no-console
    console.error(error)
    // tslint:enable no-console
    return
  }
}

export const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(`${name}store`, serializedState)
  } catch (error) {
    // tslint:disable no-console
    console.error(error)
    // tslint:enable no-console
  }
}

export const store = configureStore({
  preloadedState: loadState(),
  reducer: appReducer,
})

store.subscribe(throttle(() => saveState({ ...store.getState() }), 2000))

export type AppDispatch = typeof store.dispatch
