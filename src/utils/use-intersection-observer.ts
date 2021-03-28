import * as React from 'react'

interface UseIntersectionObserverProps {
  options: IntersectionObserverInit
  callback: IntersectionObserverCallback
}

export const useIntersectionObserver = (
  props: UseIntersectionObserverProps
) => {
  const ref = React.useRef<HTMLElement | null>(null)
  React.useEffect(() => {
    const observer = new IntersectionObserver(props.callback, props.options)
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [props])

  return ref
}

interface WithIntersectionObserverProps extends UseIntersectionObserverProps {
  children: (
    ref?: React.MutableRefObject<HTMLElement | null>
  ) => React.ReactNode
}

export const WithIntersectionObserver = (
  props: WithIntersectionObserverProps
) => {
  const ref = useIntersectionObserver({
    options: props.options,
    callback: props.callback,
  })

  return props.children(ref)
}
