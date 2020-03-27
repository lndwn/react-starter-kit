import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from './theme/theme'
import { usePrefersColorScheme } from './utils/usePrefersColorScheme'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './style/global-style.sc'
import { App } from './app'

const Root = () => {
  const preferedScheme = usePrefersColorScheme(['light', 'dark'], 'dark')

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

ReactDOM.render(<Root />, document.getElementById('root'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
