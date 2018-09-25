import React, {Component} from 'react'

import initial_localStorage from '../Function/localstorage.js'

export default class Account extends Component{
  //Удалим товар
  deleteElem(data){
    //Проверка на 'дубирование' удаляемого элемента
    let checkToDel = false
    this.props.cap.map((curr, i, arr)=>{
      if (data[1].name.indexOf(curr.name)!==-1 && data[1].amount.indexOf(curr.amount)!==-1){
        if (curr.numeration > 1){
          curr.numeration -= 1
          this.props.double_minus([i, curr])
          initial_localStorage.double_change([i, curr])
          checkToDel = true
        }
      }
    })
    if (checkToDel == false){
      this.props.minus_item(data[0])
      initial_localStorage.minus(data[0])
    }
  }

  //Добавляем товар в 'корзину'
  onSomeCoffeeAmountClick(data) {
    data.numeration = 1 //Кол-во экземпляров товара
    //Проверка на 'дубирование' элемента в корзине
    let checkToAdd = false
    this.props.cap.map((curr, i, arr)=>{
      if (data.name.indexOf(curr.name)!==-1 && data.amount.indexOf(curr.amount)!==-1){
        curr.numeration += 1
        this.props.double_add([i, curr])
        initial_localStorage.double_change([i, curr])
        checkToAdd = true
      }
    })
    if (checkToAdd == false){
      this.props.add_to_user_order(data[0])
      initial_localStorage.add(data[0])
    }
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
          <span>{' x ' + curr.numeration}</span>
          <button onClick={this.deleteElem.bind(this, [i, curr])}>-</button>
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
