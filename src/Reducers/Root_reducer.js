import { combineReducers } from 'redux'
import user_order from './User_order'
import coffee_list from './Coffee_list'

export default combineReducers({
  coffee_list,
  user_order
})
