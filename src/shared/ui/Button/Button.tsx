import css from './Button.module.scss';

export function Button({ buttonOnClick, text }: { buttonOnClick: Function, text: string }) {

  return (
    <button className={css.button} onClick={() => buttonOnClick()}>{text}</button>
  );
}