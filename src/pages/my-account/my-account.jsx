import { useEffect, useState } from "react";
import { API_BASE_PATH, ICONS } from "@/helpers/constants";
import BaseButton from "@/components/base-components/BaseButton";
import axios from "axios";
import BaseIcon from "@/components/base-components/BaseIcon";

export default function MyAccount() {
  const [userModel, setUserModel] = useState({});
  const [image, setImage] = useState("");

  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);

  const fetchUser = async () => {
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

  // upload image on my account section
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    const apiEndpoint = `${API_BASE_PATH}/users/${userAuthObject.userId}/profile-image`;
    const response = await axios.put(apiEndpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userAuthObject.accessToken}`,
      },
    });
    console.log("Image uploaded successfully:", response.data);
  };

  return (
    <>
      <form className="container mx-auto border-2 rounded-md py-4 p-2 md:w-3/4 lg:w-full xl:w-full  ">
        <div className="flex flex-col gap-2 px-5 py-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-4">
                <img
                  src={userModel.profileImage}
                  alt=""
                  className="h-12 w-12 rounded-md object-cover"
                />
                <input
                  type="file"
                  id="toImage"
                  onChange={handleImageChange}
                  className="text-xs"
                />
                <label htmlFor="toImage" className="lable">
                  <BaseIcon
                    className="h-6 w-6 flex text-teal-700"
                    iconName={ICONS.edit}
                  ></BaseIcon>
                </label>
              </div>
              <button
                onClick={handleUpload}
                className="border py-1 px-3 rounded-lg hover:bg-teal-100"
              >
                Upload
              </button>
            </div>
            <label className="text-neutral-500 text-sm" htmlFor="name">
              Name*
            </label>
            <input
              name="name"
              value={userModel.name}
              // onChange={handleChange}
              type="text"
              required
              className="px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              required
              name="email"
              value={userModel.emailId}
              // onChange={handleChange}
              type="email"
              className="px-2 py-1 border-2 rounded-sm mb-2.5"
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
              className="px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dob">DOB</label>
            <input
              required
              name="dob"
              // value={formdata.price}
              // onChange={handleChange}
              type="date"
              className="px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <h1>Gender</h1>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="radio" id="others" name="gender" value="others" />
              <label htmlFor="others">Others</label>
            </div>
          </div>

          <div className="mt-2">
            <BaseButton variant="primary" type="submit">
              Submit
            </BaseButton>
          </div>
        </div>
      </form>
    </>
  );
}
