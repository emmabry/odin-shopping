import Cart from "./components/Cart";
import App from "./components/App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />,
  }
];

export default routes;
