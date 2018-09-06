import React, {Component} from 'react'

import initial_localStorage from '../Function/localstorage.js'

export default class Account extends Component{
  //Удалим товар
  deleteElem(data){
    this.props.minus_item(data)
    initial_localStorage.minus(data)
  }
  //Добавляем товар в 'корзину'
  onSomeCoffeeAmountClick(data) {
    this.props.add_to_user_order(data)
    initial_localStorage.add(data)
  }

  render(){
    const cap = this.props.cap
    const user_list = cap.map((curr,i)=>{
      let id = i + curr.id
      return(
        <li key={i}>
          <h5>{curr.name}</h5>
          <span>{curr.amount}: </span>
          <span>{curr.cost}</span>
          <button onClick={this.deleteElem.bind(this, i)}>-</button>
          <button onClick={this.onSomeCoffeeAmountClick.bind(
            this, {id:(id+Math.round(Math.random()*100)), name: curr.name, amount: curr.amount, cost: curr.cost})}
          >+</button>
        </li>
      )
    })
    if (cap[0] !== ''){
      return(<div><ul>{user_list}</ul></div>)
    }else{
      return(<div>Вы ничего не выбрали!</div>)
    }
  }
}
