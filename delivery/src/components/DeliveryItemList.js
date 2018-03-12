import React, {Component} from 'react'
import DeliveryItem from './DeliveryItem'

class DeliveryItemList extends Component {
  render () {
    const {deliveries} = this.props
    const deliveryList = deliveries.map(
      ({id, text}) => (
        <DeliveryItem
          id={id}
          text={text}
          key={id}
        />
      )
    )
    return (
      <div>
       {deliveryList}
      </div>
    )
  }
}

export default DeliveryItemList;
