import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./config/router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.PRODUCT,
    element: <Product />,
  },
  {
    path: ROUTES.CART,
    element: <Cart />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
