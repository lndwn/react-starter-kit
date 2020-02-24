import React from 'react'

export type ColorScheme = 'light' | 'dark' | 'no-preference'

/**
 * usePrefersColorScheme
 * @param {ColorScheme[]} availableSchemes the schemes available in your theme
 * @param {ColorScheme} noPreferenceScheme the scheme to use if no preferences available
 * @returns {ColorScheme} the best match of the availableSchemes
 */
export const usePrefersColorScheme = (
  availableSchemes: ColorScheme[],
  noPreferenceScheme: ColorScheme
) => {
  const [bestMatch, setBestMatch] = React.useState<ColorScheme>(
    noPreferenceScheme
  )

  function handleMatchMediaChange(event: MediaQueryListEvent) {
    if (event.matches) {
      const scheme =
        (event.media.match(
          /(?<=prefers-color-scheme:\s)(\w+?-\w+|\w+)/
        )?.[0] as ColorScheme) ?? 'no-preference'
      setBestMatch(scheme)
    }
  }

  React.useEffect(() => {
    const mediaQueryList = availableSchemes.map((scheme) =>
      window.matchMedia(`(prefers-color-scheme: ${scheme})`)
    )
    const matchedIndex = mediaQueryList.findIndex((query) => query.matches)
    const match = availableSchemes[matchedIndex]
    setBestMatch(match)

    mediaQueryList.forEach((mediaQuery) =>
      mediaQuery.addListener(handleMatchMediaChange)
    )

    return () => {
      mediaQueryList.forEach((mediaQuery) =>
        mediaQuery.removeListener(handleMatchMediaChange)
      )
    }
  }, [availableSchemes])

  return bestMatch
}
