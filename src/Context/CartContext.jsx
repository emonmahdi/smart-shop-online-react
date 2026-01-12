/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [
        ...prev,
        {
          ...product,
          price: Number(product.price), // ✅ ensure number
          qty: 1,
        },
      ];
    });
  };

  // ✅ REMOVE
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ UPDATE QTY (IMPORTANT FIX)
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, Number(qty)) } // ✅ safe
          : item
      )
    );
  };

  // ✅ CLEAR CART
  const clearCart = () => setCart([]);

  // ✅ TOTAL PRICE (optional helper)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalPrice, // 👈 useful for cart & checkout
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
