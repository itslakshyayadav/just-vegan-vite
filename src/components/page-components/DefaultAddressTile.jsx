import userService from "@/services/userService";
import BaseIcon from "../base-components/BaseIcon";
// import { useState } from "react";
import { toast } from "react-toastify";
export default function DefaultAddressTile(props) {
  const { address } = props;

  const defaultAddress = async (id) => {
    try {
      const userPayload = await userService.defaultAddress(id);
      if (userPayload.status === 200) {
        toast.success("Default Address is Set");
      }
    } catch (error) {
      toast.error("default address is not set");
    }
  };
  return (
    <div className="border  py-3 ">
      <div className="flex gap-8 items-center  px-5">
        <BaseIcon className="flex h-8 w-8" iconName="heart"></BaseIcon>
        <div className="flex justify-between w-80	 ">
          <div>
            <h1 className="text-lg font-semibold">{address.addressType}</h1>

            <p className="text-xs">{address.addressLine}</p>
            {/* {isDefaultAddress ? "Default" : null} */}
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                defaultAddress(address._id);
              }}
              className="border w-24 py-1 px-2"
            >
              Set Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
