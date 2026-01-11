 
import { useNavigate } from "react-router";
import { useState } from "react";
import { useCart } from "../../Context/CartContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    // 🔥 Here you send data to backend
    const orderData = {
      items: cart,
      address,
      total,
    };

    console.log("Order Placed:", orderData);

    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <textarea
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border w-full p-3 mb-4"
      />

      <p className="font-semibold">Total: ${total}</p>

      <button
        onClick={placeOrder}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
