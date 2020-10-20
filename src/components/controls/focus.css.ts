import { css } from 'styled-components'

export const focusStyles = css`
  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--box-shadow-color-focus);
  }
`
