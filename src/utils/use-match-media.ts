import * as React from 'react'

export const useMatchMedia = (
  mediaQueryString: string,
  handleChange: (e: MediaQueryListEvent) => void
) => {
  React.useEffect(() => {
    const mqList = window.matchMedia(mediaQueryString)
    mqList.addEventListener('change', handleChange)
    const event = new window.MediaQueryListEvent('change', {
      matches: mqList.matches,
      media: mqList.media,
    })
    mqList.dispatchEvent(event)

    return () => {
      mqList.removeEventListener('change', handleChange)
    }
  }, [mediaQueryString, handleChange])
}
