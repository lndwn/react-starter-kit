import * as React from 'react'
import { useMatchMedia } from './use-match-media'

export const usePrefersColorScheme = () => {
  const [prefersScheme, setPrefersScheme] = React.useState<'light' | 'dark'>(
    'light'
  )

  const handlePrefersSchemeDarkChange = (event: MediaQueryListEvent) => {
    if (event.matches) setPrefersScheme('dark')
  }
  useMatchMedia('(prefers-color-scheme: dark)', handlePrefersSchemeDarkChange)

  const handlePrefersSchemeLightChange = (event: MediaQueryListEvent) => {
    if (event.matches) setPrefersScheme('light')
  }
  useMatchMedia('(prefers-color-scheme: light)', handlePrefersSchemeLightChange)

  return prefersScheme
}
