import * as React from 'react'

interface UseIntersectionObserverProps {
  options?: IntersectionObserverInit
  callback: IntersectionObserverCallback
}

export const useIntersectionObserver = (
  props: UseIntersectionObserverProps
) => {
  const ref = React.useRef<Element | null>(null)
  React.useEffect(() => {
    const observer = new IntersectionObserver(props.callback, props.options)
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [props])

  return ref
}

interface WithIntersectionObserverProps<T = Element>
  extends UseIntersectionObserverProps {
  children: (provided: {
    ref?: React.MutableRefObject<T | null> | React.LegacyRef<T | null>
  }) => JSX.Element
}

export const WithIntersectionObserver = (
  props: WithIntersectionObserverProps
) => {
  const ref = useIntersectionObserver({
    options: props.options,
    callback: props.callback,
  })

  return props.children({ ref })
}
