import '../../stylesheets/Restaurant.scss'

const Restaurant = ({id, photo, restaurant, description, orderList}) =>
  <div className="restaurant">
    <img src={photo} className="restaurant-photo" />
    <span className="restaurant-title">
      {restaurant}
    </span>
    <span className="restaurant-description">
      {description}
    </span>
  </div>

export default Restaurant