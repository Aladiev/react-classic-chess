import Bishop from "../figures/bishop/Bishop";
import King from "../figures/king/King";
import Knight from "../figures/knight/Knight";
import Pawn from "../figures/pawn/Pawn";
import Queen from "../figures/queen/Queen";
import Rook from "../figures/rook/Rook";
import { boardType } from "../types";
import { letters } from "./../config.json";


export default function generateFigures(board: boardType, clickedPosition: string, cellOnClick: Function) {
    const figures = [];

    for (const letter of letters) {
        figures.push(<Pawn board={board} letter={letter} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid={letter} />);
        figures.push(<Pawn board={board} letter={letter} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid={letter} />);
    }

    figures.push(<King board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='king-black' />);
    figures.push(<King board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='king-white' />);

    figures.push(<Queen board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='queen-black' />);
    figures.push(<Queen board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='queen-white' />);

    figures.push(<Rook letter='A' board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='rook-A-black' />);
    figures.push(<Rook letter='A' board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='rook-A-white' />);

    figures.push(<Rook letter='H' board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='rook-H-black' />);
    figures.push(<Rook letter='H' board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='rook-H-white' />);

    figures.push(<Bishop letter='C' board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='bishop-C-black' />);
    figures.push(<Bishop letter='C' board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='bishop-C-white' />);

    figures.push(<Bishop letter='F' board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='bishop-F-black' />);
    figures.push(<Bishop letter='F' board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='bishop-F-white' />);

    figures.push(<Knight letter='B' board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='knight-B-black' />);
    figures.push(<Knight letter='B' board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='knight-B-white' />);

    figures.push(<Knight letter='G' board={board} color='black' onClick={cellOnClick} clickedPosition={clickedPosition} uid='knight-G-black' />);
    figures.push(<Knight letter='G' board={board} color='white' onClick={cellOnClick} clickedPosition={clickedPosition} uid='knight-G-white' />);

    return figures;
}