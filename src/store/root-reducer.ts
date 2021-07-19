import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
