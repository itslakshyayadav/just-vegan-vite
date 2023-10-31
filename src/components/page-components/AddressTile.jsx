import { toast } from "react-toastify";
import userService from "@/services/userService";
import BaseIcon from "@/components/base-components/BaseIcon";
import ConfirmationModal from "@/components/page-components/ConfirmationModal";
import { useContext } from "react";
import UserContext from "@/contexts/UserContext";

export default function AddressTile(props) {
  const { addressRecord } = props;
  const userContext = useContext(UserContext);

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
  return (
    <div className="border border-slate-200 border-t-slate-100 m-auto mb-2 hover:shadow-md">
      <div className=" rounded-sm px-3 py-2 ">
        <div className="flex justify-between items-center">
          <h1 className=" font-sans font-bold ">{addressRecord.name}</h1>
          <span className="font-sans flex items-center h-5 border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl   px-3">
            <small>{addressRecord.addressType}</small>
          </span>
        </div>

        <h1 className="font-sans">
          <small>{addressRecord.addressLine}</small>
        </h1>
        <h1 className="font-sans">
          <small>{addressRecord.city}</small>
        </h1>
        <h1 className="font-sans">
          <small>{addressRecord.pincode}</small>
        </h1>
        <h1 className="font-sans">
          <small>{addressRecord.state}</small>
        </h1>
        <h1 className="font-sans mt-2">
          <small>{addressRecord.phone1}</small>
        </h1>
        {/* {isDeleteModalOpen && (
            <BaseModal modalText="Are you sure you want to proceed?">
              <BaseButton
                type="button"
                onClick={closeDeleteModal}
                variant="neutral"
              >
                Cancel
              </BaseButton>
              <BaseButton
                type="button"
                onClick={() => {
                  removeAddress(addressRecord._id);
                  setDeleteModalOpen(false);
                }}
                variant="danger"
              >
                Proceed
              </BaseButton>
            </BaseModal>
          )} */}

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
              // to="/userId/address/addressId"
              icon={<BaseIcon iconName=""></BaseIcon>}
              className="px-32 font-sans text-xs font-bold  py-2 border text-indigo-800 rounded-sm"
              type="submit"
              // onClick={() => {
              //   editAddress(addressRecord._id);
              // }}
            >
              EDIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
