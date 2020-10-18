import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { store } from 'store'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'theme'
import { userPreferredColorScheme, useDocumentTitle } from 'utils'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from 'style/global-style.sc'
import { Box, Centered, Flex, Icon } from 'components'

export const Root = () => {
  useDocumentTitle('Title')
  const preferedScheme = userPreferredColorScheme(['light', 'dark'], 'dark')

  return (
    <StoreProvider store={store}>
      <ThemeProvider
        theme={preferedScheme === 'light' ? defaultTheme : darkTheme}>
        <Router>
          <Centered width="100vw" height="100vh">
            <Flex alignItems="center">
              <Icon size="4" glyph="IconCheck" />
              <Box mr="1ch" />
              Hello World
            </Flex>
          </Centered>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  )
}
