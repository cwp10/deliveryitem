import { Route, Switch } from 'react-router-dom'
import RestaurantList from './ui/RestaurantList'
import OrderPage from './ui//OrderPage'
import '../../stylesheets/App.scss'
import { Restaurants, Restaurant, OrderList } from './containers'

const App = () =>
  <Switch>
    <Route exact path="/:id" component={Restaurant} />
    <Route path="/:id/order" component={OrderList} />
    <Route exact path="/" component={Restaurants}/>
  </Switch>

export default App

