import * as React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { usePrefersColorScheme } from 'utils/use-prefers-color-scheme'
import { defaultTheme as lightTheme, darkTheme } from './theme'

export const ThemeProvider = (props: {
  children: React.ReactNode | React.ReactNode[]
}) => {
  const systemScheme = usePrefersColorScheme()

  const theme = React.useMemo(() => {
    switch (systemScheme) {
      case 'dark':
        return darkTheme
      case 'light':
      default:
        return lightTheme
    }
  }, [systemScheme])

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {props.children}
    </StyledComponentsThemeProvider>
  )
}
