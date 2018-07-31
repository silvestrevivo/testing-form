import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from "redux-promise";
import reducers from 'reducers'


export default ({children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  )

  return <Provider store={store}>{children}</Provider>
}

// with the root component we avoid problems in testing regarding
// isolation about components to test Redux

// with initial state, we provide an optional argument to test Redux
