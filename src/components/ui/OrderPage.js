
import React from 'react'
import Topbar from './Topbar'
import OrderList from './OrderList'
import OrderStart from './OrderStart'

class OrderPage extends React.Component {
  render () {
    const { id, photo, restaurant, description, itemList, history } = this.props
    return (
      <div>
        <Topbar history={history}/>
        <div>
          {restaurant}
          {description}
          {itemList.map((item, i) =>
            <OrderList key={i}
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