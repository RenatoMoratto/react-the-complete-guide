import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandle = () => {
    setCartIsShown(true);
  };
  const hideCardHandle = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCardHandle} />}
      <Header onShowCart={showCardHandle} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
