import { combineReducers } from '@reduxjs/toolkit'

const appReducer = combineReducers({
  // add reducers here
})
export type AppState = ReturnType<typeof appReducer>

export default appReducer
