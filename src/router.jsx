import { createBrowserRouter } from "react-router-dom";
import Root from "@/pages/root";
import Dishes from "@/pages/dishes/dishes";
import NewDish from "@/pages/admin/new-dish";
import Offers from "@/pages/offers/offers";
import AdminNewOffer from "@/pages/admin/admin-new-offer";
import Home from "@/pages/home";
import Login from "@/pages/login";
import SignUp from "@/pages/sign-up";
import DishDetails from "@/pages/dishes/dish-details";
import AdminMain from "@/pages/admin/admin-main";
import AdminDishes from "@/pages/admin/admin-dishes";
import AdminDishDetails from "./pages/admin/admin-dish-details";
import OfferDetails from "@/pages/offers/offer-details";
import AdminOffers from "@/pages/admin/admin-offers";
import AdminOfferDetails from "@/pages/admin/admin-offer-details";
import MyAccountMain from "./pages/my-account/my-account-main";
import MyAddress from "./pages/my-account/my-address";
import MyOrders from "./pages/my-account/my-orders";
import MyFavourite from "./pages/my-account/my-favourite";
import MyReviews from "./pages/my-account/my-reviews";
import MyAccount from "./pages/my-account/my-account";
import CreateAddress from "./pages/my-account/create-address";
import AdminOrders from "./pages/admin/admin-orders";

// import AddressDetail from "user-admin/address-detail";

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
      },
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
        path: "/admin/new-offer",
        element: <AdminNewOffer />,
      },
      {
        path: "/admin/admin-offers",
        element: <AdminOffers />,
      },
      {
        path: "/admin/admin-offers/:offerId",
        element: <AdminOfferDetails />,
      },
      {
        path: "/admin/admin-orders",
        element: <AdminOrders />,
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
        path: "/my-account",
        element: <MyAccountMain />,
        children: [
          {
            path: "/my-account",
            element: <MyAccount />,
          },
          {
            path: "/my-account/my-address",
            element: <MyAddress />,
          },
          {
            path: "/my-account/my-address/create-address",
            element: <CreateAddress />,
          },
          {
            path: "/my-account/my-orders",
            element: <MyOrders />,
          },
          {
            path: "/my-account/my-favourite",
            element: <MyFavourite />,
          },
          {
            path: "/my-account/my-reviews",
            element: <MyReviews />,
          },
        ],
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
