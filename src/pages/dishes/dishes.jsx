import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import dishService from "@/services/dishService";
import DishCardTile from "@/components/page-components/DishCardTile";
import { toast } from "react-toastify";

const Dishes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dishes, setDishes] = useState([]);
  const fetchUserData = async (query) => {
    try {
      const response = await dishService.getDishes(query);
      setDishes(response.data.payload);
    } catch (error) {
      if (error.response === 500) {
        toast.error(error.response.status);
      }
    }
  };
  useEffect(() => {
    const queryParams = searchParams.get("dishCategory");
    fetchUserData(queryParams ? `?dishCategory=${queryParams}` : null);
  }, []);

  const dishCategoryTabs = [
    { name: "All Dishes", to: "" },
    { name: "Breakfast", to: "?dishCategory=breakfast" },
    { name: "Lunch", to: "?dishCategory=lunch" },
    { name: "Dinner", to: "?dishCategory=dinner" },
  ];

  // const [filter, setFilter] = useState("all-dishes");
  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  // const filteredDishes =
  //   filter === "all-dishes"
  //     ? dishes
  //     : dishes.filter((dish) => dish.dishCategory === filter);
  //dishes.filter((dish) =>
  // filter ? dish.dishCategory === filter : true
  // );
  return (
    <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:flex-0">
        {dishCategoryTabs.map((items, index) => {
          return (
            <div
              key={index}
              className="flex items-center border px-3 py-2 hover:shadow-lg "
            >
              <Link
                to={items.to}
                onClick={() => {
                  fetchUserData(items.to);
                }}
              >
                <label
                  htmlFor="dishes"
                  className="font-semibold px-3 py-2 text-gray-600"
                >
                  {items.name}
                </label>
              </Link>
            </div>
          );
        })}
        {/* <div className="flex items-center border px-3 hover:shadow-lg ">
        <label
            htmlFor="dishes"
            className="font-semibold px-3 py-2 text-gray-600"
          >
            All Dishes
          </label>
          <input
            id="dishes"
            value="all-dishes"
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
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-3">
        {dishes.map((dishItem, index) => {
          return (
            dishItem.isActive && (
              <div key={"dish-card" + index} className="">
                <DishCardTile dishItem={dishItem}></DishCardTile>
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
