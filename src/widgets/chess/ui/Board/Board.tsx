import cn from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./Board.module.scss";

import { boardSelector, clickedPositionSelector, posibleMovesSelector } from "../../model/selectors/selectors";
import { initBoardWithFigures, cellOnClick } from "../../model/slice/chess";

import { LETTERS, INDEXES, FiguresList } from "../../../../entities/chess";
import type { BoardType, FigureOnClick } from "../../../../entities/chess";

export function Board() {
  const dispatch = useDispatch();

  const board: BoardType = useSelector(boardSelector);
  const posibleMoves = useSelector(posibleMovesSelector);
  const clickedPosition = useSelector(clickedPositionSelector);

  useEffect(() => {
    dispatch(initBoardWithFigures());
  }, [dispatch]);

  const cellOrFigureOnClick: FigureOnClick = (position) => dispatch(cellOnClick(position));

  return (
    <>
      <div className={css.board}>
        {INDEXES.map((row) => (
          <div className={css.row} key={"row" + row}>
            {LETTERS.map((col) => {
              const position: string = col + row;

              return (
                <div
                  key={"cell" + position}
                  className={cn(
                    css.cell,
                    css[
                    `cell-${(row + LETTERS.indexOf(col)) % 2 ? "black" : "white"
                    }`
                    ],
                    css[posibleMoves.includes(position) ? "posible" : ""],
                    css[board[position] ? "figure-inside" : ""]
                  )}
                  onClick={() => cellOrFigureOnClick(position)}
                />
              );
            })}
          </div>
        ))}

        <FiguresList figureOnClick={cellOrFigureOnClick} clickedPosition={clickedPosition} board={board} />
      </div>

    </>
  );
}
