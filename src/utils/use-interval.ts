import * as React from 'react'

interface UseIntervalOptions {
  interval?: number
  isEnabled?: boolean
}

export const useInterval = (
  callback: () => void,
  { interval = 5000, isEnabled = true }: UseIntervalOptions,
) => {
  const intervalId = React.useRef<number | null>(null)

  const handleVisibilityChange = () => {
    if (intervalId.current && document.hidden) {
      window.clearInterval(intervalId.current)
    }
    if (isEnabled && !document.hidden) {
      if (intervalId.current) clearInterval(intervalId.current)
      intervalId.current = window.setInterval(callback, interval)
    }
  }

  React.useEffect(() => {
    if (!isEnabled && intervalId.current) {
      window.clearInterval(intervalId.current)
    }

    if (isEnabled && !document.hidden) {
      intervalId.current = window.setInterval(callback, interval ?? 5000)
    }

    window.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      if (intervalId.current) {
        window.clearInterval(intervalId.current)
      }
      window.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isEnabled, interval, callback])
}
