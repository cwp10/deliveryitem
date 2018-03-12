import React, {Component} from 'react'
import './OrderItem.css'

class OrderItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      order: this.props.order,
      price: this.props.price,
      count: 0,
    }
    this.orderClick = this.orderClick.bind(this)
  }

  orderClick (e) {
    const newValue = this.state.count + 1
    this.setState({count: newValue})
  }

  render () {
    return (
      <div className="order-item" onClick={this.orderClick}>
        <span>음식 : {this.props.order} 가격 : {this.props.price} 수량 : {this.state.count}</span>
      </div>
    )
  }
}

export default OrderItem