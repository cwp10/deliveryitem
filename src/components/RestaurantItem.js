import React from 'react'
import '../../stylesheets/RestaurantItem.scss'

class RestaurantItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: props,
      qty: 0
    }
  }

  render() {
    return (
      <div className="restaurant-item">
        <span>
          {this.state.item.name}
        </span>
        <span>
          {this.state.item.price}
        </span>
        <span>
          {this.state.qty}
        </span>
      </div>
    )
  }
}

export default RestaurantItem