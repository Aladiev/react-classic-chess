import { useSelector } from "react-redux";
import { boardType } from "../../screens/board/types";
import Figure from "../Figure/Figure";
import { boardSelector } from "../../redux/selectors/selectors";

const FiguresList = ({

}: {
}) => {
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
