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
} from 'styled-system'

const boxStyleProps = compose(space, color, layout)

interface BoxProps extends SpaceProps, ColorProps, LayoutProps {}
export const Box = styled.div<BoxProps>`
  ${boxStyleProps}
`

const flexStyleProps = compose(flexbox, flex)

interface FlexProps extends BoxProps, FlexboxProps, SSFlexProps {}
export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexStyleProps}
`
