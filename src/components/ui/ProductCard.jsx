import { FaPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
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
        <h3 className="font-semibold text-text text-sm">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-primary">
            ${product.price}
          </span>

          <button className="p-2 bg-secondary text-white rounded-full hover:scale-105 transition">
            <FaPlus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
