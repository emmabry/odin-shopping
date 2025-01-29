import Cart from "./components/Cart";
import App from "./components/App";
import Shop from "./components/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "shop",
    element: <Shop />,
  }
];

export default routes;
