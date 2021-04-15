import React from 'react'
import { render } from 'react-dom'
import './styles.css'
import Home from './components/Home'

let app = <Home />
let here = document.querySelector('#react')
render(app, here)
