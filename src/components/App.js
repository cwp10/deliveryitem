import { Route, Switch } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import {Restaurant} from './containers'
import OrderPage from './OrderPage'
import '../../stylesheets/App.scss'
import { Restaurants } from './containers'

const App = () =>
  <Switch>
    <Route exact path="/:id" component={Restaurant} />
    <Route path="/:id/order" component={OrderPage} />
    <Route path="/" component={Restaurants}/>
  </Switch>

export default App

