import React, {Component} from 'react'
import './DeliveryItem.css'

import {
  Link,
} from 'react-router-dom'

class DeliveryItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      text: this.props.text,
      key: this.props.id
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (e) {
    console.log(this.props.id + ' : ' + this.props.text)
  }

  render () {
    return (
      <div className="delivery-item" onClick={this.clickHandler}>
        <Link to={'/' + this.props.id}>
          <div>{this.props.text}</div>
        </Link>
      </div>
    )
  }
}

export default DeliveryItem
