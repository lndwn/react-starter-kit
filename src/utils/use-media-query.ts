import * as React from 'react'

export const useMediaQuery = (mqString: string) => {
  const [match, setMatch] = React.useState<boolean | null>(null)

  const handleChange = React.useCallback(
    (event: MediaQueryListEvent | MediaQueryList) => setMatch(event.matches),
    []
  )

  React.useEffect(() => {
    const mqList = window.matchMedia(mqString)
    handleChange(mqList)

    mqList.addEventListener('change', handleChange)

    return () => mqList.removeEventListener('change', handleChange)
  }, [mqString])

  return match
}

interface WithMediaQueryProps {
  mqString: string
  children: React.ReactNode
}
