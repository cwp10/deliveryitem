import React, { Component } from 'react';
import Template from './components/Template'
import DeliveryItemList from './components/DeliveryItemList';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const deliveries = [
  { id: 0, text: '식당1'},
  { id: 1, text: '식당2'},
  { id: 2, text: '식당3'},
  { id: 3, text: '식당4'},
  { id: 4, text: '식당5'},
  { id: 5, text: '식당6'},
]

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/:id' component={Detail} />
        <Route component={Main} />
      </Switch>
    </div>
  </Router>
)

class Main extends Component {
  render () {
    return (
      <Template>
        <DeliveryItemList deliveries={deliveries}/>
      </Template>
    )
  }
}

class Detail extends Component {
  render () {
    return (
      <Template>
        {this.props.match.params.id}
      </Template>
    )
  }
}

export default App;
