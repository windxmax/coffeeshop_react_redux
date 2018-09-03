import React, {Component} from 'react'

import initial_localStorage from '../Function/localstorage.js'

export default class Account extends Component{
  //Удалим товар
  deleteElem(elem){
    this.props.minus_item(elem)
    initial_localStorage.minus(elem)
  }
  render(){
    const cap = this.props.cap
    const user_list = cap.map((curr,i)=>{
      return(
        <li key={i}>
          <h5>{curr.name}</h5>
          <span>{curr.amount}: </span>
          <span>{curr.cost}</span>
          <button onClick={this.deleteElem.bind(this, i)}>-</button>
        </li>
      )
    })
    //переделать проверку!
    if (cap[0] !== ''){
      return(<div><ul>{user_list}</ul></div>)
    }else{
      return(<div>Вы ничего не выбрали!</div>)
    }
  }
}
