import { useEffect } from 'react'

export const useResizeObserver = <T extends Element>(
  target: T,
  callback: ResizeObserverCallback
) => {
  useEffect(() => {
    const observer = new ResizeObserver(callback)
    if (target) {
      observer.observe(target)
    }
    return () => observer.disconnect()
  }, [target, callback])
}
