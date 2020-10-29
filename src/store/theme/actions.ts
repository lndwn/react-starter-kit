import { createAction } from '@reduxjs/toolkit'
import { ColorScheme } from 'utils'

export const setColorScheme = createAction<ColorScheme | undefined>(
  'color-scheme/set'
)
