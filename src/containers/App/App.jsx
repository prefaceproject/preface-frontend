import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Registration from '../../authentication/Registration'
import Login from '../../authentication/Login'

import * as exampleSelectors from '../../store/example/selectors'
import * as exampleActions from '../../store/example/actions'

import './styles.css'

function App() {
  // initialize dispatch
  const dispatch = useDispatch()
  // read redux state
  const exampleReduxData = useSelector(exampleSelectors.getExampleData)
  const exampleReduxLoading = useSelector(exampleSelectors.getExampleLoading)
  const exampleReduxError = useSelector(exampleSelectors.getExampleError)

  // local state
  const [data, setData] = useState(null)

  const callBackendAPI = async () => {
    const response = await fetch('/test')
    const body = await response.json()

    if (response.status !== 200) {
      throw new Error(body.message)
    }
    return body
  }

  const exampleReduxSagaRequest = () => {
    // dispatch with desired action
    dispatch(exampleActions.exampleRequestData())
  }

  useEffect(() => {
    callBackendAPI()
      .then((res) => setData(res.express))
      .catch((err) => console.error(err))

    exampleReduxSagaRequest()
  }, [])

  if (exampleReduxLoading) return <div>LOADING...</div>

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
