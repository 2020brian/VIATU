import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // get only unique items
    if (!cart.find((cartItem) => cartItem.id === item.id)) {
        setCart((prevCart) => [...prevCart, item]);
      }  };
console.log(cart);
const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
};
const emptyCart =()=>{
  setCart([]);
}
  return (
    <CartContext.Provider value={{ cart, addToCart ,removeFromCart,emptyCart}}>
      {children}
    </CartContext.Provider>
  );
}
