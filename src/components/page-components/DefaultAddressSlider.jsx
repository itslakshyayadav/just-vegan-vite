import { useState, useEffect } from "react";
import BaseSlider from "@/components/base-components/BaseSlider";
import BaseIcon from "../base-components/BaseIcon";
import BaseButton from "../base-components/BaseButton";
// import userService from "@/services/userService";
// import { toast } from "react-toastify";
import DefaultAddressTile from "./DefaultAddressTile";

export default function DefaultAddressSlider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const userPayloadJSON = localStorage.getItem("userPayload");
    if (userPayloadJSON) {
      const userPayload = JSON.parse(userPayloadJSON);
      setAddresses(userPayload.addresses);
    }
  }, []);

  return (
    <>
      <div onClick={openModal}>{children}</div>
      {isOpen && (
        <BaseSlider>
          <div className="absolute -right-16 top-0 -ml-8 flex pr-2  sm:-ml-10 sm:pr-4">
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
                <h1 className="py-4">change Location</h1>

                <BaseButton type="button" variant="primary">
                  Detect my location
                </BaseButton>
              </div>
            </div>

            <h1 className="px-5 py-5 text-xl font-semibold">saved Addresses</h1>
            {addresses.map((address, index) => {
              return (
                <li key={index}>
                  <DefaultAddressTile address={address}></DefaultAddressTile>
                </li>
              );
            })}
          </div>
        </BaseSlider>
      )}
    </>
  );
}
