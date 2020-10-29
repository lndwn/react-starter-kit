import { combineReducers } from '@reduxjs/toolkit'
import { colorSchemeReducer } from './theme'

const rootReducer = combineReducers({
  colorScheme: colorSchemeReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
