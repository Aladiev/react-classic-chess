// import cn from 'classnames';
import { Button } from '../../../../shared';
import css from './ProfilePage.module.scss';

export const ProfilePage = () => (
  <div className={css.profilePage}>
    <form className={css.profileForm} action="">
      <div className={css.fieldWrapper}>
        <label>Имя:</label>
        <input type="text" />
      </div>

      <div className={css.fieldWrapper}>
        <label>Email:</label>
        <input type="text" />
      </div>

      <Button buttonOnClick={() => alert('Saved!')} text='Сохранить'/>
      {/* <button>Сохранить</button> */}
    </form>
  </div>
);