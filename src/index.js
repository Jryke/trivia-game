import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Routes from './components/Routes'
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <Routes />
  </Provider>,
  document.querySelector('#root')
)