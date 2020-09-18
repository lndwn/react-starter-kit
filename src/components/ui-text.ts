import styled from 'styled-components'
import {
  color,
  ColorProps,
  compose,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
} from 'styled-system'

const styleProps = compose(color, space, typography, layout)

interface TextProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    LayoutProps {
  truncate?: boolean
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase'
}

export const UIText = styled.div<TextProps>`
  white-space: ${({ truncate }) => (truncate ? 'nowrap' : 'unset')};
  overflow: ${({ truncate }) => (truncate ? 'hidden' : 'unset')};
  text-overflow: ellipsis;
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : 'unset'};
  ${styleProps}
`
