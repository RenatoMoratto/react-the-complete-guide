import { useContext, useEffect, useState } from 'react';

import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon/CartIcon.js';

import style from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnStyles = `${style.button} ${btnIsHighlighted && style.bump}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;