import { Link } from "react-router";
import { useCart } from "../../Context/CartContext";

const CartPage = () => {
  const { cart, updateQty, removeFromCart, totalPrice } = useCart();

  const shippingFee = totalPrice > 100 ? 0 : 10;
  const tax = totalPrice * 0.05;
  const grandTotal = totalPrice + shippingFee + tax;

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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ================= LEFT : CART ITEMS ================= */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center bg-white p-4 rounded-xl shadow"
            >
              {/* IMAGE */}
              <div className="sm:col-span-1 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain bg-gray-100 rounded"
                />
              </div>

              {/* TITLE */}
              <div className="sm:col-span-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-secondary font-bold">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* QTY */}
              <div className="sm:col-span-1 flex justify-center">
                <div className="flex items-center border rounded overflow-hidden">
                  {/* MINUS */}
                  <button
                    onClick={() =>
                      item.qty > 1 && updateQty(item.id, item.qty - 1)
                    }
                    className="px-3 py-1 text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition"
                  >
                    −
                  </button>

                  {/* QTY DISPLAY */}
                  <span className="w-10 text-center font-medium">
                    {item.qty}
                  </span>

                  {/* PLUS */}
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1 text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* SUBTOTAL */}
              <div className="sm:col-span-1 text-right">
                <p className="font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= RIGHT : ORDER SUMMARY ================= */}
        <div className="bg-white rounded-xl shadow p-6 h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="block mt-6 text-center bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
