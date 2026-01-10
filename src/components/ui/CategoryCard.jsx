const CategoryCard = ({ item }) => {
    return (
      <div
        className={`relative ${item.height} rounded-xl overflow-hidden group cursor-pointer bg-gray-600`}
      >
        {/* Image Wrapper */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
  
        {/* Title */}
        <div className="absolute bottom-4 left-4 z-10">
          <h3 className="text-white text-xl font-semibold">
            {item.title}
          </h3>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  