import React from 'react'
import '../../../stylesheets/Backbutton.scss'

class Backbutton extends React.Component {
  render () {
    const {history} = this.props
    const goBack = (e) => {
      history.goBack()
    }

    return (
      <div className="backButton" onClick={goBack}>
        <img src="assets/img/ui/backbtn.png" />
      </div>
    )
  }
}

export default Backbutton