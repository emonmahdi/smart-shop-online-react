import { useState } from "react";
import {
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            <Link to={"/"}>
              {" "}
              Smart<span className="text-secondary">Shop</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-text">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary"
                    : "hover:text-secondary transition"
                }
              >
                Home
              </NavLink>
            </li>

            {/* Categories Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-secondary transition">
                Categories <FaChevronDown size={14} />
              </div>

              <ul
                className={`absolute top-10 left-0 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                  categoryOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {["electronics", "fashion", "groceries", "accessories"].map(
                  (item) => (
                    <li key={item}>
                      <NavLink
                        to={`/product`}
                        className="block px-4 py-2 hover:bg-bg hover:text-secondary transition"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary"
                    : "hover:text-secondary transition"
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary"
                    : "hover:text-secondary transition"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary"
                    : "hover:text-secondary transition"
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            {/* Cart */}
            <Link to="/cart">
              <button className="relative text-primary hover:text-secondary cursor-pointer transition">
                <FaShoppingCart size={20} />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            {/* <Link to="/cart">
              <button className="relative text-primary hover:text-secondary cursor-pointer transition">
                <FaShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-1.5 rounded-full">
                  2
                </span>
              </button>
            </Link> */}

            {/* User Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUserOpen(true)}
              onMouseLeave={() => setUserOpen(false)}
            >
              <button className="text-primary hover:text-secondary transition">
                <FaUserCircle size={22} />
              </button>

              <ul
                className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg transition-all duration-300 ${
                  userOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <li className="px-4 py-2 hover:bg-bg transition">Profile</li>
                <li className="px-4 py-2 hover:bg-bg transition">Orders</li>
                <li className="px-4 py-2 text-red-500 hover:bg-bg transition">
                  Logout
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden pb-4 space-y-3 text-text font-medium">
            <p className="hover:text-secondary cursor-pointer">Home</p>

            {/* Mobile Categories Dropdown */}
            <div>
              <button
                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                className="flex items-center justify-between w-full hover:text-secondary"
              >
                Categories
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    mobileCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCategoryOpen && (
                <div className="mt-2 ml-4 space-y-2 text-sm">
                  <p className="hover:text-secondary cursor-pointer">
                    Electronics
                  </p>
                  <p className="hover:text-secondary cursor-pointer">Fashion</p>
                  <p className="hover:text-secondary cursor-pointer">
                    Groceries
                  </p>
                  <p className="hover:text-secondary cursor-pointer">
                    Accessories
                  </p>
                </div>
              )}
            </div>

            <p className="hover:text-secondary cursor-pointer">Blog</p>

            <p className="hover:text-secondary cursor-pointer">Contact Us</p>
            <Link to={'/dashboard'}>
            <p className="hover:text-secondary cursor-pointer">Dashboard</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
