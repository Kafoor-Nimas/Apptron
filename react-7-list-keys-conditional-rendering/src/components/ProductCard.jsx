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
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs font-medium text-gray-400 mb-1">
            <span>{category}</span>
            <span className="font-semibold text-orange-500">{brand}</span>
          </div>
          <h3 className="font-bold text-gray-800 text-base line-clamp-1">
            {productName}
          </h3>
        </div>

        <div className="flex items-center justify-between text-xs border-y border-gray-50">
          <div className="flex items-center gap-1">
            <span>★</span>
            <span>{rating}</span>
          </div>
          <span>{isAvailable ? `${stockQuantity} units left` : "0 units"}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-xs text-gray-400 block">Price</span>
            <span className="text-lg font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>

          <button
            disabled={!isAvailable}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm ${isAvailable ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            {isAvailable ? "Add to Card" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
