import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/d1.png";
import img2 from "../../assets/d2.png";
import img3 from "../../assets/d3.png";
import img4 from "../../assets/d4.jpg";
import img5 from "../../assets/blutooth.png";
import img6 from "../../assets/mobile.png";
import img7 from "../../assets/headphones.png";
import img8 from "../../assets/mouse.png";

import SectionHeading from "../../components/ui/SectionHeading";
import SingleProductCard from "../../components/ui/SingleProductCard";
import Button from "../../components/ui/Button";

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
  {
    id: 5,
    title: "Gaming Mouse",
    price: "$39",
    offer: "-35%",
    image: img5,
  },
  {
    id: 6,
    title: "Gaming Mouse",
    price: "$39",
    offer: "-35%",
    image: img6,
  },
  {
    id: 7,
    title: "Gaming Mouse",
    price: "$39",
    offer: "-35%",
    image: img7,
  },
  {
    id: 8,
    title: "Gaming Mouse",
    price: "$39",
    offer: "-35%",
    image: img8,
  },
];

const MostPopularProduct = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading
            title={"Most Popular Products"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
            }
          />
          <Button variant="primary" icon={<FaArrowRight size={14} />}>
            View All
          </Button>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <SingleProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularProduct;
