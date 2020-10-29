import { createReducer } from '@reduxjs/toolkit'
import { ColorScheme } from 'utils'
import { setColorScheme } from './actions'

export interface ColorSchemeState {
  overrideScheme?: ColorScheme
}

const initialColorSchemeState: ColorSchemeState = {}

export const colorSchemeReducer = createReducer(
  initialColorSchemeState,
  (builder) => {
    builder.addCase(setColorScheme, (state, action) => {
      state.overrideScheme = action.payload
    })
  }
)
