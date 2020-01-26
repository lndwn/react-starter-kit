import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { GlobalStyle } from './styles/global-style'

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.text.tertiary};
`

interface IAppProps {
  heading?: string
}

export const App = ({ heading = 'Hello World' }: IAppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Heading>{heading}</Heading>
      <GlobalStyle />
    </ThemeProvider>
  )
}
