import { useEffect, useRef } from 'react'
import { createHook } from './create-hook'

export const [useTraceUpdate] = createHook((props: Record<string, unknown>) => {
  const prev = useRef(props)
  useEffect(() => {
    const changedProps = Object.entries(props).reduce(
      (ps: Record<string, unknown>, [k, v]) => {
        if (prev.current[k] !== v) {
          ps[k] = [prev.current[k], v]
        }
        return ps
      },
      {}
    )
    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps)
    }
    prev.current = props
  })
})
