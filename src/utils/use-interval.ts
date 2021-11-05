import { useEffect, useRef } from 'react'
import { useVisibility } from './use-visibility'

interface UseIntervalOptions {
  interval?: number
  isEnabled?: boolean
}

export const useInterval = (
  callback: () => void,
  { interval = 5000, isEnabled = true }: UseIntervalOptions
) => {
  const intervalId = useRef<number | null>(null)

  useVisibility((state) => {
    if (intervalId.current && state === 'hidden') {
      window.clearInterval(intervalId.current)
    }
    if (isEnabled && state === 'visible') {
      if (intervalId.current) clearInterval(intervalId.current)
      intervalId.current = window.setInterval(callback, interval)
    }
  }, [])

  useEffect(() => {
    if (!isEnabled && intervalId.current) {
      window.clearInterval(intervalId.current)
    }

    if (isEnabled && !document.hidden) {
      intervalId.current = window.setInterval(callback, interval ?? 5000)
    }

    return () => {
      if (intervalId.current) {
        window.clearInterval(intervalId.current)
      }
    }
  }, [isEnabled, interval, callback])
}
