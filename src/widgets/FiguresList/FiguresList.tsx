import { useSelector } from "react-redux";
import { boardSelector } from "../../redux/selectors/selectors";
import Figure from "../Figure/Figure";
import type { boardType } from "../../shared/constants/_types";

const FiguresList = () => {
  const board: boardType = useSelector(boardSelector);

  return (
    <>
      {Object.values(board).map((item, key) => (
        <Figure
          key={key}
          color={item.color}
          type={item.type}
          position={item.position}
        />
      ))}
    </>
  );
};
export default FiguresList;
