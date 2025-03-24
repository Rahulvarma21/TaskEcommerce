const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.brand}</p>
          <p className="font-bold">${product.price}</p>
          <button onClick={() => onAddToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Bag
          </button>
          <button onClick={onClose} className="ml-4 text-gray-500">Close</button>
        </div>
      </div>
    );
  };
  
  export default ProductDetailModal;
  