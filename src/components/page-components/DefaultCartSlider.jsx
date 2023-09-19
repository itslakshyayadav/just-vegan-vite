import { useState, useEffect } from "react";
import BaseSlider from "@/components/base-components/BaseSlider";
import BaseIcon from "../base-components/BaseIcon";
import BaseButton from "../base-components/BaseButton";

export default function DefaultCartSlider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
                <div className="bg-neutral-100">
                  <div className="px-5 py-3">
                    <h1 className="py-4 text-center font-semibold">
                      {" "}
                      CART ITEMS
                    </h1>
                  </div>
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
