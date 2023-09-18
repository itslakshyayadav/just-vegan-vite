import { useState, useEffect } from "react";
import BaseSlider from "@/components/base-components/BaseSlider";
import BaseIcon from "../base-components/BaseIcon";
import BaseButton from "../base-components/BaseButton";
// import userService from "@/services/userService";
// import { toast } from "react-toastify";
import DefaultAddressTile from "./DefaultAddressTile";

export default function DefaultAddressSlider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateDefaultAddress = () => {
    const userPayloadJSON = localStorage.getItem("userPayload");
    if (userPayloadJSON) {
      const userPayload = JSON.parse(userPayloadJSON);
      if (userPayload && userPayload.addresses) {
        setAddresses(userPayload.addresses);
        setDefaultAddress(userPayload.defaultAddress);
      }
    }
  };

  useEffect(() => {
    updateDefaultAddress();
  }, []);

  return (
    <>
      <div onClick={openModal}>{children}</div>
      {isOpen && (
        <BaseSlider>
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
              {addresses.map((address, index) => {
                return (
                  <DefaultAddressTile
                    key={"deafult-address-tile" + index}
                    defaultAddress={defaultAddress}
                    address={address}
                    resetDefaultAddress={updateDefaultAddress}
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
