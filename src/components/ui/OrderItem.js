import React from 'react'
import '../../../stylesheets/OrderItem.scss'

class OrderItem extends React.Component {
  render() {
    return (
      <div className={(this.props.qty !== 0) ? "order-item" : "oreder-item-hidden"}>
        <span>음식 : {this.props.name}</span>
        <span>가격 : {this.props.price} 원</span>
        <span>수량 : {this.props.qty} 개</span>
      </div>
    )
  }
}

export default OrderItem