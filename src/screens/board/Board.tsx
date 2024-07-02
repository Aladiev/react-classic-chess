import { useEffect } from "react";
import css from "./Board.module.scss";
import cn from "classnames";
import { letters, indexes } from "./config.json";
import generateFigures from "./generateFigures";
import GameOverModal from "../gameOverModal";
import { useDispatch, useSelector } from "react-redux";
import { boardSelector, checkmateSelector, checkSelector, posibleMovesSelector } from "../../redux/selectors/selectors";
import FiguresList from "../../widgets/FiguresList/FiguresList";
import { initBoardWithFigures, cellOnClick } from "../../redux/slice/chess";
import { boardType } from "../../shared/constants/_types";



function Board() {
  const dispatch = useDispatch();

  const newBoard: boardType = useSelector(boardSelector);
  const posibleMoves = useSelector(posibleMovesSelector);

  const check = useSelector(checkSelector);
  const checkmate = useSelector(checkmateSelector);


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

        <FiguresList />
      </div>
      {check ? <div className={css.check}>CHECK</div> : ""}
      {checkmate ? <GameOverModal /> : ""}
    </>
  );
}

export default Board;
