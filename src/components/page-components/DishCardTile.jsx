import dishService from "@/services/dishService";
import { toast } from "react-toastify";
import BaseIcon from "@/components/base-components/BaseIcon";
import BaseButton from "../base-components/BaseButton";
import { Link } from "react-router-dom";
import { ICONS } from "@/helpers/constants";
import { useState, useContext } from "react";
import CartContext from "@/contexts/CartContext";
// import userService from "@/services/userService";

export default function DishCardTile(props) {
  const { addToCart, cart, decrementQuantity } = useContext(CartContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const { dishItem } = props;
  const addFavouriteDish = async (id) => {
    setIsFavorite(!isFavorite);
    try {
      const response = await dishService.addFavouriteDish(id);
      if (response.status === 200) {
        toast.success("Dish added to favourite list.");
      }
    } catch (error) {
      toast.error(error.response.data.payload);
    }
  };

  const cartArray = cart;
  const found = cartArray.find((data) => {
    return data.dish._id === dishItem._id;
  });

  return (
    <>
      <div className="mt-6 border rounded-2xl hover:shadow-xl">
        <Link to={`/dishes/${dishItem._id}`}>
          <img
            className="rounded-t-2xl object-cover object-center w-full h-56"
            src={dishItem.imgUrl}
            alt=""
          />
        </Link>
        <div className="p-3 flex flex-col gap-2">
          <div className="flex gap-2 justify-between">
            <div className="flex flex-col grow ">
              <div className="flex items-center gap-2">
                <h2 className=" text-lg capitalize font-semibold tracking-tight text-neutral-800 dark:text-white">
                  {dishItem.dishName}
                </h2>
                {dishItem.isCertified && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-teal-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                )}
              </div>
              <div className="">
                <span className="items-center border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl px-1 text-xs">
                  {dishItem.dishCategory}
                </span>
              </div>
            </div>
            <div>
              <BaseButton
                onClick={() => {
                  addFavouriteDish(dishItem._id);
                }}
                type="submit"
              >
                <div className="flex gap-2 items-center">
                  {isFavorite ? (
                    <BaseIcon
                      className="text-red-500"
                      iconName={ICONS.SolidHeart}
                    ></BaseIcon>
                  ) : (
                    <BaseIcon iconName="heart"></BaseIcon>
                  )}
                </div>
              </BaseButton>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="my-2 font-bold text-neutral-700 text-lg">
              ₹{dishItem.price}
            </p>

            <div className="flex justify-between items-center">
              {found && found.quantity ? (
                <div className="flex items-center gap-1  border rounded-md">
                  <button
                    className="bg-neutral-100 p-1"
                    onClick={() => {
                      decrementQuantity(dishItem);
                    }}
                  >
                    <BaseIcon
                      className="h-5 w-5 flex"
                      iconName={ICONS.Minus}
                    ></BaseIcon>
                  </button>
                  <span className="p-1">{found && found.quantity}</span>
                  <button
                    className="bg-neutral-100 p-1"
                    onClick={() => {
                      addToCart(dishItem);
                    }}
                  >
                    <BaseIcon
                      className="h-5 w-5 flex"
                      iconName={ICONS.Plus}
                    ></BaseIcon>
                  </button>
                </div>
              ) : (
                <button
                  className="inline-flex items-center px-4 py-2 text-sm text-center text-white bg-teal-700 rounded-md hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                  onClick={() => {
                    addToCart(dishItem);
                  }}
                  // onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
