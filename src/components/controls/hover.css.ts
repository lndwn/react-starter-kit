import { css } from 'styled-components'

export const hoverStyles = css`
  &:hover:not(:disabled) {
    background-color: var(--background-color-hover);
  }
`
