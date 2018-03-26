import { withRouter } from 'react-router-dom'
import '../../stylesheets/Restaurant.scss'

const Restaurant = ({id, photo, restaurant, description, history}) =>
  <div className="restaurant" onClick={() => history.push(`/${id}`)}>
    <img src={photo} className="restaurant-photo" />
    <span className="restaurant-title">
      {restaurant}
    </span>
    <span className="restaurant-description">
      {description}
    </span>
  </div>

export default withRouter(Restaurant)