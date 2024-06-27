import cn from "classnames";
import css from "./Figure.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { initBoardWithFigures } from "../../redux/slice/chess";
import canMoveBishop from "../../components/figures/bishop/canMoveBishop";

const Figure = ({
  type,
  color,
  position,
  newBoard,
  letter,
}: {
  type: string;
  color: string;
  position: string;
  letter: string;
  newBoard: any;
}) => {
  const figureClassnames = cn({
    [css.figure_bishop]: type === "bishop",
    [css.figure_bishop_black]: color === "black",
    [css.figure_king]: type === "king",
    [css.figure_knight]: type === "knight",
    [css.figure_pawn]: type === "pawn",
    [css.figure_queen]: type === "queen",
    [css.figure_rook]: type === "rook",
  });
  const dispatch = useDispatch();

  const [positionFigure, setPositionFigure] = useState("");

  useEffect(() => {
    if (type === "bishop") {
      dispatch(
        initBoardWithFigures({
          positionFigure:
            "position" +
            type[0].toUpperCase() +
            type.slice(1) +
            Math.random().toString(),
          curPos: letter + (color === "white" ? 2 : 7),
          moveTo: setPositionFigure,
          color: color,
          canMove: canMoveBishop.bind(
            null,
            color,
            positionFigure
              ? positionFigure
              : letter + (color === "white" ? 2 : 7),
            newBoard
          ),
          type: type,
        })
      );
    }
  }, []);

  // const [positionPawn, setPositionPawn] = useState(
  //   item.letter + (color === "white" ? 2 : 7)
  // );
  // board[positionBishop] = { moveTo: setPositionBishop, color: color, canMove: canMoveBishop.bind(null, color, positionBishop, board), type: 'bishop' };

  return <div className={cn(figureClassnames, position, css.figure)} />;
};

export default Figure;
