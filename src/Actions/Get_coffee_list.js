export function get_coffee_list(list){
  return (dispatch) => {
    dispatch({
      type: 'LOAD__COFFEE_LIST',
      load: list
    })
  }
}
