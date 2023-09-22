import { useState, useEffect, useContext } from "react";
// import BaseSlider from "@/components/base-components/BaseSlider";
import BaseIcon from "../base-components/BaseIcon";
import BaseButton from "../base-components/BaseButton";
import CartContext from "@/contexts/CartContext";

export default function DefaultCartSlider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <div onClick={openModal}>{children}</div>
      {isOpen && (
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
          <div className="pointer-events-auto relative w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-auto bg-white  shadow-xl">
              {/* <BaseSlider> */}
              <div className="absolute left-16 top-5 -ml-8 flex pr-2  sm:-ml-10 sm:pr-4">
                <BaseButton
                  type="button"
                  onClick={closeModal}
                  className="relative rounded-md h-6  w-6 text-black focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <BaseIcon iconName="crossIcon"></BaseIcon>
                </BaseButton>
              </div>

              <div className="">
                <div className="bg-neutral-100 mb-5">
                  <div className="">
                    <h1 className="py-4 text-center font-semibold">
                      CART ITEMS
                    </h1>
                  </div>
                  <h1 className="text-center font-semibold text-white bg-emerald-500">
                    Free delivery on all orders above ₹499{" "}
                  </h1>
                </div>
                <div className="flex flex-col divide-y  m-auto ">
                  {cart.map((dishData, index) => {
                    console.log(dishData);
                    if (!dishData) return null;
                    return (
                      <div
                        key={index}
                        className=" py-3 px-5 hover:bg-slate-100"
                      >
                        <div className="flex gap-2">
                          <div className="w-20">
                            <img
                              src={
                                dishData &&
                                dishData.dish &&
                                dishData.dish.imgUrl
                              }
                              alt="image"
                            />
                          </div>
                          <div className="flex justify-between w-full">
                            <div>
                              <h1 className="text-neutral-800 font-semibold">
                                {dishData.dish.dishName}
                              </h1>
                              <p className=" font-semibold text-emerald-500">
                                ₹ {dishData.price}
                              </p>
                            </div>
                            <div>
                              <BaseButton
                                type="button"
                                // onClick={}
                                className="text-black"
                              >
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="w-6 p-1 hover:border hover:bg-slate-100"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </BaseButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* </BaseSlider> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
