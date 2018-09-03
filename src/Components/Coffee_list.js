import React, { Component } from 'react'
import PropTypes from 'prop-types'

import initial_localStorage from '../Function/localstorage.js'

/*отображает список покупок и кнопочку добавления в корзину*/
export default class Add_to_user_order extends Component {
//Добавляем товар в 'корзину'
  onSomeCoffeeAmountClick(data) {
    this.props.add_to_user_order(data)
    initial_localStorage.add(data)
  }

  render() {

    const listPrepare = this.props.coffee_list.list
    const list = listPrepare.map((curr, i, listPrepare)=>{
      return(
        <li key={curr.id}>
          {curr.name}
          <ul>
          {curr.amount.map((now, y, arr)=>{
            let id = y + curr.id
            return(
              <li key={id}><p>
                <span>{now[0]} : {now[1]}</span>
                <button onClick={this.onSomeCoffeeAmountClick.bind(
                  this, {id:(id+Math.round(Math.random()*100)), name: curr.name, amount: now[0], cost: now[1]})}
                >+</button>
              </p></li>
            )
          })}
          </ul>

        </li>)
    })
    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

Add_to_user_order.propTypes = {
  add_to_user_order: PropTypes.func.isRequired
}
