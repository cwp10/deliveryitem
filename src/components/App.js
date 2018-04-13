import { Route, Switch } from 'react-router-dom'
import RestaurantList from './ui/RestaurantList'
import OrderPage from './ui//OrderPage'
import '../../stylesheets/App.scss'
import { Restaurants, Restaurant, OrderList } from './containers'

const App = () =>
  <div>
    <Route exact path="/" component={Restaurants}/>
    <Switch>
      <Route path="/:id/order" component={OrderList} />
      <Route path="/:id" component={Restaurant} />
    </Switch>
  </div>
  
export default App

