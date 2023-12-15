import { useState } from 'react';
import css from '../Figures.module.scss'
import cn from 'classnames';
import { boardType } from '../../types';
import canMoveKing from './canMoveKing';


function King({ color, onClick, clickedPosition, uid, board }: { board: boardType, color: string, onClick: Function, clickedPosition: string, uid: string }) {
  const [positionKing, setPositionKing] = useState('E' + (color === 'white' ? 1 : 8));

  board[positionKing] = { moveTo: setPositionKing, color: color, canMove: canMoveKing.bind(null, color, positionKing, board), type: 'king' };


  const isClicked = clickedPosition === positionKing;

  return (
    <div
      className={
        cn(
          css.figure,
          css[`king-${color}`],
          css[color],
          css[positionKing ? `position${positionKing}` : 'beaten'],
          css[isClicked ? 'clicked' : '']
        )
      }
      key={uid}
      onClick={onClick.bind(null, positionKing)
      }>
    </div>
  )
}

export default King
