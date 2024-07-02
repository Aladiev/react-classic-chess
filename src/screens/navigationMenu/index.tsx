import cn from 'classnames';
import css from './NavigationMenu.module.scss';


export const NavigationMenu = () => (
  <div className={css.navigationMenu}>
      <a className={cn(css.page, css.homePage)} />
      <a className={cn(css.page, css.playPage)} />
  </div>
);