import { createGlobalStyle, css } from 'styled-components'

/**
 * css reset by @hankchizljaw
 */
const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

/**
 * inter font family by @rsms
 */
export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://rsms.me/inter/inter.css');

  html { 
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.copy};
  }

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h2 {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h3 {
    color: ${({ theme }) => theme.colors.text.tertiary};
    line-height: ${({ theme }) => theme.lineHeights.smallHeading};
  }
`
