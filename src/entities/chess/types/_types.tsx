export type BoardType = {
  [key: string]: {
    color: string;
    type: string;
    position: string;
  };
};

export type FigureOnClick = (position: string) => void;
