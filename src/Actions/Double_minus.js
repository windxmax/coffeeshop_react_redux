export function double_minus(cap) {
  return (dispatch) => {
    dispatch({
      type: 'MINUS_DOUBLE_CAP',
      doubleMinus: cap
    })
  }
}
