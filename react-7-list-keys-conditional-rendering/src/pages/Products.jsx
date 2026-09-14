import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  return (
    <div>
      {products.map((product) => {
        <ProductCard key={product.productId} {...product} />;
      })}
    </div>
  );
};

export default Products;
