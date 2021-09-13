import CardContext from './cart-context';

function CartProvider({ children }) {
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>{children}</CardContext.Provider>
  );
}

export default CartProvider;
