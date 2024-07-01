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
    [css.figure_bishop]: type === "bishop" && color === 'white',
    [css.figure_bishop_black]: type === "bishop" && color === "black",
    [css.figure_king]: type === "king" && color === 'white',
    [css.figure_king_black]: type === "king" && color === "black",
    [css.figure_knight]: type === "knight" && color === 'white',
    [css.figure_knight_black]: type === "knight" && color === "black",
    [css.figure_pawn]: type === "pawn" && color === 'white',
    [css.figure_pawn_black]: type === "pawn" && color === "black",
    [css.figure_queen]: type === "queen" && color === 'white',
    [css.figure_queen_black]: type === "queen" && color === "black",
    [css.figure_rook]: type === "rook" && color === 'white',
    [css.figure_rook_black]: type === "rook" && color === "black",
    [css[position]]: true,
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
