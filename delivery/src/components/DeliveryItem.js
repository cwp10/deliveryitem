import React, {Component} from 'react'
import './DeliveryItem.css'

import {
  Redirect,
} from 'react-router-dom'

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
    console.log(this.props.id + ' : ' + this.props.text)
    this.setState({clicked: true})
  }

  render () {
    if(this.state.clicked) {
      console.log(this.state.clicked)
      return <Redirect to={'/' + this.props.id} />
    }
    return (
      <div className="delivery-item" onClick={this.clickHandler}>
        <div>{this.props.text}</div>
      </div>
    )
  }
}

export default DeliveryItem
