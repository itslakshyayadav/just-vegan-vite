import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Dishes from "./pages/dishes";
import Blog from "./pages/blog";
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
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
