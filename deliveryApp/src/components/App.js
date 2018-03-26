import RestaurantList from './RestaurantList'
import '../../stylesheets/App.scss'

const App = ({restaurants}) =>
  <div className="app">
    <RestaurantList list={restaurants} />
  </div>

export default App

