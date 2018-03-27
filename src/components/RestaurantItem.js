import React from 'react'
import '../../stylesheets/RestaurantItem.scss'

class RestaurantItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurantId: this.props.restaurantId,
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      qty: this.props.qty
    }
    this.onClickPlus = this.onClickPlus.bind(this)
    this.onClickMinus = this.onClickMinus.bind(this)
  }

  componentWillMount() {
    this.setState({qty: 0})
    this.props.onQtyChange(this.state.restaurantId, this.state.id, 0)
  }

  onClickPlus (e) {
    let newQty = this.state.qty + 1
    this.setState({qty: newQty})
    this.props.onQtyChange(this.state.restaurantId, this.state.id, newQty)
  }

  onClickMinus (e) {
    if(this.state.qty > 0) {
      let newQty = this.state.qty - 1
      this.setState({qty: newQty})
      this.props.onQtyChange(this.state.restaurantId, this.state.id, newQty)
    }
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