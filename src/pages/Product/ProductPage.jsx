import { useState } from "react";
import SingleProductCard from "../../components/ui/SingleProductCard";
import { FaSearch } from "react-icons/fa";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { FaDotCircle, FaRegCircle } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";

import img1 from "../../assets/d1.png";
import img2 from "../../assets/d2.png";
import img3 from "../../assets/d3.png";
import img4 from "../../assets/d4.jpg";

/* ================= DUMMY DATA ================= */
const dummyProducts = [
  {
    id: "1",
    title: "Wireless Bluetooth Headphone",
    price: 120,
    image: img1,
    offer: "20% OFF",
    category: "Electronics",
    brand: "Sony",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Smart Watch Series 7",
    price: 220,
    image: img2,
    offer: "New",
    category: "Electronics",
    brand: "Apple",
    rating: 4.8,
  },
  {
    id: "3",
    title: "Running Sports Shoes",
    price: 90,
    image: img3,
    offer: "15% OFF",
    category: "Fashion",
    brand: "Nike",
    rating: 4.3,
  },
  {
    id: "4",
    title: "DSLR Camera Lens",
    price: 350,
    image: img4,
    offer: "Hot",
    category: "Electronics",
    brand: "Canon",
    rating: 4.6,
  },
  {
    id: "5",
    title: "Men's Casual Backpack",
    price: 65,
    image: img1,
    offer: "10% OFF",
    category: "Accessories",
    brand: "Wildcraft",
    rating: 4.1,
  },
  {
    id: "6",
    title: "Gaming Mechanical Keyboard",
    price: 140,
    image: img2,
    offer: "Trending",
    category: "Electronics",
    brand: "Logitech",
    rating: 4.7,
  },
  {
    id: "7",
    title: "DSLR Camera Lens",
    price: 350,
    image: img4,
    offer: "Hot",
    category: "Electronics",
    brand: "Canon",
    rating: 4.6,
  },
  {
    id: "8",
    title: "Men's Casual Backpack",
    price: 65,
    image: img1,
    offer: "10% OFF",
    category: "Accessories",
    brand: "Wildcraft",
    rating: 4.1,
  },
  {
    id: "9",
    title: "Gaming Mechanical Keyboard",
    price: 140,
    image: img2,
    offer: "Trending",
    category: "Electronics",
    brand: "Logitech",
    rating: 4.7,
  },
];

/* ================= FILTER OPTIONS ================= */
const categories = ["Electronics", "Fashion", "Accessories"];
const brands = ["Sony", "Apple", "Nike", "Canon", "Wildcraft", "Logitech"];
const ratings = [4, 3];

/* ================= COMPONENT ================= */
const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(500);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [rating, setRating] = useState(null);

  const filteredProducts = dummyProducts.filter((p) => {
    return (
      p.price <= price &&
      (!category || p.category === category) &&
      (!brand || p.brand === brand) &&
      (!rating || p.rating >= rating) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* ================= LEFT FILTER SIDEBAR ================= */}
        <aside className="bg-white rounded-xl shadow p-5 space-y-6 sticky top-24 h-fit">
          <h3 className="text-lg font-semibold text-primary">Filters</h3>

          {/* PRICE RANGE */}
          <div>
            <h4 className="font-semibold mb-2">Price Range</h4>
            <div className="flex justify-between text-sm mb-1">
              <span>$0</span>
              <span className="font-semibold text-primary">${price}</span>
              <span>$500</span>
            </div>
            <input
              type="range"
              min="0"
              max="500"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          {/* ================= CATEGORIES ================= */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>

            <div className="space-y-3">
              {categories.map((c) => {
                const isActive = category === c;

                return (
                  <button
                    key={c}
                    onClick={() => setCategory(isActive ? null : c)}
                    className="flex items-center gap-3 w-full text-left group"
                  >
                    {/* Checkbox Icon */}
                    <span className="text-primary">
                      {isActive ? (
                        <FaCheckSquare size={18} />
                      ) : (
                        <FaRegSquare
                          size={18}
                          className="group-hover:text-primary"
                        />
                      )}
                    </span>

                    {/* Label */}
                    <span
                      className={`text-sm ${
                        isActive
                          ? "font-semibold text-primary"
                          : "text-gray-700"
                      }`}
                    >
                      {c}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= BRANDS ================= */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Brands</h4>

            <div className="space-y-3">
              {brands.map((b) => {
                const isActive = brand === b;

                return (
                  <button
                    key={b}
                    onClick={() => setBrand(isActive ? null : b)}
                    className="flex items-center gap-3 w-full text-left group"
                  >
                    {/* Checkbox Icon */}
                    <span className="text-secondary">
                      {isActive ? (
                        <FaCheckSquare size={18} />
                      ) : (
                        <FaRegSquare
                          size={18}
                          className="group-hover:text-secondary"
                        />
                      )}
                    </span>

                    {/* Label */}
                    <span
                      className={`text-sm ${
                        isActive
                          ? "font-semibold text-secondary"
                          : "text-gray-700"
                      }`}
                    >
                      {b}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= RATINGS ================= */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Ratings</h4>

            <div className="space-y-3">
              {ratings.map((r) => {
                const isActive = rating === r;

                return (
                  <button
                    key={r}
                    onClick={() => setRating(isActive ? null : r)}
                    className="flex items-center gap-3 w-full text-left group"
                    aria-pressed={isActive}
                  >
                    {/* Star Icon */}
                    <span className="text-yellow-400">
                      {isActive ? (
                        <FaStar size={18} />
                      ) : (
                        <FaRegStar
                          size={18}
                          className="group-hover:text-yellow-400 transition"
                        />
                      )}
                    </span>

                    {/* Label */}
                    <span
                      className={`text-sm ${
                        isActive
                          ? "font-semibold text-yellow-500"
                          : "text-gray-700"
                      }`}
                    >
                      {r} Star{r > 1 ? "s" : ""} & up
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ================= RIGHT PRODUCT CONTENT ================= */}
        <section className="lg:col-span-3 space-y-6">
          <h1 className="text-2xl font-bold text-primary">All Products</h1>

          {/* SEARCH + COUNT */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-full pl-5 pr-12 py-2 
                 focus:outline-none focus:ring-2 focus:ring-primary 
                 transition"
              />

              {/* Search Button */}
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 
                 bg-primary text-white w-9 h-9 rounded-full 
                 flex items-center justify-center 
                 hover:bg-secondary transition cursor-pointer"
                aria-label="Search"
              >
                <FaSearch size={14} />
                {/* If you prefer icon:
      <FaSearch size={14} />
      */}
              </button>
            </div>

            {/* Result Count */}
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold">{filteredProducts.length}</span>{" "}
              items
            </p>
          </div>

          {/* PRODUCT GRID */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => (
              <SingleProductCard key={item.id} item={item} />
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <SingleProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products found.
            </p>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Previous */}
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-full border text-sm 
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-primary hover:text-white transition cursor-pointer"
                >
                  Prev
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full text-sm font-medium cursor-pointer border transition
              ${
                currentPage === page
                  ? "bg-primary text-white border-primary"
                  : "hover:border-primary hover:text-primary"
              }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next */}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-full border text-sm 
                   disabled:opacity-40 disabled:cursor-not-allowed
                   hover:bg-primary hover:text-white transition cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
