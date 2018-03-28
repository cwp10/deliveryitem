
import React from 'react'
import Topbar from './Topbar'
import OrderItem from './OrderItem'
import OrderStart from './OrderStart'

class OrderPage extends React.Component {
  render () {
    const { id, photo, restaurant, description, itemList, history } = this.props
    return (
      <div>
        <Topbar history={history}/>
        <br/>
        <br/>
        <br/>
        <div>
          {restaurant}
          {description}
          {itemList.map((item, i) =>
            <OrderItem key={i}
              {...item}
            />
          )}
          <OrderStart history={history} />
        </div>
      </div>
    )
  }
}

export default OrderPage