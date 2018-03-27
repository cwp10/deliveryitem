import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../stylesheets/RestaurantDetail.scss'

class RestaurantDetail extends React.Component {
  render() {
    const {list} = this.props
    const {params} = this.props.match
    const id = parseInt(params.id, 10)
    const detail = list.filter(e => e.id === id)[0]
    console.log(detail)
    
    return (
      <div>
        <div className="restaurant-detail">
          <img src={detail.photo} className="restaurant-detail-photo" />
          <div className="restaurant-detail-title">
            <h1>{detail.restaurant}</h1>
            <h2>{detail.description}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(RestaurantDetail)