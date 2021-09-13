import CartIcon from '../../Cart/CartIcon/CartIcon.js';

import style from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={style.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
