const initialState = {
  cap: []
}

const user_order = (state = initialState, action) => {
  switch (action.type){
    case 'ADD_CAP':
      return { ...state, cap: [...state.cap, action.payload] }
      case 'ADD_DOUBLE_CAP':
        state.cap.splice(action.doublePayload[0], 1, action.doublePayload[1])
        return {...state, cap: state.cap}
    case 'MINUS_ITEM':
      state.cap.splice(action.toMinus, 1)
      return { cap: state.cap}
    case 'MINUS_DOUBLE_CAP':
      state.cap.splice(action.doubleMinus[0], 1, action.doubleMinus[1])
      return {cap: state.cap}
    default:
      return state
  }
}

export default user_order
