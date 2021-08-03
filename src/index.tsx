import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './views/app'
import './style/font-face-inter.css'
import { GlobalStyle } from 'style/global-style'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
