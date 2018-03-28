
import React from 'react'
import Topbar from './Topbar'
import OrderItem from './OrderItem'
import OrderStart from './OrderStart'
import '../../../stylesheets/OrderPage.scss'

class OrderPage extends React.Component {
  render () {
    const { id, photo, restaurant, description, itemList, history } = this.props
    let totalprice = 0
    for (let i = 0; i < itemList.length; i++) {
      if(itemList[i].qty > 0) {
        totalprice += itemList[i].qty * itemList[i].price
      }
    }

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
        <br/>
        <div>
          총 금액 : {totalprice} 원
        </div>
        <div className="order-button">
          <OrderStart history={history} />
        </div>
      </div>
    )
  }
}

export default OrderPage