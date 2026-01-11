import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition w-72 flex-shrink-0">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-full object-cover rounded-t-xl"
        />

        {/* Offer badge */}
        <span className="absolute top-3 left-3 bg-secondary text-white text-xs px-2 py-1 rounded-full">
          {product.offer}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link
          to={`/product/${product.id}`} // dynamic route assumed
          className="font-semibold text-text text-sm hover:text-secondary transition"
        >
          {product.title}
        </Link>

        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-primary">${product.price}</span>

          <button
            onClick={() => addToCart(product)}
            className="p-2 bg-secondary text-white rounded-full cursor-pointer hover:scale-105 transition"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
