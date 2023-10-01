import { useParams } from "react-router-dom";
import { API_BASE_PATH, ICONS } from "@/helpers/constants";
import { useState, useEffect, useContext } from "react";
import BaseIcon from "@/components/base-components/BaseIcon";
import dishService from "@/services/dishService";
import { toast } from "react-toastify";
import CartContext from "@/contexts/CartContext";
import BaseButton from "@/components/base-components/BaseButton";

// import BaseButton from "@/components/base-components/BaseButton";

export default function DishDetails() {
  const [dishDetails, setDisheDetails] = useState({});

  const { addToCart, cart, decrementQuantity } = useContext(CartContext);
  const cartArray = cart;
  const found = cartArray.find((data) => {
    return data.dish._id === dishDetails._id;
  });

  let params = useParams();
  const dishStats = [
    { name: "energy(g)", pro: <>{dishDetails.energy}</> },
    { name: "fat(g)", pro: <>{dishDetails.fat}</> },
    { name: "carbs(g)", pro: <>{dishDetails.carbs}</> },
    { name: "protein(g)", pro: <>{dishDetails.protein}</> },
    { name: "fiber(g)", pro: <>{dishDetails.fiber}</> },
  ];

  console.log(params);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`${API_BASE_PATH}/dishes/${params.dishId}`);
      const data = await response.json();
      setDisheDetails(data.payload);
    };
    fetchUserData();
  }, []);

  const addFavouriteDish = async (id) => {
    // toast.error("Please login to add a favorite dish.");

    try {
      const response = await dishService.addFavouriteDish(id);
      if (response.status === 200) {
        toast.success("Dish added to favourite list.");
      }
    } catch (error) {
      toast.error(error.response.data.payload);
    }
  };

  return (
    <div className=" flex gap-5 px-10 py-5  ">
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <img
              src={dishDetails.imgUrl}
              className="w-full h-80 object-cover object-center rounded-sm"
              alt=""
            />
          </div>
          <div>
            <img
              src={dishDetails.imgUrl1}
              className="w-full h-80 object-cover object-center rounded-sm"
              alt=""
            />
          </div>
          <div>
            <img
              src={dishDetails.imgUrl2}
              className="w-full h-80 object-cover object-center rounded-sm"
              alt=""
            />
          </div>
          <div>
            <img
              src={dishDetails.imgUrl3}
              className="w-full h-80 object-cover object-center rounded-sm"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex gap-3 items-center mb-2">
          <h1 className="text-2xl font-bold">{dishDetails.dishName}</h1>
          {dishDetails.isCertified ? (
            <BaseIcon iconName="check"></BaseIcon>
          ) : null}
        </div>
        <span className=" mb-2 font-sans inline-flex items-center h-5 border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl   px-1">
          <small> {dishDetails.dishCategory}</small>
        </span>
        <p className="capitalize text-gray-500 mb-2 font-semibold">
          {dishDetails.description}
        </p>

        <div className="grid grid-cols-2 gap-10  mt-4 w-4/5  ">
          {dishStats.map((element, index) => {
            return (
              <div key={index} className="py-1 font-semibold border-b w-64">
                <small className="text-[0.7rem] uppercase text-neutral-500">
                  {element.name}
                </small>
                <h1>{element.pro}</h1>
              </div>
            );
          })}
        </div>
        <div className="py-2 mt-2">
          <span className="rounded-sm text-center text-2xl  font-semibold">
            ₹ {dishDetails.price}
          </span>
        </div>
        <div className="flex gap-2  ">
          <div className="w-1/3 ">
            {found && found.quantity ? (
              <div className="flex items-center gap-1 border justify-center py-2 w-full rounded-md">
                <BaseButton
                  className="bg-neutral-100 p-1"
                  onClick={() => {
                    decrementQuantity(dishDetails);
                  }}
                >
                  <BaseIcon
                    className="h-5 w-5  flex"
                    iconName={ICONS.Minus}
                  ></BaseIcon>
                </BaseButton>

                <span className="p-1">{found && found.quantity}</span>
                <BaseButton
                  className="bg-neutral-100 p-1"
                  onClick={() => {
                    addToCart(dishDetails);
                  }}
                >
                  <BaseIcon
                    className="h-5 w-5 flex"
                    iconName={ICONS.Plus}
                  ></BaseIcon>
                </BaseButton>
              </div>
            ) : (
              <BaseButton
                className="w-full flex justify-center gap-2 border rounded-md py-3 bg-teal-500 hover:bg-teal-700 text-white font-semibold"
                type="button"
                onClick={() => {
                  addToCart(dishDetails);
                }}
              >
                Add to cart
              </BaseButton>
            )}
          </div>
          <div className="w-1/3 ">
            <BaseButton
              type="button"
              Onclick={() => {
                addFavouriteDish(dishDetails._id);
              }}
              className="w-full flex justify-center gap-2 border rounded-md py-3 bg-neutral-100 hover:bg-neutral-200 font-semibold "
            >
              <BaseIcon iconName="heart"></BaseIcon> WISHLIST
            </BaseButton>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-2 mb-4 ">
          <div className=" flex gap-3 font-semibold justify-center rounded-md items-center border w-26 text-center">
            <small>Certified</small>
            {dishDetails.isCertified ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className=" flex gap-3 font-semibold justify-center rounded-md items-center border w-26 text-center">
            <small>VaccumSealed</small>
            {dishDetails.isVaccumSealed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className="flex gap-3 font-semibold justify-center rounded-md items-center border w-26 text-center">
            <small>PreservativeFree</small>
            {dishDetails.isPreservativeFree ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className="flex gap-3 font-semibold justify-center rounded-md items-center border w-26 text-center">
            <small>Active</small>
            {dishDetails.isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
