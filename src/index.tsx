import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './root'

ReactDOM.render(<Root />, document.getElementById('root'))

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
