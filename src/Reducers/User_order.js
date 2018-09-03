const initialState = {
  cap: []
}

const user_order = (state = initialState, action) => {
  switch (action.type){
    case 'ADD_CAP':
      return { ...state, cap: [...state.cap, action.payload] }
    case 'MINUS_ITEM':
      state.cap.splice(action.toMinus, 1)
      return { cap: state.cap}
    default:
      return state
  }
}

export default user_order
