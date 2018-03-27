import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Backbutton from './Backbutton'
import RestaurantItem from './RestaurantItem'
import OrderButton from './OrderButton'
import '../../stylesheets/RestaurantDetails.scss'

class RestaurantDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      history: this.props.history,
      id: this.props.id,
      photo: this.props.photo,
      restaurant: this.props.restaurant,
      description: this.props.description,
      itemList: this.props.itemList,
      onQtyChange: this.props.onQtyChange
    }
  }

  render () {
    return (
      <div>
        <Backbutton history={this.state.history}/>
        <div className="restaurant-details">
          <img src={this.state.photo} className="restaurant-detail-photo" />
          <div className="restaurant-detail-title">
            <h3>{this.state.restaurant}</h3>
            <h4>{this.state.description}</h4>
          </div>
        </div>
        <OrderButton history={this.state.history} id={this.state.id}/>
        <div>
          {this.state.itemList.map((item, i) =>
            <RestaurantItem key={i} restaurantId={this.state.id} onQtyChange={this.state.onQtyChange}
              {...item}
            />
          )}
        </div>
      </div>
    )
  }
}

export default RestaurantDetails