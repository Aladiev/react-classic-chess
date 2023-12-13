// import { useState } from 'react'
// import whitebg from './assets/whitebg.svg'
// import viteLogo from '/vite.svg'
import './Figure.css'

function Figure({ position, type, color, onClick, clickedColumn }: { position: string, type: string, color: string, onClick: Function, clickedColumn: string }) {    
    const isClicked = clickedColumn === position;
    
    return (
        <div 
            className={
                `figure ${type}-${color} position${position} ${ isClicked ? 'clicked' : '' }`
            } 
            key={
                type + '-' + color + position} onClick={onClick.bind(null, position)
            }>
        </div>
    )
}

export default Figure
