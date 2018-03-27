import { Route, Switch } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import OrderPage from './OrderPage'
import '../../stylesheets/App.scss'
import { Restaurants, Restaurant } from './containers'

const App = () =>
  <Switch>
    <Route exact path="/:id" component={Restaurant} />
    <Route path="/:id/order" component={OrderPage} />
    <Route exact path="/" component={Restaurants}/>
  </Switch>

export default App

