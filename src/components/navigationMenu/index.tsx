import css from './NavigationMenu.module.scss';
import cn from 'classnames';


export const NavigationMenu = () => {

  return (
    <div className={css.navigationMenu}>
        <a className={cn(css.page, css.homePage)}></a>
        <a className={cn(css.page, css.playPage)}></a>
    </div>
  )
}