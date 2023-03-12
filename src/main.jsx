import React from 'react'
import ReactDOM from 'react-dom/client'

import "./reset.css"

import {Attribution} from "./components/Attribution.jsx"
import {Board} from "./components/Board/Board.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Board/>
    <Attribution/>
  </React.StrictMode>
)
