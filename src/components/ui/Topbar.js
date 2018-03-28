import React from 'react'
import '../../../stylesheets/Topbar.scss'

class Topbar extends React.Component {
  render () {
    const {history} = this.props
    const goBack = (e) => {
      history.goBack()
    }

    return (
      <div className="button-bar">
        <div className="backButton" onClick={goBack}>
          <img src="assets/img/ui/backbtn.png" />
        </div>
      </div>
    )
  }
}

export default Topbar