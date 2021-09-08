import CartIcon from '../../Cart/CartIcon.js';

import style from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={style.bacge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
