import { connect } from 'react-redux'
import RestaurantList from './ui/RestaurantList'
import RestaurantDetails from './/ui/RestaurantDetails'
import { compose } from 'redux'
import { changeQty } from '../actions'
import OrderPage from './/ui/OrderPage';

export const Restaurants = connect(
  ({ restaurants }, { match }) => ({
    restaurants: restaurants
  })
)(RestaurantList)

export const Restaurant = connect(
  ({ restaurants }, { match }) => findById(restaurants, match.params.id),
  dispatch => ({
    onQtyChange(restaurantId, id, qty) {
      dispatch(changeQty(restaurantId, id, qty))
    }
  })
)(RestaurantDetails)

export const OrderList = connect(
  ({ restaurants }, { match }) => findById(restaurants, match.params.id)
)(OrderPage)

const getFirstArrayItem = array => array[0]

const filterArrayById = (array, id) =>
  array.filter(item => item.id === id)

const findById = compose(
  getFirstArrayItem,
  filterArrayById
)