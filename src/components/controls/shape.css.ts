import { css } from 'styled-components'

export const shapeStyles = css`
  height: ${({ theme }) => theme.sizes[1]};
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.radii.small};
`
