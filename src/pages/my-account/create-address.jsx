import BaseButton from "@/components/base-components/BaseButton";
import userService from "@/services/userService";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateAddress = () => {
  const [addressModel, setAddressModel] = useState({
    name: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    phone: "",
    pincode: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressModel({
      ...addressModel,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await userService.createAddress(addressModel);
      if (response.status == 200) {
        toast.success("A new Address created successfully.");
        navigate("/my-account/my-address");
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container m-auto py-4 max-w-screen-md p-2">
          <div className=" rounded-sm px-5 py-3 ">
            <div>
              <h1 className="text-center font-semibold text-gray-700 text-3xl">
                New Address
              </h1>
            </div>

            <div className="flex flex-col mb-3 gap-2">
              <label htmlFor="state">State*</label>
              <select
                name="state"
                value={addressModel.state}
                onChange={handleChange}
                className="px-2 py-1 border-2 rounded-sm"
              >
                <option value="lunch">Home</option>
                <option value="dinner">Office</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name*</label>
              <input
                required
                name="name"
                value={addressModel.name}
                onChange={handleChange}
                type="text"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 gap-4">
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  type="text"
                  value={addressModel.phone}
                  onChange={handleChange}
                  className=" px-2 py-1 border-2 rounded-sm "
                />
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="pincode">Pin Code</label>
                  <input
                    name="pincode"
                    value={addressModel.pincode}
                    onChange={handleChange}
                    type="text"
                    className=" px-2 py-1 border-2 rounded-sm "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Addres</label>
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={addressModel.address}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 gap-4">
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="city">City</label>
                <input
                  name="city"
                  type="text"
                  value={addressModel.city}
                  onChange={handleChange}
                  className=" px-2 py-1 border-2 rounded-sm "
                />
              </div>

              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="locality">Locality</label>
                  <input
                    name="locality"
                    value={addressModel.locality}
                    onChange={handleChange}
                    type="text"
                    className=" px-2 py-1 border-2 rounded-sm "
                  />
                </div>
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    name="landmark"
                    value={addressModel.landmark}
                    onChange={handleChange}
                    type="text"
                    className=" px-2 py-1 border-2 rounded-sm "
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <BaseButton variant="primary" type="submit">
                Submit
              </BaseButton>
              <BaseButton type="submit" variant="neutral">
                Cancel
              </BaseButton>
            </div>
          </div>
        </div>
      </form>
      <Outlet></Outlet>
    </>
  );
};

export default CreateAddress;
