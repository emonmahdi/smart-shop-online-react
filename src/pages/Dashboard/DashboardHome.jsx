import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaBoxOpen,
} from "react-icons/fa";

const DashboardHome = () => {
  const stats = [
    {
      label: "Total Users",
      value: 1245,
      icon: <FaUsers size={30} />,
      bg: "bg-blue-500",
    },
    {
      label: "Orders",
      value: 532,
      icon: <FaShoppingCart size={30} />,
      bg: "bg-green-500",
    },
    {
      label: "Revenue",
      value: "$34,200",
      icon: <FaDollarSign size={30} />,
      bg: "bg-yellow-500",
    },
    {
      label: "Products",
      value: 128,
      icon: <FaBoxOpen size={30} />,
      bg: "bg-purple-500",
    },
  ];

  const recentOrders = [
    {
      id: "#1001",
      customer: "John Doe",
      date: "2025-01-12",
      status: "Pending",
    },
    {
      id: "#1002",
      customer: "Sarah Smith",
      date: "2025-01-13",
      status: "Processing",
    },
    {
      id: "#1003",
      customer: "Alex Brown",
      date: "2025-01-14",
      status: "Delivered",
    },
  ];

  const statusColors = {
    Pending: "bg-yellow-200 text-yellow-800",
    Processing: "bg-blue-200 text-blue-800",
    Delivered: "bg-green-200 text-green-800",
  };

  return (
    <div className="p-4 md:p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map(({ label, value, icon, bg }) => (
          <div
            key={label}
            className={`flex items-center gap-4 p-6 rounded-lg shadow-md text-white transform transition-transform hover:scale-105 ${bg}`}
          >
            <div>{icon}</div>
            <div>
              <p className="text-sm font-medium">{label}</p>
              <p className="text-2xl font-semibold">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <section className="bg-white rounded-lg shadow p-6 mb-8 animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(({ id, customer, date, status }) => (
                <tr
                  key={id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4 font-medium">{id}</td>
                  <td className="py-2 px-4">{customer}</td>
                  <td className="py-2 px-4">{date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[status] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="flex gap-4">
        <button className="flex-1 bg-primary text-white py-3 rounded-lg shadow hover:bg-primary/90 transition transform hover:scale-105">
          + Add New Product
        </button>
        <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg shadow hover:bg-gray-300 transition transform hover:scale-105">
          View All Orders
        </button>
      </section>

      {/* Tailwind Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% {opacity: 0;}
            100% {opacity: 1;}
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default DashboardHome;
