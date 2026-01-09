import { FaArrowRight } from "react-icons/fa"; 
import img1 from '../assets/d1.jpg'
import img2 from '../assets/d2.jpg'
import img3 from '../assets/d3.jpg'
import img4 from '../assets/d4.jpg' 
import FlashSaleCard from "./FlashSaleCard";

const FlashSale = () => {
  const products = [
    {
      id: 1,
      title: "Wireless Headphone",
      price: "$79",
      offer: "-30%",
      image: img1,
    },
    {
      id: 2,
      title: "Smart Watch Pro",
      price: "$129",
      offer: "-40%",
      image:img2,
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: "$59",
      offer: "-25%",
      image: img3,
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: "$39",
      offer: "-35%",
      image: img4,
    },
  ];

  return (
    <section className="bg-bg py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Flash Sale
          </h2>

          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full hover:bg-secondary transition">
            View All <FaArrowRight size={14} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <FlashSaleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
