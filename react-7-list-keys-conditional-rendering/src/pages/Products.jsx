import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Product Store <span className="text-orange-500">Dashboard</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Browse our catalog of {products.length} premium products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
