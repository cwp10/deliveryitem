import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Topbar from './Topbar'
import RestaurantItem from './RestaurantItem'
import OrderButton from './OrderButton'
import '../../../stylesheets/RestaurantDetails.scss'

class RestaurantDetails extends Component {
  render() {
    const { id, photo, restaurant, description, itemList, onChangeQty, history } = this.props

    return (
      <div>
        <Topbar history={history} />
        <div className="restaurant-details">
          <div className="restaurant-contents">
            <img src={photo} className="restaurant-detail-photo" />
            <div className="restaurant-detail-title">
              <h1>{restaurant}</h1>
            </div>
            <div className="restaurant-detail-description">
              {description}
            </div>
        </div>
        <div className="restaurant-detail-orderBttuon">
            <OrderButton history={history} id={id} />
          </div>
        </div>
        <div>
          {itemList.map((item, i) =>
            <RestaurantItem key={i} restaurantId={id} onChangeQty={onChangeQty}
              {...item}
            />
          )}
        </div>
      </div>
    )
  }
}

export default RestaurantDetails