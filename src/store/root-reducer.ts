import { combineReducers, createReducer } from '@reduxjs/toolkit'

const dummyReducer = createReducer(0, {})

const rootReducer = combineReducers({
  dummy: dummyReducer,
})
export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
