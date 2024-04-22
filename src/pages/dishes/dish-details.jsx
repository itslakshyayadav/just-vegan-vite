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

  // console.log(params);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`${API_BASE_PATH}/dishes/${params.dishId}`);
      const data = await response.json();
      setDisheDetails(data.payload);
    };
    fetchUserData();
  }, []);

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
    <div className="flex flex-col md:flex-row justify-center px-5 py-5 md:px-10 md:py-5 space-y-5 md:space-y-0 md:space-x-5">
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            dishDetails.imgUrl,
            dishDetails.imgUrl1,
            dishDetails.imgUrl2,
            dishDetails.imgUrl3,
          ].map((imgUrl, index) => (
            <div key={index}>
              <img
                src={imgUrl}
                className="w-full h-80 object-cover object-center rounded-sm"
                alt="food image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex  md:flex-row gap-3 items-center mb-2">
          <h1 className="text-2xl font-bold text-neutal-950">
            {dishDetails.dishName}
          </h1>
          {dishDetails.isCertified && <BaseIcon iconName="check"></BaseIcon>}
        </div>
        <span className=" mb-2 font-sans inline-flex items-center h-5 border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl px-1">
          <small> {dishDetails.dishCategory}</small>
        </span>
        <p className="capitalize text-gray-500 mb-2 font-semibold">
          {dishDetails.description}
        </p>

        <div className="grid grid-cols-2 gap-10  mt-4 md:w-4/5">
          {dishStats.map((element, index) => (
            <div key={index} className="py-1 font-semibold border-b">
              <small className="text-[0.7rem] uppercase text-neutral-500">
                {element.name}
              </small>
              <h1>{element.pro}</h1>
            </div>
          ))}
        </div>
        <div className="py-2 mt-2">
          <span className="rounded-sm text-center text-2xl font-semibold">
            ₹ {dishDetails.price}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 md:w-1/3">
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
          <div className="w-1/2 md:w-1/3">
            <BaseButton
              type="button"
              onClick={() => {
                addFavouriteDish(dishDetails._id);
              }}
              className="w-full flex justify-center gap-2 flex-wrap border rounded-md py-3 bg-neutral-100 hover:bg-neutral-200 font-semibold "
            >
              <BaseIcon iconName="heart"></BaseIcon> WISHLIST
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
