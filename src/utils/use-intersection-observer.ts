import { useCallback, useEffect, useState } from 'react'
import { createHook } from './create-hook'

interface UseIntersectionObserverProps<T = Element> {
  refs: React.MutableRefObject<T[]>
  options?: IntersectionObserverInit
}

export const [useIntersectionObserver, , WithIntersectionObserver] = createHook(
  (props: UseIntersectionObserverProps) => {
    const [elements, setElements] = useState<boolean[]>([])

    const callback = useCallback((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting)
          setElements((els) => {
            const newElse = [...els]
            newElse[i] = true
            return newElse
          })
        else
          setElements((els) => {
            const newElse = [...els]
            newElse[i] = false
            return newElse
          })
      })
    }, [])

    useEffect(() => {
      const observer = new IntersectionObserver(callback, props.options)
      if (props.refs?.current.length > 0) {
        props.refs.current.forEach((el) => {
          observer.observe(el)
        })
        setElements(([] as boolean[]).fill(false, 0, props.refs.current.length))
      }
      return () => observer.disconnect()
    }, [])

    return elements
  }
)
