import React from 'react'
import './Template.css'

const Template = ({children}) => {
  return (
    <div className="template">
      <section>
        {children}
      </section>
    </div>
  )
}

export default Template
