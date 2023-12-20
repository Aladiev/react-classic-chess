import { useEffect, useState } from 'react'
import css from './Board.module.scss';
import { kingUnderAttack } from '../kingUnderAttack';
import { cloneBoard } from '../cloneBoard';
import cn from 'classnames';
import { letters, indexes } from "./../config.json";
import { boardType, boardTypeWithoutMoving } from '../types';
import generateFigures from './generateFigures';


const turnOrderRule: { [key: string]: string } = { 'white': 'black', 'black': 'white' };

function Board() {
  const board: boardType = {};

  const [check, setCheck] = useState(false);
  const [checkmate, setCheckmate] = useState(false);
  const [clickedPosition, setClickedPosition] = useState('');
  const [turnOrder, setTurnOrder] = useState('white');
  const [posibleMoves, setPosibleMoves]: [posibleMoves: string[], setPosibleMoves: Function] = useState([]);

  const [isFigureInside, setIsFigureInside] = useState<Boolean>(false)
  const [figureInsideCoordination, setFigureInsideCoordination] = useState<String>('')

  // проверяем на шах или на мат
  function checkForCheckmate(board: boardTypeWithoutMoving) {
    const result = { check: false, checkmate: false };

    for (const position in board) {
      if (!board[position]) continue;

      const posibles = board[position].canMove();

      for (const posiblePosition of posibles) {
        if (board[posiblePosition] && board[posiblePosition].type === 'king' && board[posiblePosition].color !== board[position].color) {
          result.check = true;

          const kingMoves = board[posiblePosition].canMove();

          if (!kingMoves.length) {
            let flag = true;

            for (const friendPosition in board) {
              if (!board[friendPosition] || board[friendPosition].color !== board[posiblePosition].color || board[friendPosition].type === 'king') continue;

              const friendMoves = board[friendPosition].canMove();

              for (const friendMove of friendMoves) {
                const boardCopy = cloneBoard(board);

                boardCopy[friendMove] = boardCopy[friendPosition];
                delete boardCopy[friendPosition];

                const checkAfterFriendMove = kingUnderAttack(boardCopy, board[posiblePosition].color);

                if (!checkAfterFriendMove) flag = false;
              }
            }

            if (flag) result.checkmate = true;
          }
        }
      }
    }

    return result;
  }

  // генерим пешки
  const figures = generateFigures(board, clickedPosition, cellOnClick);

  const checkingResult = checkForCheckmate(board);

  if (checkingResult.check != check) setCheck(!check);
  if (checkingResult.checkmate != checkmate) setCheckmate(!checkmate);

  // клик по клетке или фигуре
  function cellOnClick(position: string) {
    // выбор чем ходить
    if (board[position] && board[position].color === turnOrder) {
      setClickedPosition(position);

      setPosibleMoves(board[position].canMove());

      return;
    }

    // переход на пустую клетку
    if (clickedPosition && posibleMoves.includes(position) && !board[position]) {
      board[clickedPosition].moveTo(position);
      delete board[clickedPosition];

      setTurnOrder(turnOrderRule[turnOrder]);
      setClickedPosition('');
      setPosibleMoves([]);

      return;
    }

    // хаваем чужую фигуру
    if (clickedPosition && posibleMoves.includes(position) && board[position] && board[position].color !== turnOrder) {
      board[position].moveTo('');
      delete board[position];

      board[clickedPosition].moveTo(position);
      delete board[clickedPosition];

      setTurnOrder(turnOrderRule[turnOrder]);
      setClickedPosition('');
      setPosibleMoves([]);

      return;
    }
  }

  useEffect(() => {
    posibleMoves.forEach((e) => {
      if(board[e]){
        setIsFigureInside(true)
        setFigureInsideCoordination(e)
      }
    })
  },[board])

  return (
    <>

      <div className={css.board}>
        {indexes.map(row => <div className={css.row} key={'row' + row}>
          {letters.map(col => {
            const position = col + row;

            return <div
              key={'cell' + position}
              className={
                cn(
                  css.cell,
                  css[`cell-${(row + letters.indexOf(col)) % 2 ? 'black' : 'white'}`],
                  css[posibleMoves.indexOf(position) > -1 ? 'posible' : ''],
                  css[isFigureInside && figureInsideCoordination === position ? 'figure-inside' : '']
                )
              }
              onClick={cellOnClick.bind(null, position)} />
          })}
        </div>)}

        {figures}
      </div>
      {check ? <div>CHECK</div> : ''}
      {checkmate ? <div>CHECKMATE</div> : ''}
    </>
  )
}

export default Board