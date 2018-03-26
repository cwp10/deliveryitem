import Restaurant from './Restaurant'

const RestaurantList = ({list}) =>
  <div>
    {list.map((restaurant, i) =>
      <Restaurant key={i}
        {...restaurant}
      />
    )}
  </div>

export default RestaurantList