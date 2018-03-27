import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Backbutton from './Backbutton'
import RestaurantItem from './RestaurantItem'
import OrderButton from './OrderButton'
import '../../../stylesheets/RestaurantDetails.scss'

class RestaurantDetails extends Component {
  render () {
    const { id, photo, restaurant, description, itemList, onQtyChange, history } = this.props
    
    return (
      <div>
        <Backbutton history={history}/>
        <div className="restaurant-details">
          <img src={photo} className="restaurant-detail-photo" />
          <div className="restaurant-detail-title">
            <h3>{restaurant}</h3>
            <h4>{description}</h4>
          </div>
        </div>
        <OrderButton history={history} id={id}/>
        <div>
          {itemList.map((item, i) =>
            <RestaurantItem key={i} restaurantId={id} onQtyChange={onQtyChange}
              {...item}
            />
          )}
        </div>
      </div>
    )
  }
}

export default RestaurantDetails