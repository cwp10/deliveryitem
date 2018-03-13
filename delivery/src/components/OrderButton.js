import React, {Component} from 'react'
import history from '../history'
import './OrderButton.css'

class OrderButton extends Component {
  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (e) {

  }

  render () {
    return (
      <div>
        <div className="orderbutton" onClick={this.clickHandler}></div>
      </div>
    )
  }
}

export default OrderButton