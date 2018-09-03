import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import Menu from './Menu'
import Configure_store from './Configure_store'

const store = Configure_store()

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Menu/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
