import React, {Component} from 'react'
import './BackButton.css'
import history from '../history'

class BackButton extends Component {
  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (e) {
    history.goBack()
  }

  render () {
    return (
      <div>
        <div className="backbutton" onClick={this.clickHandler}></div>
      </div>
    )
  }
}

export default BackButton