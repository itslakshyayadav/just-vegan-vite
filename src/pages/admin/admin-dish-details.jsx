import { useEffect, useState } from "react";
import { API_BASE_PATH } from "@/helpers/constants";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AdminDishDetails() {
  const [dishModel, setDishModel] = useState({
    dishCategory: "Lunch",
    isVaccumSealed: false,
    isActive: false,
    isPreservativeFree: false,
    isCertified: false,
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDishDetails = async () => {
      const response = await fetch(
        `${API_BASE_PATH}/dishes/${params.dishId}`
      ).then((response) => response.json());
      // const data = await response.json();
      console.log(`data`);
      console.log(response);

      setDishModel(response.payload);
    };

    fetchDishDetails();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`value`);
    console.log(value);

    setDishModel({
      ...dishModel,
      [name]: value,
    });
  };

  const handleChecked = (event) => {
    const { name, checked } = event.target;
    console.log(`value`);
    console.log(checked);
    setDishModel({
      ...dishModel,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_BASE_PATH}/dishes/${params.dishId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dishModel),
    })
      .then((res) => res.json())
      .then(console.log);
    navigate("/admin/admin-dishes");
    toast("Dish Update.");
  };
  const handleDelete = () => {
    fetch(`${API_BASE_PATH}/dishes/${params.dishId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dishModel),
    })
      .then((res) => res.json())
      .then(console.log);
    navigate("/admin/admin-dishes");
    toast("Dish Deleted.");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container m-auto py-4 max-w-screen-md p-2">
          <div className=" rounded-sm px-5 py-3 ">
            <div>
              <h1 className="text-center font-semibold text-gray-700 text-3xl">
                Dish Details
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dishName">Dish Name *</label>
              <input
                name="dishName"
                value={dishModel.dishName}
                onChange={handleChange}
                type="text"
                required
                placeholder="dishname"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dishCategory">Dish Category*</label>
              <select
                name="dishCategory"
                value={dishModel.dishCategory}
                onChange={handleChange}
                className="px-2 py-1 border-2 rounded-sm"
              >
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="breakfast">Breakfast</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price*</label>
              <input
                required
                name="price"
                value={dishModel.price}
                onChange={handleChange}
                type="number"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="py-4">
              <h2 className="text-xl font-semibold mb-1">Quality Checks</h2>
              <div className="flex  gap-5  ">
                <label htmlFor="isVaccumSealed">
                  <input
                    name="isVaccumSealed"
                    checked={dishModel.isVaccumSealed}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  isVaccumSelected
                </label>
                <label htmlFor="isActive">
                  <input
                    name="isActive"
                    checked={dishModel.isActive}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  isActive
                </label>
                <label htmlFor="isCertified">
                  <input
                    name="isCertified"
                    checked={dishModel.isCertified}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  certified
                </label>
                <label htmlFor="isPreservativeFree">
                  <input
                    name="isPreservativeFree"
                    checked={dishModel.isPreservativeFree}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  isPreservativeFree
                </label>
              </div>
            </div>
            <h2 className="text-xl font-semibold"> Nutrition</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 mb-6 gap-4">
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="energy">Energy</label>
                <input
                  name="energy"
                  placeholder="energy"
                  type="text"
                  value={dishModel.energy}
                  onChange={handleChange}
                  className=" px-2 py-1 border-2 rounded-sm "
                />
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="fat">Fat</label>
                  <input
                    placeholder="fat"
                    name="fat"
                    value={dishModel.fat}
                    onChange={handleChange}
                    type="text"
                    className=" px-2 py-1 border-2 rounded-sm "
                  />
                </div>
              </div>
              <div className="">
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="carbs">Carbs</label>
                  <input
                    placeholder="carb"
                    name="carbs"
                    value={dishModel.carbs}
                    onChange={handleChange}
                    type="text"
                    className="px-2 py-1 border-2 rounded-sm"
                  />
                </div>
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="fiber">Fiber</label>
                  <input
                    placeholder="fiber"
                    name="fiber"
                    value={dishModel.fiber}
                    onChange={handleChange}
                    type="text"
                    className="px-2 py-1 border-2 rounded-sm"
                  />
                </div>
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="protein">Protien</label>
                  <input
                    placeholder="protien"
                    name="protein"
                    value={dishModel.protein}
                    onChange={handleChange}
                    type="text"
                    className="px-2 py-1 border-2 rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <input
                name="description"
                type="text"
                placeholder="description"
                value={dishModel.description}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl">Image Url</label>
              <input
                type="text"
                placeholder="image url "
                name="imgUrl"
                required
                value={dishModel.imgUrl}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex gap-4">
              <button
                className="px-5 py-3 my-5 text-white  rounded-sm"
                type="submit"
                style={{ backgroundColor: "rgb(83,197,8)" }}
              >
                Update
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-3 my-5 text-white  rounded-sm"
                type="submit"
                style={{ backgroundColor: "rgb(83,197,8)" }}
              >
                Delete
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default AdminDishDetails;
