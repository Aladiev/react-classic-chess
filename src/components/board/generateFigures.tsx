import { boardType } from "./types";
import { letters } from "./config.json";

export default function generateFigures(
  board: boardType,
  clickedPosition: string,
  cellOnClick: Function
) {
  const figures = [];

  for (const letter of letters) {
    figures.push({
      type: "pawn",
      board,
      position: 'position' + letter + '7',
      color: "black",
      onClick: cellOnClick,
      clickedPosition: clickedPosition,
      uid: letter,
    });
    figures.push({
      type: "pawn",
      board,
      position: 'position' + letter + '2',
      color: "white",
      onClick: cellOnClick,
      clickedPosition,
    });
  }

  figures.push({
    type: "king",
    board,
    color: "white",
    onClick: cellOnClick,
    position: 'positionE1',
    clickedPosition,
  });
  figures.push({
    type: "king",
    board,
    color: "black",
    onClick: cellOnClick,
    position: 'positionE8',
    clickedPosition,
  });

  figures.push({
    type: "queen",
    board,
    color: "white",
    onClick: cellOnClick,
    position: 'positionD1',
    clickedPosition,
  });
  figures.push({
    type: "queen",
    board,
    color: "black",
    onClick: cellOnClick,
    position: 'positionD8',
    clickedPosition,
  });

  figures.push({
    type: "rook",
    board,
    position: 'positionA1',
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "rook",
    board,
    position: 'positionA8',
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "rook",
    board,
    position: 'positionH1',
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "rook",
    board,
    position: 'positionH8',
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "bishop",
    board,
    position: 'positionC1',
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "bishop",
    board,
    position: 'positionC8',
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "bishop",
    board,
    position: 'positionF1',
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "bishop",
    board,
    position: 'positionF8',
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "knight",
    board,
    position: 'positionB1',
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "knight",
    board,
    position: 'positionB8',
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "knight",
    board,
    position: 'positionG1',
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "knight",
    board,
    position: 'positionG8',
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  return figures;
}
