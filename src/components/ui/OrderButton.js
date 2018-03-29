import React from 'react'
import '../../../stylesheets/OrderButton.scss'

class OrderButton extends React.Component {
  
  render () {
    const {history} = this.props
    const id = this.props.id
    
    const goOrder = (e) => {
      history.push(`/${id}/order`)
    }

    return (
      <button className="order-button" onClick={goOrder}>
        주문하기
      </button>
    )
  }
}

export default OrderButton