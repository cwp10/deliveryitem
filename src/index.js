import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import data from '../data/restaurants'
import { HashRouter } from 'react-router-dom'

window.React = React

render(
  <HashRouter>
    <App restaurants={data}/>
  </HashRouter>,
  document.getElementById('react-container')
)