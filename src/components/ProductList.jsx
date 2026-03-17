import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList() {
  return (
    <div className="grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;