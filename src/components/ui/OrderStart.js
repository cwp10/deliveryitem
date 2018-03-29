import React from 'react'
import '../../../stylesheets/OrderStart.scss'

class OrderStart extends React.Component {
  render () {
    const {onResetOrder, history} = this.props

    const goStart = (e) => {
      onResetOrder()
      history.push('/')
    }

    return (
      <button className="order-start" onClick={goStart}>
        주문 시작
      </button>
    )
  }
}

export default OrderStart