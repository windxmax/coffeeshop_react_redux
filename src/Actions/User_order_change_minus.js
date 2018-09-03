export function user_order_change_minus(data) {
  return (dispatch) => {
    dispatch({
      type: 'MINUS_ITEM',
      toMinus: data
    })
  }
}
