import React, {Component} from 'react'
import './DeliveryItem.css'
import history from '../history'

class DeliveryItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      text: this.props.text,
      key: this.props.id,
      clicked: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (e) {
    history.push('/' + this.props.id)
  }

  render () {
    return (
      <div className="delivery-item" onClick={this.clickHandler}>
        <div>{this.props.text}</div>
      </div>
    )
  }
}

export default DeliveryItem
