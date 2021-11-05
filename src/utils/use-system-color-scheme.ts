import { useEffect, useState } from 'react'

export type ColorScheme = 'light' | 'dark'

export const useSystemColorScheme = () => {
  const [systemTheme, setSystemTheme] = useState<ColorScheme>('light')

  const handlePreferredSchemeChange = (event: MediaQueryListEvent) => {
    if (event.matches) setSystemTheme('dark')
    else if (systemTheme !== 'light') setSystemTheme('light')
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark')
    if (mediaQueryList.matches) {
      setSystemTheme('dark')
    }
    mediaQueryList.addEventListener('change', handlePreferredSchemeChange)
    return () => {
      mediaQueryList.addEventListener('change', handlePreferredSchemeChange)
    }
  }, [])

  return systemTheme
}
