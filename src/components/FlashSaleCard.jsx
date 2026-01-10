import { FaPlus } from "react-icons/fa";

const SingleProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Offer Badge */}
        <span className="absolute top-3 left-3 bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full">
          {item.offer}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-primary mb-2">
          {item.title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-secondary font-bold text-lg">{item.price}</span>

          <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition">
            <FaPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
