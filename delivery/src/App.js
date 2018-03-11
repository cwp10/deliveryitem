import React, { Component } from 'react';
import Template from './components/Template'
import DeliveryItemList from './components/DeliveryItemList';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deliverys: [
        { id: 0, text: '식당1'},
        { id: 1, text: '식당2'},
        { id: 2, text: '식당3'},
        { id: 3, text: '식당4'},
        { id: 4, text: '식당5'},
        { id: 5, text: '식당6'},
      ]
    }
  }
  render() {
    const {deliverys} = this.state
    return (
      <Template>
        <DeliveryItemList deliverys={deliverys}/>
      </Template>
    )
  }
}

export default App;
