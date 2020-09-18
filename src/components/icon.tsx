import * as React from 'react'
import * as Icons from '../assets/icons'
import {
  color,
  ColorProps,
  compose,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
} from 'styled-system'
import styled from 'styled-components'

const wrapperStyleProps = compose(color, fontSize, space)

interface IconWrapperProps extends ColorProps, FontSizeProps, SpaceProps {}

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  ${wrapperStyleProps}
`

type Icon = typeof Icons

interface IconProps extends IconWrapperProps {
  glyph: keyof Icon
  size?: IconWrapperProps['fontSize']
}

export const Icon = (props: IconProps) => {
  const { glyph, size, color: colour, ...rest } = React.useMemo(() => props, [
    props,
  ])
  const Component = React.useMemo(() => Icons[glyph], [glyph])
  return (
    <IconWrapper
      fontSize={size}
      color={colour?.toString() ?? 'inherit'}
      {...rest}>
      <Component />
    </IconWrapper>
  )
}
