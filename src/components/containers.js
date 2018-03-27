import {connect} from 'react-redux'
import RestaurantList from './RestaurantList'
import RestaurantDetail from './RestaurantDetail'
import {compose} from 'redux'

export const Restaurant = connect(
  ({ restaurants }, { match }) => findById(restaurants, match.params.id)
)(RestaurantDetail)

export const Restaurants = connect(
  ({ restaurants }) => ({
    restaurants
  })
)(RestaurantList)

const getFirstArrayItem = array => array[0]

const filterArrayById = (array, id) =>
  array.filter(item => item.id === id)

const findById = compose(
  getFirstArrayItem,
  filterArrayById
)