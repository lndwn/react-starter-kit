import * as React from 'react'
// import { Provider as StoreProvider } from 'react-redux'
// import { store } from './store/store'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from './theme/theme'
import { userPreferredColorScheme } from './utils/use-preferred-color-scheme'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './style/global-style.sc'
import { App } from './app'
import { useDocumentTitle } from './utils/use-document-title'

export const Root = () => {
  useDocumentTitle('Title')
  const preferedScheme = userPreferredColorScheme(['light', 'dark'], 'dark')

  return (
    // <StoreProvider store={store}>
    <ThemeProvider
      theme={preferedScheme === 'light' ? defaultTheme : darkTheme}>
      <Router>
        <App />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
    // </StoreProvider>
  )
}
