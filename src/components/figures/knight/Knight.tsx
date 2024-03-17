import { useState } from 'react';
import css from '../Figures.module.scss'
import cn from 'classnames';
import canMoveKnight from './canMoveKnight';
import { boardType } from '../../board/types';

function Knight({ letter, color, onClick, clickedPosition, uid, board }: { board: boardType, letter: string, color: string, onClick: Function, clickedPosition: string, uid: string }) {
    const [positionKnight, setPositionKnight] = useState(letter + (color === 'white' ? 1 : 8));

    board[positionKnight] = { moveTo: setPositionKnight, color: color, canMove: canMoveKnight.bind(null, color, positionKnight, board), type: 'rook' };

    const isClicked = clickedPosition === positionKnight;

    return (
        <div
            className={
                cn(
                    css.figure,
                    css[color],
                    css[`knight-${color}`],
                    css[positionKnight ? `position${positionKnight}` : 'beaten'],
                    css[isClicked ? 'clicked' : '']
                )
            }
            key={uid}
            onClick={onClick.bind(null, positionKnight)
            }>
        </div>
    )
}

export default Knight
