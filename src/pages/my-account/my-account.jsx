import { useEffect, useState } from "react";
import { API_BASE_PATH } from "@/helpers/constants";
import BaseButton from "@/components/base-components/BaseButton";
// import { Link, Outlet } from "react-router-dom";

export default function MyAccount() {
  const [userModel, setUserModel] = useState({});

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
    setUserModel(data.payload);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <form>
        <div className="container border-2 m-auto py-4 p-2">
          <div className=" rounded-sm px-5 py-3 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name </label>
              <input
                name="name"
                value={userModel.name}
                // onChange={handleChange}
                type="text"
                required
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Email</label>
              <input
                required
                name="email"
                value={userModel.emailId}
                // onChange={handleChange}
                type="email"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                required
                name="phone"
                value={userModel.phone}
                // onChange={handleChange}
                type="text"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dob">DOB</label>
              <input
                required
                name="phone"
                // value={formdata.price}
                // onChange={handleChange}
                type="date"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <h1>Gender</h1>
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Netflix"
                  checked
                />
                <label htmlFor="male">Male</label>
              </div>

              <div className="flex items-center gap-1">
                <input type="radio" id="female" name="gender" value="Audi" />
                <label htmlFor="female">Female</label>
              </div>

              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="others"
                  name="gender"
                  value="Microsoft"
                />
                <label htmlFor="others">Others</label>
              </div>
            </div>

            <div className="mt-2">
              <BaseButton variant="primary" type="submit">
                Submit
              </BaseButton>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
