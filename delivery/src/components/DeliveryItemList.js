import React, {Component} from 'react'
import DeliveryItem from './DeliveryItem'

class DeliveryItemList extends Component {
  render () {
    const {deliverys} = this.props
    const deliveryList = deliverys.map(
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
