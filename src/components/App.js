import { Route, Switch } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import RestaurantDetail from './RestaurantDetail'
import OrderPage from './OrderPage'
import '../../stylesheets/App.scss'

const App = ({ restaurants }) =>
  <Switch>
    <Route exact path="/:id" component={() => (
      <RestaurantDetail list={restaurants} />
    )} />
    <Route path="/:id/order" component={OrderPage} />
    <Route path="/" component={() => (
      <RestaurantList list={restaurants} />
    )} />
  </Switch>

export default App

