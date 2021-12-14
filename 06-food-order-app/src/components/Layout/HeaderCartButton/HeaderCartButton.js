import { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon/CartIcon.js';

import style from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
