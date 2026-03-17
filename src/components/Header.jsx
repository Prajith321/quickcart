import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { total } = useCart();

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/category/Electronics">Electronics</Link>
      <Link to="/cart">Cart ({total})</Link>
    </header>
  );
}