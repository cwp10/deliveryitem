import React from 'react'
import '../../stylesheets/RestaurantItem.scss'

class RestaurantItem extends React.Component {
  render() {
    const item = this.props
    return (
      <div className="restaurant-item">
        <span>
          {item.order}
        </span>
        <span>
          {item.price}
        </span>
      </div>
    )
  }
}

export default RestaurantItem