import React from 'react'
import { withRouter } from 'react-router-dom'
import Backbutton from './Backbutton'
import RestaurantItem from './RestaurantItem'
import '../../stylesheets/RestaurantDetail.scss'

class RestaurantDetail extends React.Component {
  render() {
    const {list} = this.props
    const {params} = this.props.match
    const id = parseInt(params.id, 10)
    const detail = list.filter(e => e.id === id)[0]
    console.log(this.props)

    return (
      <div>
        <Backbutton history={this.props.history}/>
        <div className="restaurant-detail">
          <img src={detail.photo} className="restaurant-detail-photo" />
          <div className="restaurant-detail-title">
            <h3>{detail.restaurant}</h3>
            <h4>{detail.description}</h4>
          </div>
        </div>
        <div>
          {detail.orderList.map((item, i) =>
            <RestaurantItem key={i}
              {...item}
            />
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(RestaurantDetail)