import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();

  if(cart.length===0) return <p>Empty Cart</p>;

  return cart.map(i=>(
    <div key={i.id}>
      <h3>{i.title}</h3>
      <button onClick={()=>updateQuantity(i.id,-1)}>-</button>
      {i.quantity}
      <button onClick={()=>updateQuantity(i.id,1)}>+</button>
      <button onClick={()=>removeItem(i.id)}>Remove</button>
    </div>
  ));
}