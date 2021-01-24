import React from 'react'

import { Provider } from 'react-redux'
import App from './containers/App/App'
import configureStore from './configureStore'
import { BrowserRouter } from 'react-router-dom'
const store = configureStore()

const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </Provider>
  )
}

export default Main
