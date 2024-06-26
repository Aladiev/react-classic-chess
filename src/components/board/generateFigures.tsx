// import Bishop from "../figures/bishop/Bishop";
// import King from "../figures/king/King";
// import Knight from "../figures/knight/Knight";
// import Pawn from "../figures/pawn/Pawn";
// import Queen from "../figures/queen/Queen";
// import Rook from "../figures/rook/Rook";
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
      letter,
      color: "black",
      onClick: cellOnClick,
      clickedPosition: clickedPosition,
      uid: letter,
    });
    figures.push({
      type: "pawn",
      board,
      letter,
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
    clickedPosition,
  });
  figures.push({
    type: "king",
    board,
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "queen",
    board,
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "queen",
    board,
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "rook",
    board,
    letter: "A",
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "rook",
    board,
    letter: "A",
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "rook",
    board,
    letter: "H",
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "rook",
    board,
    letter: "H",
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "bishop",
    board,
    letter: "C",
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "bishop",
    board,
    letter: "C",
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "bishop",
    board,
    letter: "F",
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "bishop",
    board,
    letter: "F",
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "knight",
    board,
    letter: "B",
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "knight",
    board,
    letter: "B",
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  figures.push({
    type: "knight",
    board,
    letter: "G",
    color: "white",
    onClick: cellOnClick,
    clickedPosition,
  });
  figures.push({
    type: "knight",
    board,
    letter: "G",
    color: "black",
    onClick: cellOnClick,
    clickedPosition,
  });

  return figures;
}
