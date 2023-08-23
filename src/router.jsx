import { createBrowserRouter } from "react-router-dom";
import Root from "@/pages/root";
import Dishes from "@/pages/dishes/dishes";
import NewDish from "@/pages/admin/new-dish";
import Offers from "@/pages/offers/offers";
import OfferCardAdmin from "@/pages/admin/offercard-admin";
import Home from "@/pages/home";
import Login from "@/pages/login";
import SignUp from "@/pages/sign-up";
import DishDetails from "@/pages/dishes/dish-details";
import AdminMain from "@/pages/admin/admin-main";
import AdminDishes from "@/pages/admin/admin-dishes";
import AdminDishDetails from "./pages/admin/admin-dish-details";
import OfferDetails from "@/pages/offers/offer-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dishes",
        element: <Dishes />,
      },
      {
        path: "/dishes/:dishId",
        element: <DishDetails />,
      },
      {
        path: "/admin",
        element: <AdminMain />,
        children: [
          {
            path: "/admin/new-dish",
            element: <NewDish />,
          },
          {
            path: "/admin/admin-dishes",
            element: <AdminDishes />,
          },
          {
            path: "/admin/admin-dishes/:dishId",
            element: <AdminDishDetails />,
          },
          {
            path: "/admin/admin-offer",
            element: <OfferCardAdmin />,
          },
        ],
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/offers/:offerId",
        element: <OfferDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
