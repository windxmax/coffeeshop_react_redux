const initialState = {
  list: []
}

const coffee_list = (state = initialState, action) => {
  switch (action.type){
    case 'LOAD__COFFEE_LIST':
      return { ...state, list: action.load }
    default:
      return state
  }
}

export default coffee_list
