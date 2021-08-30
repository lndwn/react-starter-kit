import { useEffect } from 'react'

export const usePageVisibility = (
  hiddenCallback: () => undefined,
  visibleCallback: () => undefined
) => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      hiddenCallback()
    } else {
      visibleCallback()
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
}
