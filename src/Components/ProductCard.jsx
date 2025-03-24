const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-500">{product.brand}</p>
        <p className="font-bold text-gray-800">${product.price}</p>
        <div className="mt-3 flex gap-2 justify-evenly">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-black hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          >
            Add to Bag
          </button>
          <button
            onClick={() => onViewDetails(product)}
            className="text-black"
          >
            View Details
          </button>
        </div>
      </div>
    );
  };
  export default ProductCard;
  