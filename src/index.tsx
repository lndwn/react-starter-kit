import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './views/app'
import './style/font-face-inter.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
