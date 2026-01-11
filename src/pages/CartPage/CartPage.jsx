import { Link } from "react-router";
import { useCart } from "../../Context/CartContext";

const CartPage = () => {
  const { cart, updateQty, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-6">Your cart is empty</p>

        <Link
          to="/product"
          className="inline-block bg-primary text-white px-6 py-2 rounded-full"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* CART ITEMS */}
      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-xl shadow"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain bg-gray-100 rounded"
            />

            {/* INFO */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-secondary font-bold">
                ${item.price.toFixed(2)}
              </p>

              {/* QTY CONTROL */}
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item.id, e.target.value)
                  }
                  className="border rounded w-20 px-2 py-1 text-center focus:ring-2 focus:ring-primary outline-none"
                />

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>

            {/* SUBTOTAL */}
            <div className="font-semibold text-right">
              ${(item.price * item.qty).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-8 bg-gray-100 p-5 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <Link
          to="/checkout"
          className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
