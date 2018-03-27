import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import '../../stylesheets/Restaurant.scss'

class Restaurant extends Component {
  render () {
    const { id, photo, restaurant, description, history } = this.props
    return (
      <div className="restaurant" onClick={() => history.push(`/${id}`)}>
        <img src={photo} className="restaurant-photo" />
        <span className="restaurant-title">
          {restaurant}
        </span>
        <span className="restaurant-description">
          {description}
        </span>
      </div>
    )
  }
}

export default withRouter(Restaurant)