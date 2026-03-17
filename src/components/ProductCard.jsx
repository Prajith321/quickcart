export default function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <img src={product.image} width="100" />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}