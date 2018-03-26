import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import data from '../data/restaurants'

window.React = React

render(
  <App restaurants={data}/>,
  document.getElementById('react-container')
)