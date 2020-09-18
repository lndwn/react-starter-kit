import styled from 'styled-components'
import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  flex,
  FlexProps as SSFlexProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  overflow,
  OverflowProps,
} from 'styled-system'

const boxStyleProps = compose(space, color, layout, overflow, position)

interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    OverflowProps,
    PositionProps {}
export const Box = styled.div<BoxProps>`
  ${boxStyleProps}
`

const flexStyleProps = compose(flexbox, flex, boxStyleProps)

interface FlexProps extends BoxProps, FlexboxProps, SSFlexProps {}
export const Flex = styled.div<FlexProps>`
  display: flex;
  ${flexStyleProps}
`

export const Centered = styled(Flex)`
  align-items: center;
  justify-content: center;
`
