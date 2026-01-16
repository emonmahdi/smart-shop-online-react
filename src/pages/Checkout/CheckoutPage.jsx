import { useNavigate } from "react-router";
import { useState } from "react";
import { useCart } from "../../Context/CartContext";

const CheckoutPage = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please complete all required fields");
      return;
    }

    const orderData = {
      customer: form,
      items: cart,
      total: totalPrice,
    };

    console.log("Order Placed:", orderData);

    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* HEADER */}
        <div className="bg-primary text-white p-6">
          <h1 className="text-2xl font-bold">Secure Checkout</h1>
          <p className="text-sm opacity-90">
            Complete your order in a few steps
          </p>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* ================= LEFT: FORM ================= */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Shipping Information</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />

              <textarea
                name="address"
                rows="4"
                placeholder="Full shipping address"
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none"
              />
            </div>
          </div>

          {/* ================= RIGHT: SUMMARY ================= */}
          <div className="bg-gray-100 rounded-2xl p-5 h-fit">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={placeOrder}
              className="w-full mt-6 bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition"
            >
              Confirm Order
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full mt-3 text-secondary text-sm hover:underline"
            >
              ← Back to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
