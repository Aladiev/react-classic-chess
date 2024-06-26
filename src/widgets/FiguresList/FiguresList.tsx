import Figure from "../Figure/Figure";

const FiguresList = ({ figures }: { figures: any[] }) => {
  return (
    <>
      {figures.map((item, key) => {
        <Figure
          key={key}
          color={item.color}
          type={item.type}
          position={item.position}
        />;
      })}
    </>
  );
};
export default FiguresList;
