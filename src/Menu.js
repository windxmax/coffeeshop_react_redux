import React, {Component} from 'react'
import {Router, Route, Redirect } from 'react-router'
import {Switch, BrowserRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux'

//Список доступных для покупки товаров
import Coffee_list from './Containers/Coffee_list.js'
//Здесь будет находится все что может бытть связано с учетной записью
import Account from './Containers/Account'

export default class Menu extends Component{

  render(){
    const Header = () => {
      return(
        <nav>
          <ul>
            <li><Link to = '/Coffee_list'>Выбор кофе</Link></li>
            <li><Link to = '/Account'>Учетная запись</Link></li>
          </ul>
        </nav>
      )
    }
    const Main = () => {
      return(
        <Switch>
        <Route path='/Coffee_list' component={Coffee_list}/>
        <Route path='/Account' component={Account}/>
        <Redirect from='/' to='/Coffee_list'/>
        </Switch>
      )
    }

    return(
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
