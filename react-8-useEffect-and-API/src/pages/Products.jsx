import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message || "failed to load products");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 text-center p-6">
        <p className="text-rose-500 font-semibold text-lg">{error}</p>
        <p className="text-gray-500 text-sm">Please try again</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all shadow-sm"
        >
          Retry
        </button>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Product Catalog <span className="text-orange-500">Live API</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Showing {products.length} live products fetched from DummyJSON API
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
