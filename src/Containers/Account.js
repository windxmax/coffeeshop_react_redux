import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import Account from '../Components/Account'
import * as minus_item from '../Actions/User_order_change_minus'
import * as addActions from '../Actions/Add_to_user_order'
import * as doubleAdd from '../Actions/Double_add'
import * as doubleMinus from '../Actions/Double_minus'
import initial_localStorage from '../Function/localstorage.js'
/*
Отображаем список добавленных покупок, возможности изменения(+/-)
пробрасываем неоходимые props и  dispatch
*/
class Acc extends Component {
  componentDidMount(nextProps){
      initial_localStorage(this.props.user_order.cap, this.props.addActions.add_to_user_order)
  }
  render() {
    const { cap } = this.props.user_order
    const { user_order_change_minus } = this.props.minus_item
    const { double_minus } = this.props.doubleMinus
    const { add_to_user_order } = this.props.addActions
    const { double_add } = this.props.doubleAdd
    return(
      <div>
        <Account
          cap={cap}
          minus_item={user_order_change_minus}
          double_minus={double_minus}
          add_to_user_order={add_to_user_order}
          double_add={double_add}
      />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user_order: state.user_order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    minus_item: bindActionCreators(minus_item, dispatch),
    addActions: bindActionCreators(addActions, dispatch),
    doubleAdd: bindActionCreators(doubleAdd, dispatch),
    doubleMinus: bindActionCreators(doubleMinus, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Acc)
