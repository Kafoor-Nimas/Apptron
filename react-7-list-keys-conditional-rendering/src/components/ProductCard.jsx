const ProductCard = ({ product }) => {
  const {
    productName,
    category,
    brand,
    price,
    rating,
    stockQuantity,
    isAvailable,
    productImage,
  } = product;
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-slate-50">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Available badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${isAvailable ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"}`}
        >
          {isAvailable ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Content */}
    </div>
  );
};

export default ProductCard;
