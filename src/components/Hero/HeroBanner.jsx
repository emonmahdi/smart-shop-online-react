import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { heroProducts } from "./heroData";
import ProductCard from "../ui/ProductCard";

import imgBanner from "./../../assets/bg.jpg";

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 > heroProducts.length - 3 ? 0 : prev + 1));
  };

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 < 0 ? heroProducts.length - 3 : prev - 1));
  };

  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${imgBanner})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 text-white">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">
            Smart <span className="text-secondary">Online Shop</span> – Your
            Trusted Destination
          </h1>
          <p className="mt-4 text-gray-200">
            Discover trending products, exclusive deals, and top-quality items
            curated just for you. Shop confidently with unbeatable prices,
            seamless browsing, and fast, reliable delivery that brings
            convenience straight to your doorstep.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-14">
          {/* Cards */}
          <div className="flex gap-6 overflow-hidden justify-center">
            {heroProducts.slice(index, index + 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow hover:bg-secondary hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow hover:bg-secondary hover:text-white transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
