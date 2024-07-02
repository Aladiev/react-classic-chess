import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { clickedPositionSelector } from "../../redux/selectors/selectors";
import { cellOnClick } from "../../redux/slice/chess";
import css from "./Figure.module.scss";

const Figure = ({
  type,
  color,
  position,
}: {
  type: string;
  color: string;
  position: string;
}) => {
  const dispatch = useDispatch();

  const clickedPosition = useSelector(clickedPositionSelector);

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
    [css.clicked]: clickedPosition === position,
  });

  return <div className={cn(figureClassnames, position, css.figure)} onClick={() => dispatch(cellOnClick(position))}/>;
};

export default Figure;
