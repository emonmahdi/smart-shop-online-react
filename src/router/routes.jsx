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
      { path: "checkout", element: <CheckoutPage /> },
      { path: "order-success", element: <OrderSuccess /> },
    ],
  },
]);

export default routes;