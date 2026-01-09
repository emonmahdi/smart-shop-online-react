import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";


const routes = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        children:[
            {
                index: true,
                element:  <Home />
            }
        ]
    }
])

export default routes;