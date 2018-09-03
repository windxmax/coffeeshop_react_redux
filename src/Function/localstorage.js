//Функция помогает совершать операции с localstorageи подгружать данные в состояние
export default function initial_localStorage(state, dispatch){
  let currStorage = JSON.parse(localStorage.getItem('data'))

  //Проверяем содержание store и  localStorage на идентичность
  function deepEqual (obj1, obj2){
   return JSON.stringify(obj1)===JSON.stringify(obj2);
  }
  //И Если нужно передаенм данные из localStorage в store
  if (deepEqual(state, currStorage) == false && currStorage !== null){

        currStorage.forEach((i)=>{
          dispatch(i)
        })
  }
}

/*
Добавление единицы товара в localstorage. такое же добавление в store происходит в user_order
*/
initial_localStorage.add = function(addItem){
  let addElem = addItem
  let prev = JSON.parse(localStorage.getItem('data'))
  if (prev === null){
    var newStorage = [addElem]
    localStorage.setItem('data', JSON.stringify(newStorage))
  }else{
    prev.push( addElem)
    localStorage.setItem('data', JSON.stringify(prev))
  }
}
/*
Удаление единицы товара в localstorage. такое же удаление в store происходит в user_order
*/

initial_localStorage.minus = function(delItem){
  let data = JSON.parse(localStorage.getItem('data'))
  data.splice(delItem, 1)
  localStorage.setItem('data', JSON.stringify(data))
}
