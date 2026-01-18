import { useState } from "react";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Wireless Headphone",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155222c9f6?w=500",
    },
    {
      id: 2,
      name: "Smart Watch Series 9",
      price: 5400,
      image:
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Wishlist</h1>
          <p className="text-sm text-gray-500 mt-1">
            Your favorite products saved for later
          </p>
        </div>

        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
          {wishlist.length} items
        </span>
      </div>

      {/* Wishlist Grid */}
      {wishlist.length === 0 ? (
        <div className="bg-white border rounded-xl p-10 text-center text-gray-500">
          No items in wishlist
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-50 text-red-500"
                >
                  <FaTrash size={14} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="font-medium text-gray-900 line-clamp-1">
                  {item.name}
                </h3>

                <p className="text-primary font-semibold">৳{item.price}</p>

                <div className="flex gap-2 pt-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-primary text-white rounded-lg hover:opacity-90">
                    <FaShoppingCart size={14} />
                    Add to Cart
                  </button>

                  <button className="p-2 border rounded-lg hover:bg-gray-50">
                    <FaHeart className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
