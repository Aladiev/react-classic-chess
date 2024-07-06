import { useDispatch, useSelector } from 'react-redux';

import css from './GameOverModal.module.scss';

import { initBoardWithFigures } from '../../model/slice/chess';
import { turnOrderSelector } from '../../model/selectors/selectors';
import { Button } from '../../../../shared';

export function GameOverModal() {
  const dispatch = useDispatch();

  const turnOrder = useSelector(turnOrderSelector);

  const restartGame = () => dispatch(initBoardWithFigures());

  return (
    <>
      <div className={css.gameOver}>
        <div className={css.header}><h1>{turnOrder === 'white' ? 'Какая досада...' : 'Так держать!'}</h1></div>
        <div className={css.wrapper}>
          <p>{turnOrder === 'white' ? 'Вы проиграли!' : 'Вы одержали верх!'} Начать новую игру?</p>
          <Button buttonOnClick={restartGame} text='Играть'/>
        </div>
      </div>
    </>
  );
}