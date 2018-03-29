import React from 'react'

class OrderStart extends React.Component {
  render () {
    const {onResetOrder, history} = this.props

    const goStart = (e) => {
      onResetOrder()
      history.push('/')
    }

    return (
      <button onClick={goStart}>
        주문 시작
      </button>
    )
  }
}

export default OrderStart