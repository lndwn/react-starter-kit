import * as React from 'react'

export const useResizeObserver = <T extends Element>(
  target: T,
  callback: ResizeObserverCallback
) => {
  React.useEffect(() => {
    const observer = new ResizeObserver(callback)
    if (target) {
      observer.observe(target)
    }
    return () => observer.disconnect()
  }, [target, callback])
}
