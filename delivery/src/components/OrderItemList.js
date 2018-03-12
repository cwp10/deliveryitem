import React, {Component} from 'react'
import OrderItem from './OrderItem'

class OrderItemList extends Component {
  render() {
    console.log(this.props)
    const {deliveryDetail} = this.props
    const orderList = deliveryDetail.orderList.map(
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
        {orderList}
      </div>
    )
  }
}

export default OrderItemList