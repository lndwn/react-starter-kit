import styled from 'styled-components'
import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  border,
  BorderProps,
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
  grid,
  GridProps as SSGridProps,
} from 'styled-system'

const boxStyleProps = compose(space, border, color, layout, overflow, position)

interface BoxProps
  extends SpaceProps,
    ColorProps,
    BorderProps,
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

const gridStyleProps = compose(flexStyleProps, grid)
interface GridProps extends FlexProps, SSGridProps {}
export const Grid = styled.div<GridProps>`
  display: grid;
  ${gridStyleProps}
`
