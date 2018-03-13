import React, {Component} from 'react'
import OrderItem from './OrderItem'

class OrderItemList extends Component {
  render() {
    const {orderList} = this.props
    const list = orderList.map(
      ({id, order, price}) => (
        <OrderItem
          id={id}
          order={order}
          price={price}
          key={id}
        />
      )
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default OrderItemList