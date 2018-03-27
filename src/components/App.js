import { Route, Switch } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import RestaurantDetail from './RestaurantDetail'
import '../../stylesheets/App.scss'

const App = ({ restaurants }) =>
  <Switch>
    <Route exact path="/:id" component={() => (
      <RestaurantDetail list={restaurants} />
    )} />
    <Route path="/" component={() => (
      <div className="app">
        <RestaurantList list={restaurants} />
      </div>
    )} />
  </Switch>

export default App

