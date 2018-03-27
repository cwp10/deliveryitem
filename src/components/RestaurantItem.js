import React from 'react'
import '../../stylesheets/RestaurantItem.scss'

class RestaurantItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      qty: 0
    }
    this.onClickPlus = this.onClickPlus.bind(this)
    this.onClickMinus = this.onClickMinus.bind(this)
  }

  onClickPlus (e) {
    const newValue = this.state.qty + 1
    this.setState({qty: newValue})
  }

  onClickMinus (e) {
    (this.state.qty > 0) ? this.setState({qty: this.state.qty - 1}) : 0
  }

  render() {
    return (
      <div className="restaurant-item">
        <span>음식 : {this.state.name}</span>
        <span>가격 : {this.state.price} 원</span>
        
        <button onClick={this.onClickPlus}>+</button>
        <span>수량 : {this.state.qty} 개</span>
        <button onClick={this.onClickMinus}>-</button>
      </div>
    )
  }
}

export default RestaurantItem