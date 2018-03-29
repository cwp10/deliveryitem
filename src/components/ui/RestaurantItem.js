import React from 'react'
import '../../../stylesheets/RestaurantItem.scss'

class RestaurantItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurantId: this.props.restaurantId,
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      qty: this.props.qty,
      onChangeQty: this.props.onChangeQty
    }
    this.onClickPlus = this.onClickPlus.bind(this)
    this.onClickMinus = this.onClickMinus.bind(this)
  }

  componentWillMount() {
    //npmthis.setState({qty: 0})
    //this.props.onQtyChange(this.state.restaurantId, this.state.id, 0)
  }

  onClickPlus (e) {
    let newQty = this.state.qty + 1
    this.setState({qty: newQty})
    this.state.onChangeQty(this.state.restaurantId, this.state.id, newQty)
  }

  onClickMinus (e) {
    if(this.state.qty > 0) {
      let newQty = this.state.qty - 1
      this.setState({qty: newQty})
      this.state.onChangeQty(this.state.restaurantId, this.state.id, newQty)
    }
  }

  render() {
    return (
      <div className="restaurant-item">
        <div className="restaurant-item-name">음식명 : {this.state.name}</div>
        <span className="restaurant-item-price">가격 : {this.state.price} 원</span>

        <div className="restaurant-item-qty">
          <button onClick={this.onClickPlus}>+</button>
          <span> 수량 : {this.state.qty} 개 </span>
          <button onClick={this.onClickMinus}>-</button>
        </div>
      </div>
    )
  }
}

export default RestaurantItem