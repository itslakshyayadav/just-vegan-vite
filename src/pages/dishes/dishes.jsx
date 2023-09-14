import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import dishService from "@/services/dishService";
import BaseButton from "@/components/base-components/BaseButton";
import BaseIcon from "@/components/base-components/BaseIcon";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await dishService.getDishes();
      setDishes(response.data.payload);
    };

    fetchUserData();
  }, [setDishes]);

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

  const [filter, setFilter] = useState("all-dishes");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log(setFilter);
  };

  const filteredDishes =
    filter === "all-dishes"
      ? dishes
      : dishes.filter((dish) => dish.dishCategory === filter);
  //dishes.filter((dish) =>
  // filter ? dish.dishCategory === filter : true
  // );
  return (
    <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
      <hr className="mb-4" />
      <div className="flex items-center gap-5">
        <Link to="/" className="text-3xl text-gray-800 font-sans font-semibold">
          Filters
        </Link>
        <div className="flex items-center border px-3 hover:shadow-lg ">
          <label
            htmlFor="alldishes"
            className="font-semibold px-3 py-2 text-gray-600"
          >
            All Dishes
          </label>
          <input
            id="alldishes"
            value="All Dishes"
            checked={filter === "All Dishes"}
            onChange={handleFilterChange}
            type="checkbox"
            className="w-4 h-4 px-3 "
          />
        </div>
        <div className="flex items-center border px-3 hover:shadow-lg">
          <label
            htmlFor="breakfast"
            className="font-semibold px-3 py-2 text-gray-600"
          >
            Breakfast
          </label>
          <input
            id="breakfast"
            value="breakfast"
            checked={filter === "breakfast"}
            onChange={handleFilterChange}
            type="checkbox"
            className="w-4 h-4 px-3 "
          />
        </div>
        <div className="flex items-center px-3 border hover:shadow-lg ">
          <label
            htmlFor="dinner"
            className="font-semibold px-3 py-2 text-gray-600"
          >
            Dinner
          </label>
          <input
            id="dinner"
            type="checkbox"
            value="dinner"
            checked={filter === "dinner"}
            onChange={handleFilterChange}
            className="w-4 h-4 px-3"
          />
        </div>
        <div className="flex items-center px-3 border hover:shadow-lg">
          <label
            htmlFor="lunch"
            className="font-semibold px-3 py-2 text-gray-600"
          >
            Lunch
          </label>
          <input
            id="lunch"
            value="lunch"
            checked={filter === "lunch"}
            onChange={handleFilterChange}
            type="checkbox"
            className="w-4 h-4 px-3"
          />
        </div>
      </div>
      <hr className="mt-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
        {filteredDishes.map((dishItem, index) => {
          return (
            dishItem.isActive && (
              <div key={"dish-card" + index} className="">
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
                      ₹{dishItem.price ? dishItem.price : "110"}
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
                        <div className="flex gap- items-center">
                          <BaseIcon iconName="heart"></BaseIcon>
                        </div>
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
export default Dishes;

// filter === 'All Dishes' ? dishes : dishes.filter((dish) => dish.category === filter);
// and
//dishes.filter((dish) =>
// filter ? dish.dishCategory === filter : true
// );
