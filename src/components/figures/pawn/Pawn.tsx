import { useEffect, useState } from 'react';
import css from '../Figures.module.scss'
import cn from 'classnames';
import canMovePawn from './canMovePawn';
import { boardType } from '../../types';


function Pawn({ letter, color, onClick, clickedPosition, uid, board }: { board: boardType, letter: string, color: string, onClick: Function, clickedPosition: string, uid: string }) {
    const [positionPawn, setPositionPawn] = useState(letter + (color === 'white' ? 2 : 7));  

    useEffect(() => {
        board[positionPawn] = { moveTo: setPositionPawn, color: color, canMove: canMovePawn.bind(null, color, positionPawn, board), type: 'pawn' };
    });

    const isClicked = clickedPosition === positionPawn;

    return (
        <div
            className={
                cn(
                    css.figure, 
                    css[color],
                    css[`pawn-${color}`],
                    css[positionPawn ? `position${positionPawn}` : 'beaten'],
                    css[isClicked ? 'clicked' : '']
                )
            }
            key={uid}
            onClick={onClick.bind(null, positionPawn)
            }>
        </div>
    )
}

export default Pawn
