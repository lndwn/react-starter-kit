import { createGlobalStyle } from 'styled-components'
import { reset } from './reset.sc'

export const GlobalStyle = createGlobalStyle`
* {
  /* outline: 1px solid #f0f; */
}
  ${reset}

  html { 
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.text[0]};
    line-height: ${({ theme }) => theme.lineHeights.copy};
    background-color: ${({ theme }) => theme.colors.bg[0]};
    caret-color: unset;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text[1]};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h2 {
    color: ${({ theme }) => theme.colors.text[2]};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h3 {
    color: ${({ theme }) => theme.colors.text[2]};
    line-height: ${({ theme }) => theme.lineHeights.smallHeading};
  }

  a {
    color: unset;
  }
`
