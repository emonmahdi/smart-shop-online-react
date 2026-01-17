import React from "react";

const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    date: "2025-01-12",
    amount: "$120",
    status: "Pending",
  },
  {
    id: "#1002",
    customer: "Sarah Smith",
    date: "2025-01-13",
    amount: "$250",
    status: "Processing",
  },
  {
    id: "#1003",
    customer: "Alex Brown",
    date: "2025-01-14",
    amount: "$99",
    status: "Delivered",
  },
];

const statusStyle = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function Orders() {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
        <p className="text-sm text-gray-500">Manage all customer orders</p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3 font-semibold">{order.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-xl shadow space-y-2"
          >
            <div className="flex justify-between">
              <span className="font-semibold">{order.id}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs ${statusStyle[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Customer: {order.customer}
            </p>
            <p className="text-sm text-gray-600">Date: {order.date}</p>
            <p className="text-sm font-semibold">Amount: {order.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
