import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import geopicApp from './reducers'

import App from './components/App'
import store from './store'

const geopic = document.getElementById('geopic')

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, geopic)
