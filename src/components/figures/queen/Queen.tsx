import { useState } from 'react';
import css from '../Figures.module.scss'
import cn from 'classnames';
import { boardType } from '../../types';
import canMoveQueen from './canMoveQueen';

function Queen({ color, onClick, clickedPosition, uid, board }: { board: boardType, color: string, onClick: Function, clickedPosition: string, uid: string }) {
    const [positionQueen, setPositionQueen] = useState('D' + (color === 'white' ? 1 : 8));


    board[positionQueen] = { moveTo: setPositionQueen, color: color, canMove: canMoveQueen.bind(null, color, positionQueen, board), type: 'queen' };

    const isClicked = clickedPosition === positionQueen;

    return (
        <div
            className={
                cn(
                    css.figure,
                    css[color],
                    css[`queen-${color}`],
                    css[positionQueen ? `position${positionQueen}` : 'beaten'],
                    css[isClicked ? 'clicked' : '']
                )
            }
            key={uid}
            onClick={onClick.bind(null, positionQueen)
            }>
        </div>
    )
}

export default Queen
