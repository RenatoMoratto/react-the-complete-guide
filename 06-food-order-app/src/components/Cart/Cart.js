import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import style from './Cart.module.css';

function Cart(props) {
  const cartItems = (
    <ul className={style['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'Sushi',
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const ctx = useContext(CartContext);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
