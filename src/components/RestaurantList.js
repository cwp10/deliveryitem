import Restaurant from './Restaurant'
import PropTypes from 'prop-types'

const RestaurantList = ({restaurants = []}) =>
  <div>
    {restaurants.map((restaurant, i) =>
      <Restaurant key={i}
        {...restaurant}
      />
    )}
  </div>

RestaurantList.propTypes = {
  restaurants: PropTypes.array
}

export default RestaurantList