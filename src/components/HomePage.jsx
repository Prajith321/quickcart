import { useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id:1, title:"Phone", price:10000, category:"Electronics" },
  { id:2, title:"Laptop", price:50000, category:"Electronics" }
];

export default function HomePage() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input placeholder="Search" onChange={e=>setSearch(e.target.value)} />
      {filtered.length===0 ? <p>No results</p> :
        filtered.map(p=>(
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>₹{p.price}</p>
            <button onClick={()=>addToCart(p)}>Add</button>
          </div>
        ))
      }
    </>
  );
}