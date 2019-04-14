import React from 'react'
import ReactDOM from 'react-dom'

function App(): React.ReactElement {
  return <h1>Hello World</h1>
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
