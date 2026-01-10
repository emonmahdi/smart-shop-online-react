import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams(); // URL থেকে product id পাওয়া যাবে

  // এখানে তোমার API call বা ডেটা ফেচ করার logic আসবে
  // এখন শুধু id দেখানো হলো

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p>Showing details for product ID: <strong>{id}</strong></p>

      {/* ভবিষ্যতে এখানে product info, images, description, price ইত্যাদি দেখাবে */}
    </div>
  );
};

export default ProductDetails;
