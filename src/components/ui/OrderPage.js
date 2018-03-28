
import React from 'react'
import Topbar from './Topbar'
import OrderItem from './OrderItem'
import OrderStart from './OrderStart'
import '../../../stylesheets/OrderPage.scss'

class OrderPage extends React.Component {
  render () {
    const { id, photo, restaurant, description, itemList, history } = this.props
    return (
      <div>
        <Topbar history={history}/>
        <div className="order-restaurant">
          <div className="order-restaurant-name">
            {restaurant}
          </div>
        </div>
        <br/>
        <div className="order-list">
          {itemList.map((item, i) =>
            <OrderItem key={i}
              {...item}
            />
          )}
        </div>
        <div className="order-button">
          <OrderStart history={history} />
        </div>
      </div>
    )
  }
}

export default OrderPage