import { createStore, applyMiddleware } from 'redux'
import Root_reducer from './Reducers/Root_reducer'
import thunk from 'redux-thunk'

export default function Configure_store(initialState) {
  const store = createStore(Root_reducer, initialState, applyMiddleware(thunk))
  return store
}
