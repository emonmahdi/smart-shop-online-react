import React, { useState } from "react";
import { useParams, Link } from "react-router";
import mainImg from "../../assets/blutooth.png";
import thumb1 from "../../assets/d2.png";
import thumb2 from "../../assets/d3.png";
import thumb3 from "../../assets/d1.png";
import { FaStar, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const product = {
    id,
    name: "Awesome Product Name Goes Here",
    price: 129.99,
    rating: 4.5,
    description:
      "This is a detailed description of the product. It explains features, benefits, and important information customers should know before purchasing.",
    reviews: [
      {
        user: "John Doe",
        comment:
          "Great product! Highly recommend it. Quality is top-notch and fast delivery.",
        rating: 5,
      },
      {
        user: "Jane Smith",
        comment: "Good value for money, but packaging could be better.",
        rating: 4,
      },
    ],
    images: [mainImg, thumb1, thumb2, thumb3],
    details: [
      "Free shipping within 3-5 business days",
      "1-year manufacturer warranty",
      "30-day return policy",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // tab state

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    if (halfStar) {
      stars.push(
        <FaStar key="star-half" className="text-yellow-400 opacity-50" />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6" aria-label="Breadcrumb">
        <ol className="list-reset flex text-gray-600">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-800 font-semibold">{product.name}</li>
        </ol>
      </nav>

      {/* TOP section: 2 equal columns */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column: images */}
        <div className="md:w-1/2 flex gap-4 max-w-full">
          {/* Thumbnails */}
          <div className="flex flex-col space-y-4 shrink-0">
            {product.images.slice(1).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`border-2 rounded-lg overflow-hidden ${
                  mainImage === img ? "border-primary" : "border-transparent"
                }`}
                aria-label={`Thumbnail ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white flex items-center justify-center">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full max-h-[480px] object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right column: product details */}
        <div className="md:w-1/2 flex flex-col">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-primary mb-4">
            {product.name}
          </h1>

          {/* Price + Rating */}
          <div className="flex items-center gap-6 mb-6 flex-wrap">
            <span className="text-2xl font-extrabold text-secondary whitespace-nowrap">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
              <span className="text-gray-600 ml-2">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* 3 Details (dots) */}
          <ul className="mb-8 flex flex-col space-y-2 text-gray-600 list-disc list-inside max-w-md">
            {product.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>

          {/* Quantity selector + Add to cart */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <button
                onClick={decreaseQty}
                className="px-4 py-2 hover:bg-gray-200 transition"
                aria-label="Decrease quantity"
              >
                <FaMinus />
              </button>
              <span className="px-6 py-2 text-lg font-medium">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-4 py-2 hover:bg-gray-200 transition"
                aria-label="Increase quantity"
              >
                <FaPlus />
              </button>
            </div>

            <button
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-5 py-3 rounded-full shadow-lg transition flex-shrink-0"
              aria-label="Add to cart"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>

          {/* Buy Now full width button */}
          <button
            className="bg-primary text-white py-4 rounded-full w-full font-semibold hover:bg-primary/90 transition mb-6"
            aria-label="Buy now"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* BOTTOM section: full width tabs */}
      <div className="mt-12">
        <div className="flex border-b border-gray-300 mb-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 -mb-px font-semibold ${
              activeTab === "description"
                ? "border-b-4 border-primary text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`px-6 py-3 -mb-px font-semibold ${
              activeTab === "review"
                ? "border-b-4 border-primary text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            Reviews ({product.reviews.length})
          </button>
        </div>

        <div>
          {activeTab === "description" && (
            <p className="text-gray-700 leading-relaxed max-w-4xl">
              {product.description}
            </p>
          )}

          {activeTab === "review" && (
            <div className="space-y-6 max-w-4xl">
              {product.reviews.map((review, i) => (
                <div key={i} className="border-b border-gray-300 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold">{review.user}</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
