import C from './constants'

export const addOrder = (id, order, price) => ({
  type: C.ADD_ORDER,
  id,
  order,
  price,
  qty: 0
})

export const changeQty = (id, qty) => ({
  type: C.CHANGE_QTY,
  id,
  qty
})
