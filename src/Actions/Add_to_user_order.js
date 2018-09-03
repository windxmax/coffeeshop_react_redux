export function add_to_user_order(cap) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_CAP',
      payload: cap
    })
  }
}
