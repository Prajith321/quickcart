import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      setCart(cart.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, amt) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, quantity: i.quantity + amt } : i
    ).filter(i => i.quantity > 0));
  };

  const removeItem = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const total = cart.reduce((s,i)=>s+i.quantity,0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);