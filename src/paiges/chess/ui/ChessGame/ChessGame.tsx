import { useSelector } from 'react-redux';

// import css from './ChessGame.module.scss';

import { Board, GameOverModal, checkmateSelector } from '../../../../widgets/chess';

export const ChessGame = () => {
  // const check = useSelector(checkSelector);
  const checkmate = useSelector(checkmateSelector);

  return (
    <>
      <Board />

      {/* {check ? <div className={css.check}>CHECK</div> : ""} */}
      {checkmate ? <GameOverModal /> : ""}
    </>
  );
};