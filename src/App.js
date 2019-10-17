import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductContext, CartContext } from './context/contexts';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    const items = [...cart, item];
    setCart(items);
  };

  const removeItem = id => {
    const newItem = cart.filter(item => item.id !== id);
    setCart([...newItem]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className='App'>
          <Navigation />
          {/* Routes */}
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
