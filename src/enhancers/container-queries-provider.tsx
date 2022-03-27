import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import {
  css as c,
  CssFunctionReturnType,
  SystemStyleObject,
} from '@styled-system/css'
import { createContext } from 'utils/create-guarded-context'
import { DefaultTheme } from 'styled-components'

export const [
  useContainerQuery,
  ContainerQueriesContextProvider,
  WithContainerQuery,
] = createContext<{
  observer: ResizeObserver
}>()

/**
 * # Usage
 *
 * 1. place the provider near the top of the render tree
 * 2. write your container component
 *    - define container `ref`
 *    - attach the `ref` to your container
 *    - call `useContainerQuery`
 *    - use the `observer.observe` fn on your `ref` with `breakpoints`
 *    - define styles for your breakpoint keys as classNames
 */

export const ContainerQueriesProvider = (props: {
  defaults: Record<string, number>
  children: React.ReactNode | React.ReactNode[]
}) => {
  const callback = useCallback((entries: ResizeObserverEntry[]) => {
    entries.forEach((entry) => {
      const provided = (entry.target as HTMLElement).dataset.breakpoints
      const breakpoints = provided
        ? (JSON.parse(provided) as Record<string, number>)
        : props.defaults
      Object.keys(breakpoints).forEach((breakpoint) => {
        const minWidth = breakpoints[breakpoint]
        if (entry.contentRect.width >= minWidth) {
          entry.target.classList.add(breakpoint)
        } else {
          entry.target.classList.remove(breakpoint)
        }
      })
    })
  }, [])

  const observer = useMemo(() => new window.ResizeObserver(callback), [])

  useEffect(() => () => void observer.disconnect(), [])

  return (
    <ContainerQueriesContextProvider value={{ observer }}>
      {props.children}
    </ContainerQueriesContextProvider>
  )
}

export const Container = (props: {
  className?: string
  breakpoints?: Record<string, number>
  children: React.ReactNode | React.ReactNode[]
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const cq = useContainerQuery()
  useEffect(() => {
    if (ref.current) {
      cq.observer.observe(ref.current, props.breakpoints)
    }
  }, [])

  const bpStr = useMemo(
    () => JSON.stringify(props.breakpoints),
    [props.breakpoints]
  )

  return (
    <div ref={ref} className={props.className} data-breakpoints={bpStr}>
      {props.children}
    </div>
  )
}
