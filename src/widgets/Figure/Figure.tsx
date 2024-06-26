import cn from "classnames";
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
  const figureClassnames = cn({
    [css.figure_bishop]: type === "bishop",
    [css.figure_bishop_black]: color === "black",
    [css.figure_king]: type === "king",
    [css.figure_knight]: type === "knight",
    [css.figure_pawn]: type === "pawn",
    [css.figure_queen]: type === "queen",
    [css.figure_rook]: type === "rook",
  });
  return <div className={cn(figureClassnames, position)} />;
};

export default Figure;
