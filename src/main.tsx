import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavigationMenu } from './components/navigationMenu/index.tsx'
import Board from './components/board/Board.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavigationMenu/>
    <Board />
  </React.StrictMode>,
)
