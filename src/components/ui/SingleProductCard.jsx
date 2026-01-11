import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";

const SingleProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
      {/* Image */}
      <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="max-w-full max-h-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Offer Badge */}
        <span className="absolute top-3 left-3 bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full">
          {product?.offer}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link
          to={`/product/${product?.id}`} // Adjust route as needed
          className="font-semibold text-lg text-primary mb-2 block hover:text-secondary transition"
        >
          {product?.title}
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-secondary font-bold text-lg">
            {product?.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary  cursor-pointer transition"
          >
            <FaPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
