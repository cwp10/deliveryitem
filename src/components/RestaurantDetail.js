import React from 'react'
import { withRouter } from 'react-router-dom'
import Backbutton from './Backbutton'
import RestaurantItem from './RestaurantItem'
import OrderButton from './OrderButton'
import '../../stylesheets/RestaurantDetail.scss'

class RestaurantDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: this.props.list
    }
  }

  render() {
    console.log(this.state.list)
    const {params} = this.props.match
    const id = parseInt(params.id, 10)
    const detail = this.state.list.filter(e => e.id === id)[0]

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
        <OrderButton history={this.props.history} id={detail.id}/>
        <div>
          {detail.itemList.map((item, i) =>
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