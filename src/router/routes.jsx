import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductPage from "../pages/Product/ProductPage";
import Shop from "../pages/Product/Shop";

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
        Component: Shop,
      },
    ],
  },
]);

export default routes;