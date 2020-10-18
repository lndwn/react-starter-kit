import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Root } from './views'
import './style/font-face-inter.css'

ReactDOM.render(<Root />, document.getElementById('root'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
