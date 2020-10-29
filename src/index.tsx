import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Root } from './views'
import { store } from 'store'
import './style/font-face-inter.css'

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <Root />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept()
}
