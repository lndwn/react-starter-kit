import styled, { css, DefaultTheme } from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system'

interface Props
  extends SpaceProps<DefaultTheme>,
    ColorProps<DefaultTheme>,
    LayoutProps<DefaultTheme>,
    PositionProps<DefaultTheme>,
    BorderProps<DefaultTheme>,
    FlexboxProps<DefaultTheme>,
    GridProps<DefaultTheme> {}

const layoutStyleProps = compose(
  space,
  color,
  layout,
  position,
  border,
  flexbox,
  grid
)

const defaultCSS = css`
  min-width: 0px; /* default min-width to allow "text-overflow: ellipsis;" to work */
  -webkit-overflow-scrolling: touch; /* momentum scolling in webkit */
`

export const Block = styled.div<Props>`
  display: block;
  ${defaultCSS};
  ${layoutStyleProps};
`

export const Inline = styled.div<Props>`
  display: flex;
  flex-direction: 'row';
  ${defaultCSS};
  ${layoutStyleProps};
`

export const Stack = styled.div<Props>`
  display: flex;
  flex-direction: column;
  ${defaultCSS};
  ${layoutStyleProps};
`

export const Grid = styled.div<Props>`
  display: grid;
  ${defaultCSS};
  ${layoutStyleProps};
`
