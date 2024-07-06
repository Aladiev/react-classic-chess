import cn from 'classnames';
import css from './NavigationMenu.module.scss';
import {  useNavigate } from 'react-router-dom';

export const NavigationMenu = () => {
  const navigate = useNavigate();
  
  return (
    <div className={css.navigationMenu}>
      <a className={cn(css.page, css.profilePage)} onClick={() => navigate('/profile')}/>
      <a className={cn(css.page, css.playPage)} onClick={() => navigate('/chess')}/>
    </div>
  );
};