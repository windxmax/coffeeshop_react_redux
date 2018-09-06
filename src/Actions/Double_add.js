export function double_add(cap) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_DOUBLE_CAP',
      doublePayload: cap
    })
  }
}
