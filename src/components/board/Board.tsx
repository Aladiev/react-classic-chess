import { useEffect, useState } from "react";
import css from "./Board.module.scss";
import { kingUnderAttack } from "./kingUnderAttack";
import { cloneBoard } from "./cloneBoard";
import cn from "classnames";
import { letters, indexes } from "./config.json";
import { boardType, boardTypeWithoutMoving } from "./types";
import generateFigures from "./generateFigures";
import GameOverModal from "../gameOverModal";
import { useDispatch, useSelector } from "react-redux";
import { boardSelector, clickedPositionSelector, posibleMovesSelector } from "../../redux/selectors/selectors";
import FiguresList from "../../widgets/FiguresList/FiguresList";
import { initBoardWithFigures, cellOnClick } from "../../redux/slice/chess";



function Board() {
  const dispatch = useDispatch();

  const newBoard: boardType = useSelector(boardSelector);

  const [check, setCheck] = useState(false);
  const [checkmate, setCheckmate] = useState(false);


  const posibleMoves = useSelector(posibleMovesSelector);

  // проверяем на шах или на мат
  function checkForCheckmate(board: boardTypeWithoutMoving) {
    const result = { check: false, checkmate: false };

    for (const position in board) {
      if (!board[position]) continue;

      const posibles = board[position].canMove();

      for (const posiblePosition of posibles) {
        if (
          board[posiblePosition] &&
          board[posiblePosition].type === "king" &&
          board[posiblePosition].color !== board[position].color
        ) {
          result.check = true;

          const kingMoves = board[posiblePosition].canMove();

          if (!kingMoves.length) {
            let flag = true;

            for (const friendPosition in board) {
              if (
                !board[friendPosition] ||
                board[friendPosition].color !== board[posiblePosition].color ||
                board[friendPosition].type === "king"
              )
                continue;

              const friendMoves = board[friendPosition].canMove();

              for (const friendMove of friendMoves) {
                const boardCopy = cloneBoard(board);

                boardCopy[friendMove] = boardCopy[friendPosition];
                delete boardCopy[friendPosition];

                const checkAfterFriendMove = kingUnderAttack(
                  boardCopy,
                  board[posiblePosition].color
                );

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


  useEffect(() => {
    dispatch(initBoardWithFigures(generateFigures()));
  }, []);
  

  return (
    <>
      <div className={css.board}>
        {indexes.map((row) => (
          <div className={css.row} key={"row" + row}>
            {letters.map((col) => {
              const position: string = col + row;

              return (
                <div
                  key={"cell" + position}
                  className={cn(
                    css.cell,
                    css[
                      `cell-${
                        (row + letters.indexOf(col)) % 2 ? "black" : "white"
                      }`
                    ],
                    css[posibleMoves.indexOf(position) > -1 ? "posible" : ""],
                    css[newBoard[position] ? "figure-inside" : ""]
                  )}
                  onClick={() => dispatch(cellOnClick(position))}
                />
              );
            })}
          </div>
        ))}

        {/* {figures} */}

        <FiguresList />
      </div>
      {check ? <div>CHECK</div> : ""}
      {checkmate ? <GameOverModal /> : ""}
    </>
  );
}

export default Board;
