import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

const store = createStore(reducers, {})
console.log('store.getState()', store.getState())

export default props => {
  return <Provider store={store}>{props.children}</Provider>
}

// with the root component we avoid problems in testing regarding
// isolation about components
