import Figure from "../Figure/Figure";
import type { FigureOnClick, BoardType } from "../../types/_types";

export const FiguresList = ({ figureOnClick, clickedPosition, board }:
  { figureOnClick: FigureOnClick, clickedPosition: string, board: BoardType }) => {

  return (
    <>
      {Object.values(board).map((item, key) => (
        <Figure
          key={key}
          color={item.color}
          type={item.type}
          position={item.position}
          figureOnClick={figureOnClick}
          clickedPosition={clickedPosition}
        />
      ))}
    </>
  );
};
