import { useState, useEffect } from "react";
import { API_BASE_PATH } from "@/helpers/constants";
import { Link } from "react-router-dom";
const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`${API_BASE_PATH}/dishes`);
      const data = await response.json();
      console.log(data);
      setDishes(data.payload);
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
        {dishes.map((dishItem, index) => {
          return (
            dishItem.isActive && (
              <div key={"dish-card" + index}>
                <div className="mt-6 border rounded-2xl">
                  <Link to={`/dishes/${dishItem._id}`}>
                    <img
                      className="rounded-t-2xl object-cover object-center w-full h-40"
                      src={dishItem.imgUrl}
                      alt=""
                    />
                  </Link>
                  <div className="p-3">
                    <h2 className="mb-2 text-lg capitalize font-semibold tracking-tight text-neutral-800 dark:text-white">
                      {dishItem.dishName}
                    </h2>

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
                      <div className="flex">
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
