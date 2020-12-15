import { css } from 'styled-components'

export const colorStyles = css`
  background-color: var(--background-color);
  border-color: var(--border-color);
  color: var(--color);
  transition: color 150ms ease, background-color 150ms ease;

  :active {
    background-color: var(--background-color-active);
  }
  :hover:not(:disabled) {
    background-color: var(--background-color-hover);
  }
  :disabled {
    background-color: var(--background-color-disabled);
    color: var(--color-disabled);
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px var(--box-shadow-color-focus);
  }

  :hover:not(:disabled) {
    background-color: var(--background-color-hover);
  }

  ::placeholder {
    color: var(--color-placeholder);
  }

  :disabled::placeholder {
    color: var(--color-disabled);
  }
`
