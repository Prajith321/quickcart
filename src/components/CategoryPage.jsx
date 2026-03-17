import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id:1, title:"Phone", price:10000, category:"Electronics" },
  { id:2, title:"Laptop", price:50000, category:"Electronics" }
];

export default function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filtered = products.filter(p => p.category === category);

  return filtered.length===0 ? <p>No items</p> :
    filtered.map(p=>(
      <div key={p.id}>
        <h3>{p.title}</h3>
        <button onClick={()=>addToCart(p)}>Add</button>
      </div>
    ));
}