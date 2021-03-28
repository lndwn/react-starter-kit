import * as React from 'react'

export const useResizeObserver = <T extends Element>(
  target: React.MutableRefObject<T | null>,
  callback: ResizeObserverCallback
) => {
  React.useEffect(() => {
    const observer = new ResizeObserver(callback)
    if (target.current) {
      observer.observe(target.current)
    }
    return () => observer.disconnect()
  }, [])
}
