import { Link, NavLink, Outlet } from "react-router";
import { useState } from "react";
import {
  FaBars,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const [productMenu, setProductMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ================= TOP NAVBAR ================= */}
      <header className="h-16 bg-primary text-white flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">
            <Link to={"/"} className="text-white">
              {" "}
              Smart<span className="text-secondary">Shop</span>
            </Link>
        </h1>

        {/* Right User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs opacity-80">Admin</p>
          </div>

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden ml-2"
          >
            <FaBars size={20} />
          </button>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="flex flex-1">
        {/* ================= SIDEBAR ================= */}
        <aside
          className={`min-h-screen bg-gray-900 text-white w-64 p-4 space-y-4
          absolute sm:static top-16 left-0 h-full transition
          ${open ? "block" : "hidden sm:block"}`}
        >
          <NavLink
            to="/dashboard"
            className="text-white block px-4 py-2 rounded hover:bg-primary"
          >
            Dashboard
          </NavLink>

          {/* Products Dropdown */}
          <button
            onClick={() => setProductMenu(!productMenu)}
            className="text-white flex items-center justify-between w-full px-4 py-2 rounded hover:bg-primary"
          >
            <span className="flex items-center gap-2">
              <FaBox /> Products
            </span>
            <FaChevronDown
              className={`transition ${
                productMenu ? "rotate-180" : ""
              }`}
            />
          </button>

          {productMenu && (
            <div className="ml-6 space-y-2">
              <NavLink
                to="/dashboard/products"
                className="text-white block px-3 py-2 rounded hover:bg-primary"
              >
                All Products
              </NavLink>
              <NavLink
                to="/dashboard/products/add"
                className="text-white block px-3 py-2 rounded hover:bg-primary"
              >
                Add Product
              </NavLink>
            </div>
          )}

          <NavLink
            to="/dashboard/orders"
            className="text-white flex items-center gap-2 px-4 py-2 rounded hover:bg-primary"
          >
            <FaShoppingCart /> Orders
          </NavLink>

          <NavLink
            to="/dashboard/users"
            className="text-white flex items-center gap-2 px-4 py-2 rounded hover:bg-primary"
          >
            <FaUsers /> Users
          </NavLink>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
