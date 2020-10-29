import * as React from 'react'
import { debounce } from 'debounce'

export const usePointerInfo = () => {
  const [hasPointer, setHasPointer] = React.useState(false)
  const [pointerAccuracy, setPointerAccuracy] = React.useState(0)
  React.useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      setHasPointer(true)
      setPointerAccuracy(event.height)
    }
    window.addEventListener('pointerdown', handlePointer, { once: true })
    return () => window.removeEventListener('pointerdown', handlePointer)
  }, [])

  const [hasHover, setHasHover] = React.useState(false)
  React.useEffect(() => {
    const handleMouseOver = () => setHasHover(true)
    window.addEventListener('mouseover', handleMouseOver, { once: true })
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])

  const [viewportWidth, setViewportWidth] = React.useState(0)
  const [viewportHeight, setViewportHeight] = React.useState(0)
  React.useEffect(() => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)

    const handleResize = debounce(() => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }, 250)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    console.groupCollapsed('Interaction Info')
    console.info('hasHover', hasHover)
    console.info('hasPointer', hasPointer)
    console.info('pointerAccuracy', pointerAccuracy)
    console.info('viewportWidth', viewportWidth)
    console.info('viewportHeight', viewportHeight)
    console.groupEnd()
  })

  return {
    hasPointer,
    viewportWidth,
    viewportHeight,
  } as const
}
