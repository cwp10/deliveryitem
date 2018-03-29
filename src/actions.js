import C from './constants'

export const changeQty = (restaurantId, id, qty) => ({
  type: C.CHANGE_QTY,
  restaurantId,
  id,
  qty
})

export const resetOrder= () => ({
  type: C.RESET_ORDER,
})
