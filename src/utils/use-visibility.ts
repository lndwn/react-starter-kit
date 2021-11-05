import { useEffect } from 'react'

export const useVisibility = (
  callback: (state: VisibilityState) => void,
  dependencies: unknown[]
) => {
  const handleVisibilityChange = () => callback(document.visibilityState)

  useEffect(() => {
    window.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [dependencies])
}
