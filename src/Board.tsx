import { useState } from 'react'
// import whitebg from './assets/whitebg.svg'
// import viteLogo from '/vite.svg'
import './Board.css'
import Figure from './Figure';

type boardType = { [key: string]: { moveTo: Function, color: string, canMove: Function } };

const indexes = [8, 7, 6, 5, 4, 3, 2, 1];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const turnOrderRule: { [key: string]: string } = { 'white': 'black', 'black': 'white' };




function Board() {
  const board: boardType = {};

  const canMoveDict: { [key: string]: Function } = {
    'king': canMoveKing,
    'rook': canMoveRook,
    'bishop': canMoveBishop,
    'queen': canMoveQueen,
    'knight': canMoveKnight
  }

  const [clickedColumn, setClickedColumn] = useState('');
  const [turnOrder, setTurnOrder] = useState('white');
  const [posibleMoves, setPosibleMoves]: [posibleMoves: string[], setPosibleMoves: Function] = useState([]);

  const figures = [];

  const patterns = [['king', 'E'], ['queen', 'D'], ['knight', 'B'], ['knight', 'G'], ['rook', 'A'], ['rook', 'H'], ['bishop', 'C'], ['bishop', 'F']]

  /* КУДА МОЖНО ХОДИТЬ */

  function canMovePawn(color: string, from: string) {
    const [fromCol, b] = from.split('');
  
    const fromRow = Number(b);
  
    const moves = [];
  
    if (color === 'white') {
      if (fromRow < 8 && !board[fromCol + (fromRow + 1)]) moves.push(fromCol + (fromRow + 1)); 
      
      const index = letters.indexOf(fromCol);

      if (fromRow < 8 && index > 0 && board[letters[index - 1] + (fromRow + 1)] && board[letters[index - 1] + (fromRow + 1)].color !== color) moves.push(letters[index - 1] + (fromRow + 1));
      if (fromRow < 8 && index < 7 && board[letters[index + 1] + (fromRow + 1)] && board[letters[index + 1] + (fromRow + 1)].color !== color) moves.push(letters[index + 1] + (fromRow + 1));

      if (fromRow === 2) moves.push(fromCol + (fromRow + 2));
    }
  
    if (color === 'black') {
      if (fromRow > 1 && !board[fromCol + (fromRow - 1)]) moves.push(fromCol + (fromRow - 1)); 
      
      const index = letters.indexOf(fromCol);

      if (fromRow > 1 && index > 0 && board[letters[index - 1] + (fromRow - 1)] && board[letters[index - 1] + (fromRow - 1)].color !== color) moves.push(letters[index - 1] + (fromRow - 1));
      if (fromRow > 1 && index < 7 && board[letters[index + 1] + (fromRow - 1)] && board[letters[index + 1] + (fromRow - 1)].color !== color) moves.push(letters[index + 1] + (fromRow - 1));

      if (fromRow === 7) moves.push(fromCol + (fromRow - 2));
    }
  
    return moves;
  }

  function canMoveKing(color: string, from: string) {
    const [col, _] = from.split('');
    const row = Number(_);
    
    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    const dir = [ 1, 0, 1, 1, -1, 0, -1, -1, 1];

    for (let i = 0; i < dir.length - 1; i++) {
      const x = letters[indexCol + dir[i]];
      const y = indexes[indexRow + dir[i + 1]];

      const position = x + y;

      if (x && y && (!board[position] || board[position].color !== color)) moves.push(position);
    }

    return moves;
  }

  function canMoveRook(color: string, from: string) {
    const [col, _] = from.split('');
    const row = Number(_);
    
    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    for (let i = indexCol + 1; i < letters.length; i++) {
      const position = letters[i] + indexes[indexRow];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    for (let i = indexCol - 1; i >= 0; i--) {
      const position = letters[i] + indexes[indexRow];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    for (let i = indexRow + 1; i < indexes.length; i++) {
      const position = letters[indexCol] + indexes[i];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    for (let i = indexRow - 1; i >= 0; i--) {
      const position = letters[indexCol] + indexes[i];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    return moves;
  }

  function canMoveBishop(color: string, from: string) {
    const [col, _] = from.split('');
    const row = Number(_);
    
    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    for (let i = 1; indexCol + i < letters.length && indexRow + i < indexes.length; i++) {
      const position = letters[indexCol + i] + indexes[indexRow + i];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    for (let i = 1; indexCol - i >= 0 && indexRow - i >= 0; i++) {
      const position = letters[indexCol - i] + indexes[indexRow - i];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    for (let i = 1; indexCol + i < letters.length && indexRow - i >= 0; i++) {
      const position = letters[indexCol + i] + indexes[indexRow - i];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    for (let i = 1; indexCol - i >= 0 && indexRow + i < indexes.length; i++) {
      const position = letters[indexCol - i] + indexes[indexRow + i];

      if (board[position]) {
        if (board[position].color !== color) moves.push(position);

        break;
      }

      moves.push(position);
    }

    return moves;
  }

  function canMoveQueen(color: string, from: string) {
    const fromRook = canMoveRook(color, from);
    const fromBishop = canMoveBishop(color, from);

    return fromRook.concat(fromBishop);
  }

  function canMoveKnight(color: string, from: string) {
    const [col, _] = from.split('');
    const row = Number(_);
    
    const moves = [];

    const indexCol = letters.indexOf(col);
    const indexRow = indexes.indexOf(row);

    const dir = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

    for (const [a, b] of dir) {
      const col = letters[indexCol + a];
      const row = indexes[indexRow + b];

      const position = col + row;

      if (col && row && (!board[position] || board[position].color !== color)) moves.push(position);
    }

    return moves;
  }

  // проверяем на шах или на мат


  // генерим фигуры
  for (const [figure, letter] of patterns) {
    const [positionBlack, setPositionBlack] = useState(letter + 8);
    const [positionWhite, setPositionWhite] = useState(letter + 1);

    const figureBlack = <Figure position={positionBlack} type={figure} color='black' onClick={cellOnClick} clickedColumn={clickedColumn} />;
    const figureWhite = <Figure position={positionWhite} type={figure} color='white' onClick={cellOnClick} clickedColumn={clickedColumn} />;

    figures.push(figureBlack);
    figures.push(figureWhite);

    const some = () => {};

    board[positionBlack] = { moveTo: setPositionBlack, color: 'black', canMove: (canMoveDict[figure] ?? some).bind(null, 'black') };
    board[positionWhite] = { moveTo: setPositionWhite, color: 'white', canMove: (canMoveDict[figure] ?? some).bind(null, 'white') };
  }

  // генерим пешки
  for (const letter of letters) {
    const [positionBlack, setPositionBlack] = useState(letter + 7);
    const [positionWhite, setPositionWhite] = useState(letter + 2);

    const figureBlack = <Figure position={positionBlack} type='pawn' color='black' onClick={cellOnClick} clickedColumn={clickedColumn} />;
    const figureWhite = <Figure position={positionWhite} type='pawn' color='white' onClick={cellOnClick} clickedColumn={clickedColumn} />;

    figures.push(figureBlack);
    figures.push(figureWhite);

    board[positionBlack] = { moveTo: setPositionBlack, color: 'black', canMove: canMovePawn.bind(null, 'black') };
    board[positionWhite] = { moveTo: setPositionWhite, color: 'white', canMove: canMovePawn.bind(null, 'white') };
  }

  // клик по клетке или фигуре
  function cellOnClick(position: string) {
    // выбор чем ходить
    if (board[position] && board[position].color === turnOrder) {
      setClickedColumn(position);

      setPosibleMoves(board[position].canMove(position));

      return;
    }

    // переход на пустую клетку
    if (clickedColumn && posibleMoves.includes(position) && !board[position]) {
      board[clickedColumn].moveTo(position);

      setTurnOrder(turnOrderRule[turnOrder]);
      setClickedColumn('');
      setPosibleMoves([]);

      return;
    }

    // хаваем чужую фигуру
    if (clickedColumn && posibleMoves.includes(position) && board[position] && board[position].color !== turnOrder) {
      board[position].moveTo('');
      board[clickedColumn].moveTo(position);

      setTurnOrder(turnOrderRule[turnOrder]);
      setClickedColumn('');
      setPosibleMoves([]);

      return;
    }
  }

  return (
    <div className='board'>
      {indexes.map(row => <div className='row' key={'row' + row}>
        {letters.map(col =>
          <div 
            key={'cell' + col + row} 
            className={`cell cell-${
              (row + letters.indexOf(col)) % 2 ? 'black' : 'white'
            } ${
              posibleMoves.indexOf(col + row) > -1 ? 'posible' : ''
            } ${board[col + row] ? 'figure-inside' : ''}`} onClick={cellOnClick.bind(null, col + row)} />
        )}
      </div>)}
      {figures}
    </div>
  )
}

export default Board