import { useState } from "react";

const statusStyle = {
  Pending: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200",
  Processing: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  Delivered: "bg-green-50 text-green-700 ring-1 ring-green-200",
  Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-200",
};

const initialOrders = [
  {
    id: "#1001",
    customer: "John Doe",
    date: "2025-01-12",
    amount: 120,
    status: "Pending",
  },
  {
    id: "#1002",
    customer: "Sarah Smith",
    date: "2025-01-13",
    amount: 250,
    status: "Processing",
  },
  {
    id: "#1003",
    customer: "Alex Brown",
    date: "2025-01-14",
    amount: 99,
    status: "Delivered",
  },
];

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900">
        Orders Management
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wide">
              <th className="px-6 py-4 text-left">Order ID</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-right">Amount</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-gray-700">{order.date}</td>
                <td className="px-6 py-4 text-right font-semibold text-gray-900">
                  ${order.amount}
                </td>
                <td className="px-6 py-4 text-center">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className={`inline-flex cursor-pointer rounded-full px-3 py-1 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition shadow-sm ${
                      statusStyle[order.status]
                    }`}
                  >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-6 mt-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl border p-5 shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium text-gray-900">{order.id}</p>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                className={`cursor-pointer rounded-full px-5 py-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition shadow-sm ${
                  statusStyle[order.status]
                }`}
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Customer: </span>
              {order.customer}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Date: </span>
              {order.date}
            </p>
            <p className="text-gray-900 font-bold mt-2 text-lg">
              ${order.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
