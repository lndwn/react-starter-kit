import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './views/app'
import './style/font-face-inter.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
