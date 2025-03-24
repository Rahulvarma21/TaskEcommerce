const Cart = ({ cart, setCart, onClose }) => {
    // Calculating the total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    // Updating the quantity
    const updateQuantity = (id, amount) => {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      ));
    };
  
    // Removing items
    const removeItem = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };
  
    return (
      <div className="fixed right-0 top-0 h-full w-80 bg-black shadow-lg p-6">
        <h2 className="text-xl text-white font-bold border-b pb-3">My Bag</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 mt-4">Your bag is empty.</p>
        ) : (
          <div className="mt-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between py-2 border-b">
                <div>
                  <p className="text-white">{item.name}</p>
                  <p className="text-sm text-white">${item.price} × {item.quantity}</p>
                  <div className="flex gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-gray-200 rounded">−</button>
                    <span className="text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-gray-200 rounded">+</button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-red-500">✕</button>
              </div>
            ))}
            <p className="text-lg text-white font-semibold mt-4">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        )}
        <button onClick={onClose} className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    );
  };
  export default Cart;
  