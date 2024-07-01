import { letters } from "./config.json";

export default function generateFigures() {
  const figures = [];

  for (const letter of letters) {
    figures.push({
      type: "pawn",
      position: letter + '7',
      color: "black",

      uid: letter,
    });
    figures.push({
      type: "pawn",
      position: letter + '2',
      color: "white",
    });
  }

  figures.push({
    type: "king",
    color: "white",
    position: 'E1',
  });
  figures.push({
    type: "king",
    color: "black",
    position: 'E8',
  });

  figures.push({
    type: "queen",
    color: "white",
    position: 'D1',
  });
  figures.push({
    type: "queen",
    color: "black",
    position: 'D8',
  });

  figures.push({
    type: "rook",
    position: 'A1',
    color: "white",
  });
  figures.push({
    type: "rook",
    position: 'A8',
    color: "black",
  });

  figures.push({
    type: "rook",
    position: 'H1',
    color: "white",
  });
  figures.push({
    type: "rook",
    position: 'H8',
    color: "black",
  });

  figures.push({
    type: "bishop",
    position: 'C1',
    color: "white",
  });
  figures.push({
    type: "bishop",
    position: 'C8',
    color: "black",
  });

  figures.push({
    type: "bishop",
    position: 'F1',
    color: "white",
  });
  figures.push({
    type: "bishop",
    position: 'F8',
    color: "black",
  });

  figures.push({
    type: "knight",
    position: 'B1',
    color: "white",
  });
  figures.push({
    type: "knight",
    position: 'B8',
    color: "black",
  });

  figures.push({
    type: "knight",
    position: 'G1',
    color: "white",
  });
  figures.push({
    type: "knight",
    position: 'G8',
    color: "black",
  });

  return figures;
}
