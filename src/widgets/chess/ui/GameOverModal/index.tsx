import { useDispatch } from 'react-redux';

import css from './GameOverModal.module.scss';

import { initBoardWithFigures } from '../../model/slice/chess';

export function GameOverModal() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.gameOver}>
        <p>GG</p>
        <button onClick={() => dispatch(initBoardWithFigures())}>Restart game</button>
      </div>
    </>
  );
}