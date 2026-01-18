import { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: "P-1001",
      name: "Wireless Headphone",
      brand: "Sony",
      price: 120,
      image: "https://via.placeholder.com/50",
    },
    {
      id: "P-1002",
      name: "Smart Watch",
      brand: "Apple",
      price: 220,
      image: "https://via.placeholder.com/50",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
  });

  /* ================= ADD / UPDATE ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...p, ...form, price: Number(form.price) }
            : p
        )
      );
    } else {
      const newProduct = {
        id: "P-" + Math.floor(Math.random() * 10000),
        ...form,
        price: Number(form.price),
        image: form.image || "https://via.placeholder.com/50",
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    setShowModal(false);
    setEditingProduct(null);
    setForm({ name: "", brand: "", price: "", image: "" });
  };

  /* ================= EDIT ================= */
  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
    });
    setShowModal(true);
  };

  /* ================= DELETE ================= */
  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
        <h2 className="text-2xl font-extrabold text-primary">All Products</h2>

        <button
          onClick={() => {
            setEditingProduct(null);
            setForm({ name: "", brand: "", price: "", image: "" });
            setShowModal(true);
          }}
          className="inline-flex items-center gap-2 bg-primary hover:bg-secondary transition-colors text-white px-6 py-3 rounded-full font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <FaPlus /> Add New Product
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                SL
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Item
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Brand
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {products.map((p, index) => (
              <tr key={p.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                  {index + 1}
                </td>

                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 rounded-md object-cover border border-gray-300"
                  />
                  <span className="font-semibold text-gray-900">{p.name}</span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600">
                  {p.brand}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600">
                  {p.id}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-indigo-600">
                  ${p.price.toFixed(2)}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-6">
                  <button
                    onClick={() => handleEdit(p)}
                    aria-label={`Edit ${p.name}`}
                    className="text-indigo-600 hover:text-indigo-900 transition text-lg"
                    title="Edit Product"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => deleteProduct(p.id)}
                    aria-label={`Delete ${p.name}`}
                    className="text-red-600 hover:text-red-900 transition text-lg"
                    title="Delete Product"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-8 text-center text-gray-500 font-medium"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Product Name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="text"
                placeholder="Brand"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
              />

              <input
                type="number"
                placeholder="Price"
                required
                min={0}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

              <input
                type="text"
                placeholder="Image URL (optional)"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
                >
                  {editingProduct ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>

          {/* Modal fade-in animation */}
          <style>{`
            @keyframes fadeIn {
              from {opacity: 0;}
              to {opacity: 1;}
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease forwards;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Products;
