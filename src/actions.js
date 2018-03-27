import C from './constants'

export const addOrder = (id, order, price, qty) => ({
  type: C.ADD_ORDER,
  id,
  order,
  price,
  qty
})

export const changeQty = (id, qty) => ({
  type: C.CHANGE_QTY,
  id,
  qty
})
