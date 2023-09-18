import dishService from "@/services/dishService";
import { toast } from "react-toastify";
import BaseIcon from "../base-components/BaseIcon";
import BaseButton from "../base-components/BaseButton";
import { Link } from "react-router-dom";
import { ICONS } from "@/helpers/constants";
export default function DishCardTile(props) {
  const { dishItem } = props;
  const addFavouriteDish = async (id) => {
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
    <>
      <div className="mt-6 border rounded-2xl hover:shadow-xl">
        <Link to={`/dishes/${dishItem._id}`}>
          <img
            className="rounded-t-2xl object-cover object-center w-full h-40"
            src={dishItem.imgUrl}
            alt=""
          />
        </Link>
        <div className="p-3">
          <div className="flex gap-2 items-center mb-1">
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
                className="w-6 h-6 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            )}
          </div>
          <span className="font-sans inline-flex items-center h-5 border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl   px-1">
            <small>{dishItem.dishCategory}</small>
          </span>
          <p className="mb-3 font-bold text-neutral-700 dark:text-neutral-400">
            ₹{dishItem.price}
          </p>

          <div className="flex justify-between items-center">
            <button
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm text-center text-white bg-emerald-700 rounded-md hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
            >
              Add to cart
            </button>

            <BaseButton
              onClick={() => {
                addFavouriteDish(dishItem._id);
              }}
              type="submit"
            >
              <div className="flex gap-2 items-center">
                {/* <BaseIcon iconName="heart"></BaseIcon> */}
                <BaseIcon
                  className="text-red-500"
                  iconName={ICONS.SolidHeart}
                ></BaseIcon>
              </div>
            </BaseButton>
          </div>
        </div>
      </div>
    </>
  );
}
