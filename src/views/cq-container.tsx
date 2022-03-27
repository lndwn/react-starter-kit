import { useContainerQuery } from 'enhancers/container-queries-provider'
import React, { useEffect, useMemo, useRef } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { ConfigStyle, space, SpaceProps, system } from 'styled-system'

export const Container = (props: {
  className?: string
  breakpoints?: Record<string, number>
  children: React.ReactNode | React.ReactNode[]
}) => {
  const bpStr = useMemo(
    () => JSON.stringify(props.breakpoints),
    [props.breakpoints]
  )
  const ref = useRef<HTMLDivElement | null>(null)
  const cq = useContainerQuery()

  useEffect(() => {
    if (ref.current) {
      cq.observer.observe(ref.current, props.breakpoints)
    }
  }, [])

  return (
    <div ref={ref} className={props.className} data-breakpoints={bpStr}>
      {props.children}
    </div>
  )
}

export const Flex = styled(Container)<SpaceProps<DefaultTheme>>`
  &.sm {
    ${system({
      smColor: {
        property: 'color',
        scale: 'colors',
      },
    })}
  }
  &.md {
    ${system({
      mdColor: {
        property: 'color',
        scale: 'colors',
      },
    })}
  }
  &.lg {
    ${system({
      lgColor: {
        property: 'color',
        scale: 'colors',
      },
    })}
  }
  ${space};
`
