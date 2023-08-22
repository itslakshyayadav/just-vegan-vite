import { useState, useEffect } from "react";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("http://192.168.29.179:3001/dishes");
      const data = await response.json();
      console.log(data);
      setDishes(data.payload);
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
        {dishes.map((element, index) => {
          return (
            <div key={"dish-card" + index} className="mt-6 border rounded-2xl">
              <img
                className="rounded-t-2xl object-cover object-center w-full h-40"
                src={element.imgUrl}
                alt=""
              />

              <div className="p-3">
                <h2 className="mb-2 text-lg font-semibold tracking-tight text-neutral-800 dark:text-white">
                  {element.dishName}
                </h2>

                <p className="mb-3 font-bold text-neutral-700 dark:text-neutral-400">
                  ₹{element.price ? element.price : "110"}
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
  );
};
export default Dishes;
