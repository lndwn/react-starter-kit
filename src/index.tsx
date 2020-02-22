import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { GlobalStyle } from './styles/global-style'
import { App } from './app'

const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
