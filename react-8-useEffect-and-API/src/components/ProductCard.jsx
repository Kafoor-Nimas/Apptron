const ProductCard = ({ product }) => {
  const {
    thumbnail,
    title,
    brand,
    category,
    price,
    rating,
    stock,
    description,
  } = product;
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300">
      {/* Image and Batch */}
      <div className="relative h-48 bg-slate-50 overflow-hidden p-4 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={title}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
        <span>{stock > 0 ? `In Stock (${stock})` : "Out of Stock"}</span>
      </div>
      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs font-medium text-gray-400 mb-1">
            <span className="capitalize">{category}</span>
            <span className="font-semibold text-orange-500">
              {brand || "Generic"}
            </span>
          </div>

          <h3 className="font-bold text-gray-800 text-base line-clamp-1">
            {title}
          </h3>

          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Rating and Stock */}
        <div className="flex items-center justify-between text-xs border-y border-gray-100 py-2">
          <div className="flex items-center gap-1">
            <span className="text-amber-400">★</span>
            <span className="font-bold text-gray-700">{rating}</span>
          </div>
          <span className="text-gray-500 font-mono">Stock: {stock}</span>
        </div>

        {/* Price and Add to card button */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-xs text-gray-400 block">Price</span>
            <span className="text-lg font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>

          <button
            disabled={stock === 0}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm${stock > 0 ? "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            {stock > 0 ? "Add to Card" : "Unavailable"}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductCard;
