import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Dishes from "./pages/dishes";
import AdminDish from "./pages/admin-dish";
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "/dishes",
        element: <Dishes />,
      },
      {
        path: "/admin-dish",
        element: <AdminDish />,
      },
    ],
  },
]);

export default router;
