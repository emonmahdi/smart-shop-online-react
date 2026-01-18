import React, { useState } from "react";

const AddProducts = () => {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product addition logic here
    alert("Product added successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          required
          value={form.brand}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          min={0}
          value={form.price}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            className="px-6 py-2 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
            onClick={() =>
              setForm({ name: "", brand: "", price: "", image: "" })
            }
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
