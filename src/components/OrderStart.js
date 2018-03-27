import React from 'react'

class OrderStart extends React.Component {
  render () {
    const {history} = this.props

    const goStart = (e) => {
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