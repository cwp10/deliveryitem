import { Route, Switch } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import RestaurantListDetail from './RestaurantListDetail'
import '../../stylesheets/App.scss'

const App = ({ restaurants }) =>
  <Switch>
    <Route exact path="/:id" component={RestaurantListDetail} />
    <Route path="/" component={() => (
      <div className="app">
        <RestaurantList list={restaurants} />
      </div>
    )} />
  </Switch>

export default App

