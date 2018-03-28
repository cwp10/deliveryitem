import React from 'react'
import '../../../stylesheets/OrderItem.scss'

class OrderItem extends React.Component {
  render() {
    return (
      <div className={(this.props.qty !== 0) ? "order-item" : "oreder-item-hidden"}>
        <span>{this.props.name}</span>
        <span> {this.props.price}원</span>
        <span> x {this.props.qty}개</span>
        <span> 가격 {this.props.price * this.props.qty}원</span>
      </div>
    )
  }
}

export default OrderItem