import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import Coffee_list from '../Components/Coffee_list'
import * as addActions from '../Actions/Add_to_user_order'
import * as loadCoffeeList from '../Actions/Get_coffee_list'
import * as doubleAdd from '../Actions/Double_add'
import initial_localStorage from '../Function/localstorage.js'

/*
Здесь загружаем список доступных товаров,прокидываем в компоненту необходимые props и  dispatch
*/
class Add extends Component {
  state = {isReady: false}
  componentDidMount() {
    const { get_coffee_list } = this.props.loadCoffeeList
    //Запрос будет осуществляться постоянно, количество позицй-то меняется
    fetch('http://localhost:3000/src/Coffe_list_data.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        get_coffee_list(data)
        this.setState({isReady: true})
      })
      .catch((error)=>{console.log('Ошибка в fetch контейнера coffee_list '+ error)})
  }
//Сверяем текущий state и  localStorage, помогает сохранить данные после f5 страницы
  componentWillReceiveProps(nextProps){
      initial_localStorage(nextProps.user_order.cap, this.props.addActions.add_to_user_order)
  }

  render() {
    const { cap } = this.props.user_order
    const { add_to_user_order } = this.props.addActions
    const { double_add } = this.props.doubleAdd
    if (this.state.isReady === true) {
    return(
      <div>
        <Coffee_list
          cap={cap}
          add_to_user_order={add_to_user_order}
          double_add={double_add}
          coffee_list={this.props.coffee_list}
      />
      </div>
    )}else{
      return(<div>Загрузка</div>)
    }
  }
}

function mapStateToProps (state) {
  return {
    user_order: state.user_order,
    coffee_list: state.coffee_list
  }

}

function mapDispatchToProps(dispatch) {
  return {
    addActions: bindActionCreators(addActions, dispatch),
    loadCoffeeList: bindActionCreators(loadCoffeeList, dispatch),
    doubleAdd: bindActionCreators(doubleAdd, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
