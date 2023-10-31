import { toast } from "react-toastify";
import userService from "@/services/userService";
import BaseIcon from "@/components/base-components/BaseIcon";

import ConfirmationModal from "@/components/page-components/ConfirmationModal";
import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import { ICONS } from "@/helpers/constants";

export default function AddressTile(props) {
  const { addressRecord } = props;
  const userContext = useContext(UserContext);
  const { user, reFetchUser } = useContext(UserContext);

  const removeAddress = async (addressId) => {
    try {
      console.log(addressId);
      const response = await userService.removeAddress(addressId);
      if (response.status === 200) {
        toast.success("Address Deleted successfully !");
        userContext.reFetchUser();
      }
    } catch (error) {
      console.log("error");
    }
  };

  const updateUserAddress = async (addressId) => {
    try {
      console.log(addressId);
      const response = await userService.editAddress(addressId);
      if (response.status === 200) {
        toast.success("Address update successfully !");
        userContext.reFetchUser();
      }
    } catch (error) {
      console.log("error");
    }
  };

  const handleSetDefaultAddress = async (id) => {
    try {
      const defaultAddressResponse = await userService.setDefaultAddress(id);
      if (defaultAddressResponse.status === 200) {
        await reFetchUser();
        toast.success("Default Address is set successfully.");
      }
    } catch (error) {
      toast.error("Error occurred, while setting default address.");
    }
  };

  return (
    <div className="border border-slate-200 border-t-slate-100 m-auto mb-2 hover:shadow-md">
      <div className=" rounded-sm px-3 py-2 ">
        <div className="flex justify-between items-center">
          <h1 className=" font-sans font-bold ">{addressRecord.name}</h1>
          <div className="flex gap-2 items-center">
            <span className="font-sans flex items-center h-5 border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl   px-3">
              <small>{addressRecord.addressType}</small>
            </span>
          </div>
        </div>

        <h1>
          <small>{addressRecord.addressLine}</small>
        </h1>
        <h1>
          <small>{addressRecord.city}</small>
        </h1>
        <h1>
          <small>{addressRecord.pincode}</small>
        </h1>
        <h1>
          <small>{addressRecord.state}</small>
        </h1>
        <h1 className="font-semibold">
          {/* <small>
            {" "}
            {user.defaultAddress &&
            user.defaultAddress._id === addressRecord._id
              ? "Default"
              : null}
          </small> */}
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="font-sans mt-2">
            <small>{addressRecord.phone1}</small>
          </h1>
          {user.defaultAddress &&
          user.defaultAddress._id === addressRecord._id ? (
            <div className="flex items-center gap-1">
              <h1>
                <BaseIcon
                  iconName={ICONS.Star}
                  className=" flex h-5 w-5"
                ></BaseIcon>
              </h1>
              {user.defaultAddress &&
              user.defaultAddress._id === addressRecord._id ? (
                <h1 className="text-sm font-semibold">Default</h1>
              ) : null}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleSetDefaultAddress(addressRecord._id);
              }}
              className="border rounded-md hover:bg-slate-100 w-28 py-1 px-2"
            >
              Set Default
            </button>
          )}
        </div>

        <div className="flex border-t border-slate-200  justify-between md:flex-none mt-2 px-3 py-3 items-center">
          <div className="flex justify-center w-1/2 border-slate-200 ">
            <ConfirmationModal
              onProceed={() => {
                removeAddress(addressRecord._id);
              }}
            >
              <button
                className="px-32 font-sans py-2  text-xs font-bold border text-red-600 rounded-sm"
                type="button"
              >
                DELETE
              </button>
            </ConfirmationModal>
          </div>
          <div className="flex justify-center w-1/2  ">
            <button
              icon={<BaseIcon iconName=""></BaseIcon>}
              className="px-32 font-sans text-xs font-bold  py-2 border text-indigo-800 rounded-sm"
              type="submit"
              onClick={() => {
                updateUserAddress(addressRecord._id);
              }}
            >
              EDIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
