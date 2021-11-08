import { useCallback, useEffect, useMemo } from 'react'
import { createContext } from 'utils/create-guarded-context'

export const [
  useContainerQueries,
  ContainerQueriesContextProvider,
  WithContainerQueries,
] = createContext<{
  observer: ResizeObserver
}>()

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
