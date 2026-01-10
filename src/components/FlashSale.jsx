import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/d1.png";
import img2 from "../assets/d2.png";
import img3 from "../assets/d3.png";
import img4 from "../assets/d4.jpg";
import SingleProductCard from "./ui/SingleProductCard";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

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
      image: img2,
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
    <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">
          <SectionHeading title={"Flash Sale"} />

          <Button variant="primary" icon={<FaArrowRight size={14} />}>
            View All
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <SingleProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
