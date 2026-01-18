import { Link, NavLink, Outlet } from "react-router";
import { useState } from "react";
import {
  FaBars,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChevronDown,
  FaCog,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [productMenu, setProductMenu] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded transition
     ${
       isActive
         ? "bg-primary text-white font-semibold"
         : "text-gray-300 hover:bg-primary hover:text-white"
     }`;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ================= TOP NAV ================= */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-primary text-white flex items-center justify-between px-6 z-50">
        <h1 className="text-xl font-bold text-white">
          <Link to="/" className="text-white">
            Smart<span className="text-secondary">Shop</span>
          </Link>
        </h1>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">{user?.name || "User"}</p>
            <p className="text-xs opacity-80 capitalize">{user?.role}</p>
          </div>

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />

          <button onClick={() => setOpen(!open)} className="sm:hidden ml-2">
            <FaBars size={20} />
          </button>
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-64
          bg-gray-900 text-white p-4 space-y-1
          overflow-y-auto z-40
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        <NavLink to="/dashboard" className={navClass}>
         <MdDashboard /> Dashboard
        </NavLink>

        {/* USER MENU */}
        {user?.role === "user" && (
          <>
            <NavLink to="/dashboard/my-orders" className={navClass}>
              <FaShoppingCart /> My Orders
            </NavLink>
            <NavLink to="/dashboard/wishlist" className={navClass}>
              <FaHeart /> Wishlist
            </NavLink>
            <NavLink to="/dashboard/profile" className={navClass}>
              <FaUser /> Profile
            </NavLink>
          </>
        )}

        {/* ADMIN MENU */}
        {user?.role === "admin" && (
          <>
            <button
              onClick={() => setProductMenu(!productMenu)}
              className="flex items-center justify-between w-full px-4 py-2 rounded
              text-gray-300 hover:bg-primary hover:text-white transition"
            >
              <span className="flex items-center gap-2">
                <FaBox /> Products
              </span>
              <FaChevronDown
                className={`transition ${productMenu ? "rotate-180" : ""}`}
              />
            </button>

            {productMenu && (
              <div className="ml-6 space-y-1">
                <NavLink to="/dashboard/products" className={navClass}>
                  All Products
                </NavLink>
                <NavLink to="/dashboard/products/add" className={navClass}>
                  Add Product
                </NavLink>
              </div>
            )}

            <NavLink to="/dashboard/orders" className={navClass}>
              <FaShoppingCart /> Orders
            </NavLink>

            <NavLink to="/dashboard/users" className={navClass}>
              <FaUsers /> Users
            </NavLink>

            <NavLink to="/dashboard/settings" className={navClass}>
              <FaCog /> Settings
            </NavLink>
          </>
        )}
      </aside>

      {/* ================= CONTENT ================= */}
      <main className="ml-0 sm:ml-64 pt-20 p-6 min-h-screen overflow-y-auto">
        <Outlet />
      </main>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 sm:hidden z-30"
        />
      )}
    </div>
  );
};

export default DashboardLayout;
