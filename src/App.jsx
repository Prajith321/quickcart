import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";

const products = [
  { id: 1, title: "Phone", price: 10000, image: "https://via.placeholder.com/100" },
  { id: 2, title: "Laptop", price: 50000, image: "https://via.placeholder.com/100" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, amt) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + amt } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header count={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <ProductList products={products} onAddToCart={addToCart} />
      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </>
  );
}