import C from '../constants'

export const restaurants = (state = [], action = { type: null }) => {
  switch (action.type) {
    case C.CHANGE_QTY:
      return state.map(
        c => restaurant(c, action)
      )
    case C.RESET_ORDER:
      return state.map(
        c => restaurant(c, action)
      )
    default:
      return state
  }
}

export const restaurant = (state = {}, action = { type: null }) => {
  switch (action.type) {
    case C.CHANGE_QTY:
      if(state.id === action.restaurantId) {
        for(let i = 0; i < state.itemList.length; i++) {
          if(state.itemList[i].id === (action.id.toString())) {
            state.itemList[i].qty = action.qty
          }
        }
      }
      return state
    case C.RESET_ORDER:
      for(let i = 0; i < state.itemList.length; i++) {
        state.itemList[i].qty = 0
      }
      return state
    default:
      return state
  }
}