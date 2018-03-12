import React, { Component } from 'react';
import Template from './components/Template'
import DeliveryItemList from './components/DeliveryItemList';
import OrderItemList from './components/OrderItemList';
import BackButton from './components/BackButton';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const deliveries = [
  { id: 1, text: '식당1', orderList: [{id: 1, order: '밥1', price: '1000'}, {id: 2, order: '밥2', price: '2000'}]},
  { id: 2, text: '식당2', orderList: [{id: 1, order: '밥1', price: '1000'}, {id: 2, order: '밥2', price: '2000'}]},
  { id: 3, text: '식당3', orderList: [{id: 1, order: '밥1', price: '1000'}, {id: 2, order: '밥2', price: '2000'}]},
  { id: 4, text: '식당4', orderList: [{id: 1, order: '밥1', price: '1000'}, {id: 2, order: '밥2', price: '2000'}]},
  { id: 5, text: '식당5', orderList: [{id: 1, order: '밥1', price: '1000'}, {id: 2, order: '밥2', price: '2000'}]},
  { id: 6, text: '식당6', orderList: [{id: 1, order: '밥1', price: '1000'}, {id: 2, order: '밥2', price: '2000'}]},
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
    const {params} = this.props.match
    const id = parseInt(params.id, 10)
    const deliveryDetail = deliveries.filter(e => e.id === id)[0]
    return (
      <Template>
        <BackButton />
        <OrderItemList deliveryDetail={deliveryDetail} />
      </Template>
    )
  }
}

export default App;
