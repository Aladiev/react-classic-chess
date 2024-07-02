import cn from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardSelector, checkmateSelector, checkSelector, posibleMovesSelector } from "../../redux/selectors/selectors";
import { initBoardWithFigures, cellOnClick } from "../../redux/slice/chess";
import FiguresList from "../../widgets/FiguresList/FiguresList";
import GameOverModal from "../gameOverModal";
import css from "./Board.module.scss";
import { letters, indexes } from "./config.json";
import generateFigures from "./generateFigures";
import type { boardType } from "../../shared/constants/_types";



function Board() {
  const dispatch = useDispatch();

  const board: boardType = useSelector(boardSelector);
  const posibleMoves = useSelector(posibleMovesSelector);

  const check = useSelector(checkSelector);
  const checkmate = useSelector(checkmateSelector);


  useEffect(() => {
    dispatch(initBoardWithFigures(generateFigures()));
  }, [dispatch]);
  

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
                    css[posibleMoves.includes(position) ? "posible" : ""],
                    css[board[position] ? "figure-inside" : ""]
                  )}
                  onClick={() => dispatch(cellOnClick(position))}
                />
              );
            })}
          </div>
        ))}

        <FiguresList />
      </div>
      {check ? <div className={css.check}>CHECK</div> : ""}
      {checkmate ? <GameOverModal /> : ""}
    </>
  );
}

export default Board;
