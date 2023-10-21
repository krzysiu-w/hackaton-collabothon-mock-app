import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import PATH from "./paths";
import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
]);

export default router;
