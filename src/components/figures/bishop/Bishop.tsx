import { useState } from 'react';
import css from '../Figures.module.scss'
import cn from 'classnames';
import canMoveBishop from './canMoveBishop';
import { boardType } from '../../board/types';


function Bishop({ letter, color, onClick, clickedPosition, uid, board }: { board: boardType, letter: string, color: string, onClick: Function, clickedPosition: string, uid: string }) {
    const [positionBishop, setPositionBishop] = useState(letter + (color === 'white' ? 1 : 8));

    board[positionBishop] = { moveTo: setPositionBishop, color: color, canMove: canMoveBishop.bind(null, color, positionBishop, board), type: 'bishop' };

    const isClicked = clickedPosition === positionBishop;

    return (
        <div
            className={
                cn(
                    css.figure,
                    css[color],
                    css[`bishop-${color}`],
                    css[positionBishop ? `position${positionBishop}` : 'beaten'],
                    css[isClicked ? 'clicked' : '']
                )
            }
            key={uid}
            onClick={onClick.bind(null, positionBishop)
            }>
        </div>
    )
}

export default Bishop
