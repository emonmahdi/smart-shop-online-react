import { Link, NavLink, Outlet } from "react-router";
import { useState } from "react";
import {
  FaBars,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  console.log(user);
  const [open, setOpen] = useState(false);
  const [productMenu, setProductMenu] = useState(false);

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded transition
     ${
       isActive
         ? "bg-primary text-white font-semibold"
         : "text-gray-300 hover:bg-primary hover:text-white"
     }`;

  const navClass = ({ isActive }) =>
    `block px-4 py-2 rounded ${
      isActive ? "bg-primary text-white" : "text-gray-300 hover:bg-primary"
    }`;

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
          <button onClick={() => setOpen(!open)} className="sm:hidden ml-2">
            <FaBars size={20} />
          </button>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="flex flex-1">
        {/* ================= SIDEBAR ================= */}
        <aside
          className={`min-h-screen bg-gray-900 text-white w-64 p-4 space-y-2
            absolute sm:static top-16 left-0 h-full transition
            ${open ? "block" : "hidden sm:block"}`}
        >
          {/* Dashboard */}
          <NavLink to="/dashboard" className={navItemClass}>
            Dashboard
          </NavLink>

          {user?.role === "user" && (
            <>
              <NavLink to="/dashboard/my-orders" className={navClass}>
                My Orders
              </NavLink>
              <NavLink to="/dashboard/wishlist" className={navClass}>
                Wishlist
              </NavLink>
              <NavLink to="/dashboard/profile" className={navClass}>
                Profile
              </NavLink>
            </>
          )}

          {/* // Admin Role  */}
          {user?.role === "admin" && (
            <>
              {/* Products Dropdown */}
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
                <div className="ml-4 space-y-1">
                  <NavLink
                    to="/dashboard/products"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded text-sm transition
           ${
             isActive
               ? "bg-primary text-white"
               : "text-gray-300 hover:bg-primary hover:text-white"
           }`
                    }
                  >
                    All Products
                  </NavLink>

                  <NavLink
                    to="/dashboard/products/add"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded text-sm transition
           ${
             isActive
               ? "bg-primary text-white"
               : "text-gray-300 hover:bg-primary hover:text-white"
           }`
                    }
                  >
                    Add Product
                  </NavLink>
                </div>
              )}
              <NavLink to="/dashboard/orders" className={navClass}>
                <span className="flex items-center gap-2">
                  <FaShoppingCart /> Orders
                </span>
              </NavLink>
              <NavLink to="/dashboard/users" className={navClass}>
                <span className="flex items-center gap-2">
                  <FaUsers /> Users
                </span>
              </NavLink>
              <NavLink to="/dashboard/settings" className={navClass}>
                <span className="flex items-center gap-2">
                  <FaUsers /> Settings
                </span>
              </NavLink>
            </>
          )}

          {/* Orders */}
          {/* <NavLink to="/dashboard/orders" className={navItemClass}>
            <FaShoppingCart /> Orders
          </NavLink> */}

          {/* Users */}
          {/* <NavLink to="/dashboard/users" className={navItemClass}>
            <FaUsers /> Users
          </NavLink> */}
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
