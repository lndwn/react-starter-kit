import * as React from 'react'
import { DefaultTheme } from 'styled-components'

export type ColorScheme = 'light' | 'dark'

interface usePreferColorSchemeProps {
  light: DefaultTheme
  dark: DefaultTheme
  forceScheme?: ColorScheme
}

export const usePreferColorScheme = (props: usePreferColorSchemeProps) => {
  const [preferredColorScheme, setPreferredColorScheme] = React.useState<
    ColorScheme
  >('light')

  const handlePreferredSchemeChange = (event: MediaQueryListEvent) => {
    if (event.matches) setPreferredColorScheme('dark')
    else if (preferredColorScheme !== 'light') setPreferredColorScheme('light')
  }

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark')
    if (mediaQueryList.matches) {
      setPreferredColorScheme('dark')
    }
    mediaQueryList.addListener(handlePreferredSchemeChange)
    return () => mediaQueryList.removeListener(handlePreferredSchemeChange)
  }, [props.forceScheme])

  return React.useMemo(
    () => ({
      theme: props[props?.forceScheme ?? preferredColorScheme],
      scheme: props?.forceScheme ?? preferredColorScheme,
    }),
    [preferredColorScheme, props.forceScheme]
  )
}
