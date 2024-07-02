import { letters } from "./config.json";

export default function generateFigures() {
  const figures = [];

  for (const letter of letters) {
    figures.push({
      type: "pawn",
      position: letter + '7',
      color: "black",

      uid: letter,
    }, {
      type: "pawn",
      position: letter + '2',
      color: "white",
    });
  }

  figures.push({
    type: "king",
    color: "white",
    position: 'E1',
  }, {
    type: "king",
    color: "black",
    position: 'E8',
  }, {
    type: "queen",
    color: "white",
    position: 'D1',
  }, {
    type: "queen",
    color: "black",
    position: 'D8',
  }, {
    type: "rook",
    position: 'A1',
    color: "white",
  }, {
    type: "rook",
    position: 'A8',
    color: "black",
  }, {
    type: "rook",
    position: 'H1',
    color: "white",
  }, {
    type: "rook",
    position: 'H8',
    color: "black",
  }, {
    type: "bishop",
    position: 'C1',
    color: "white",
  }, {
    type: "bishop",
    position: 'C8',
    color: "black",
  }, {
    type: "bishop",
    position: 'F1',
    color: "white",
  }, {
    type: "bishop",
    position: 'F8',
    color: "black",
  }, {
    type: "knight",
    position: 'B1',
    color: "white",
  }, {
    type: "knight",
    position: 'B8',
    color: "black",
  }, {
    type: "knight",
    position: 'G1',
    color: "white",
  }, {
    type: "knight",
    position: 'G8',
    color: "black",
  });

  return figures;
}
