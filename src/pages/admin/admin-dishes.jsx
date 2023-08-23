import { useState, useEffect } from "react";
import { API_BASE_PATH } from "@/helpers/constants";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export default function AdminDishes() {
  let params = useParams();
  console.log(`params dish details`);
  console.log(params);

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
    <div>
      <h1>Admin Dishes</h1>
      <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
          {dishes.map((dishItem, index) => {
            return (
              <div
                key={"dish-card" + index}
                className="mt-6 border rounded-2xl"
              >
                <Link to={`/admin/admin-dishes/${dishItem._id}`}>
                  <img
                    className="rounded-t-2xl object-cover object-center w-full h-40"
                    src={dishItem.imgUrl}
                    alt=""
                  />
                </Link>
                <div className="p-3">
                  <h2 className="mb-2 text-lg font-semibold tracking-tight text-neutral-800 dark:text-white">
                    {dishItem.dishName}
                  </h2>

                  <p className="mb-3 font-bold text-neutral-700 dark:text-neutral-400">
                    ₹{dishItem.price ? dishItem.price : "110"}
                  </p>
                  <button
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm text-center text-white bg-emerald-700 rounded-md hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
