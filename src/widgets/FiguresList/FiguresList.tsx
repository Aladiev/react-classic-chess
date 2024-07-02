import { useSelector } from "react-redux";
import Figure from "../Figure/Figure";
import { boardSelector } from "../../redux/selectors/selectors";
import { boardType } from "../../shared/constants/_types";

const FiguresList = () => {
  const newBoard: boardType = useSelector(boardSelector);

  return (
    <>
      {Object.values(newBoard).map((item, key) => (
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
