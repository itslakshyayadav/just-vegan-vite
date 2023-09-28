import { useState, useContext } from "react";
import BaseSlider from "@/components/base-components/BaseSlider";
import BaseIcon from "../base-components/BaseIcon";
import BaseButton from "../base-components/BaseButton";
import DefaultAddressTile from "./DefaultAddressTile";
import UserContext from "@/contexts/UserContext";

export default function DefaultAddressSlider({ children }) {
  const { user } = useContext(UserContext);
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
        <BaseSlider
          onCloseSlider={() => {
            closeModal();
          }}
        >
          <div className="absolute right-0 top-5 -ml-8 flex pr-2  sm:-ml-10 sm:pr-4">
            <button
              type="button"
              onClick={closeModal}
              className="relative rounded-md h-6  w-6 text-black focus:outline-none focus:ring-2 focus:ring-white"
            >
              <BaseIcon iconName="crossIcon"></BaseIcon>
            </button>
          </div>

          <div className="">
            <div className="bg-neutral-100">
              <div className="px-5 py-3">
                <h1 className="py-4">Change Location</h1>

                <BaseButton type="button" variant="neutral">
                  <div className="flex items-center gap-3">
                    <BaseIcon
                      iconName="my_location"
                      className="fill-emerald-500"
                    ></BaseIcon>
                    Detect my location
                  </div>
                </BaseButton>
              </div>
            </div>

            <h1 className="px-5 py-5 text-xl font-semibold text-neutral-600">
              Saved Addresses
            </h1>
            <ul className="flex flex-col divide-y gap-3">
              {user.addresses &&
                user.addresses.map((address, index) => {
                  return (
                    <DefaultAddressTile
                      key={"deafult-address-tile" + index}
                      address={address}
                    ></DefaultAddressTile>
                  );
                })}
            </ul>
          </div>
        </BaseSlider>
      )}
    </>
  );
}
