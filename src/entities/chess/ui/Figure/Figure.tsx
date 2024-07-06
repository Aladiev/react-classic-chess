import cn from "classnames";
import css from "./Figure.module.scss";
import { FigureOnClick } from "../../types/_types";

const Figure = ({
  type,
  color,
  position,
  figureOnClick,
  clickedPosition,
}: {
  type: string;
  color: string;
  position: string;
  figureOnClick: FigureOnClick;
  clickedPosition: string;
}) => {
  const figureClassnames = cn({
    [css['figure_' + type + '_' + color]]: true,
    [css[position]]: true,
    [css.clicked]: clickedPosition === position,
    [css.figure]: true,
  });

  return <div className={figureClassnames} onClick={() => figureOnClick(position)}/>;
};

export default Figure;
