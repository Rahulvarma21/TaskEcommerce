import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../Components/ProductCard";
import Modal from "../Components/Modal";
import Cart from "../Components/Cart";

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add product to cart (or increase quantity if already in the cart)
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-black shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-white">🛍️ Store</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded transition"
        >
          My Bag ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onViewDetails={setSelectedProduct}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
      {isCartOpen && (
        <Cart
          cart={cart}
          setCart={setCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductList;
