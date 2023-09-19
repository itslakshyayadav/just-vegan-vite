import { useEffect, useState } from "react";
import { API_BASE_PATH } from "@/helpers/constants";
import dishService from "@/services/dishService";
import { toast } from "react-toastify";
import BaseButton from "@/components/base-components/BaseButton";
import BaseIcon from "@/components/base-components/BaseIcon";
import ConfirmationModal from "@/components/page-components/ConfirmationModal";

export default function MyFavourite() {
  const [myFavourite, setMyFavourite] = useState([]);

  const fetchUser = async () => {
    const userAuthStore = localStorage.getItem("userAuth");
    const userAuthObject = JSON.parse(userAuthStore);
    const response = await fetch(
      `${API_BASE_PATH}/users/${userAuthObject.userId}`,
      {
        headers: {
          Authorization: `Bearer ${userAuthObject.accessToken}`,
        },
      }
    );
    const data = await response.json();
    setMyFavourite(data.payload.favouriteDishes);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const removeFavouriteDish = async (id) => {
    try {
      const response = await dishService.removeFavouriteDish(id);
      if (response.status === 200) {
        toast.success("Dish removed to favourite list.");
      }
    } catch (error) {
      toast.error(error.response.data.payload);
    }
  };

  return (
    <>
      <div className="container  m-auto   max-w-screen-md ">
        <div className=" mx-auto max-w-4xl lg:max-w-6xl   md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3 ">
            {myFavourite.map((dishItem, index) => {
              return (
                <div key={"dish-card" + index} className=" border rounded-2xl">
                  <div className="container   m-auto mb-2 rounded-md   max-w-screen-md ">
                    <img
                      className="rounded-t-2xl object-cover object-center w-full h-40"
                      src={dishItem.imgUrl}
                      alt=""
                    />

                    <div className="p-3">
                      <div className="flex gap-2 items-center mb-1">
                        <h2 className="mb-2 text-lg font-semibold tracking-tight text-neutral-800 dark:text-white">
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
                        <ConfirmationModal
                          modalText="Are you sure, you want to remove your favourite dish?"
                          onProceed={() => {
                            removeFavouriteDish(dishItem._id);
                          }}
                        >
                          <BaseButton type="button">
                            <div className="flex gap- items-center">
                              <BaseIcon iconName="minus"></BaseIcon>
                            </div>
                          </BaseButton>
                        </ConfirmationModal>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
