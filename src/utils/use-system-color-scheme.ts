import * as React from 'react'

export type ColorScheme = 'light' | 'dark'

export const useSystemColorScheme = () => {
  const [systemTheme, setSystemTheme] = React.useState<ColorScheme>('light')

  const handlePreferredSchemeChange = (event: MediaQueryListEvent) => {
    if (event.matches) setSystemTheme('dark')
    else if (systemTheme !== 'light') setSystemTheme('light')
  }

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark')
    if (mediaQueryList.matches) {
      setSystemTheme('dark')
    }
    mediaQueryList.addListener(handlePreferredSchemeChange)
    return () => mediaQueryList.removeListener(handlePreferredSchemeChange)
  }, [])

  return systemTheme
}
