import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductPage from "../pages/Product/ProductPage";
import Shop from "../pages/Product/Shop";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Products from "../pages/Dashboard/Products";
import Users from "../pages/Dashboard/Users";
import AddProducts from "../pages/Dashboard/AddProducts";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "../routes/ProtectedRoute";
import Orders from "../pages/Dashboard/admin/Orders";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/product/:id",
        Component: ProductDetails,
      },
      {
        path: "/product",
        Component: ProductPage,
      },
      { path: "cart", element: <CartPage /> },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />{" "}
          </ProtectedRoute>
        ),
      },
      { path: "order-success", element: <OrderSuccess /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "users", element: <Users /> },
      { path: "products/add", element: <AddProducts /> },
    ],
  },
]);

export default routes;