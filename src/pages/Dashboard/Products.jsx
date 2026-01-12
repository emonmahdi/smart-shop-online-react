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
      // 🔁 UPDATE
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...p, ...form, price: Number(form.price) }
            : p
        )
      );
    } else {
      // ➕ ADD
      const newProduct = {
        id: "P-" + Math.floor(Math.random() * 10000),
        ...form,
        price: Number(form.price),
        image: form.image || "https://via.placeholder.com/50",
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    // RESET
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
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-primary">
          All Products
        </h2>

        <button
          onClick={() => {
            setEditingProduct(null);
            setForm({ name: "", brand: "", price: "", image: "" });
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full hover:bg-secondary"
        >
          <FaPlus /> Add New Product
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">SL</th>
              <th className="px-4 py-3 text-left">Item</th>
              <th className="px-4 py-3">Brand</th>
              <th className="px-4 py-3">Product ID</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, index) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>

                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={p.image}
                    className="w-10 h-10 rounded"
                  />
                  <span className="font-medium">{p.name}</span>
                </td>

                <td className="px-4 py-3 text-center">{p.brand}</td>
                <td className="px-4 py-3 text-center">{p.id}</td>
                <td className="px-4 py-3 text-center font-semibold">
                  ${p.price}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(p)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                required
                className="w-full border px-4 py-2 rounded"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Brand"
                required
                className="w-full border px-4 py-2 rounded"
                value={form.brand}
                onChange={(e) =>
                  setForm({ ...form, brand: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Price"
                required
                className="w-full border px-4 py-2 rounded"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Image URL"
                className="w-full border px-4 py-2 rounded"
                value={form.image}
                onChange={(e) =>
                  setForm({ ...form, image: e.target.value })
                }
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-white rounded hover:bg-secondary"
                >
                  {editingProduct ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
