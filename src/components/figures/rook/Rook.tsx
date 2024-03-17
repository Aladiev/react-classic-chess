import { useState } from 'react';
import css from '../Figures.module.scss'
import cn from 'classnames';
import canMoveRook from './canMoveRook';
import { boardType } from '../../board/types';

function Rook({ letter, color, onClick, clickedPosition, uid, board }: { board: boardType, letter: string, color: string, onClick: Function, clickedPosition: string, uid: string }) {
    const [positionRook, setPositionRook] = useState(letter + (color === 'white' ? 1 : 8));

    board[positionRook] = { moveTo: setPositionRook, color: color, canMove: canMoveRook.bind(null, color, positionRook, board), type: 'rook' };

    const isClicked = clickedPosition === positionRook;

    return (
        <div
            className={
                cn(
                    css.figure, 
                    css[color],
                    css[`rook-${color}`],
                    css[positionRook ? `position${positionRook}` : 'beaten'],
                    css[isClicked ? 'clicked' : '']
                )
            }
            key={uid}
            onClick={onClick.bind(null, positionRook)
            }>
        </div>
    )
}

export default Rook
