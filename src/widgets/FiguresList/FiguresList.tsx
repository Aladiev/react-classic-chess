import Figure from "../Figure/Figure";

const FiguresList = ({
  figures,
  newBoard,
}: {
  figures: any[];
  newBoard: any;
}) => {
  return (
    <>
      {figures.map((item, key) => (
        <Figure
          key={key}
          color={item.color}
          type={item.type}
          position={item.position}
          letter={item.letter}
          newBoard={newBoard}
        />
      ))}
    </>
  );
};
export default FiguresList;
