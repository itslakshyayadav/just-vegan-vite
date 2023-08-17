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
    <div className="flex  flex-wrap gap-5 justify-center">
      {dishes.map((element) => {
        return (
          <div key={element}>
            <div className="mt-6 max-w-xs   border-2 border-black-600	p-4  bg-blue-50  min-h-120 max-h-120 ">
              <img className="rounded-lg " src={element.imgUrl} alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title : {element.dishName}
                </h5>

                <p className="mb-3 font-normal text-red-700 dark:text-gray-400">
                  Price : {element.price}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Dishes;
