import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'


export default ({children, initialState = {} }) => {
  return <Provider store={createStore(reducers, initialState)}>{children}</Provider>
}

// with the root component we avoid problems in testing regarding
// isolation about components to test Redux

// with initial state, we provide an optional argument to test Redux
