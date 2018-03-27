import React from 'react'

class OrderList extends React.Component {
  render() {
    return (
      <div>
        <span>음식 : {this.props.name}</span>
        <span>가격 : {this.props.price} 원</span>
        <span>수량 : {this.props.qty} 개</span>
      </div>
    )
  }
}

export default OrderList