import { useState } from "react";
import dishService from "@/services/dishService";
import { toast } from "react-toastify";
import BaseButton from "@/components/base-components/BaseButton";
import { useNavigate } from "react-router-dom";

function NewDish() {
  const [formdata, setFromdata] = useState({
    dishName: "",
    price: "",
    dishCategory: "lunch",
    isVaccumSealed: false,
    isActive: false,
    isPreservativeFree: false,
    isCertified: false,
    energy: "",
    fat: "",
    carbs: "",
    fiber: "",
    protein: "",
    description: "",
    imgUrl: "",
    imgUrl1: "",
    imgUrl2: "",
    imgUrl3: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleChecked = (event) => {
    const { name, checked } = event.target;
    setFromdata({
      ...formdata,
      [name]: checked,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await dishService.createDish(formdata);
      if (response.status == 200) {
        toast.success("A new dish created successfully.");
        navigate("/");
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
                NewDish Page
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dishName">Dish Name *</label>
              <input
                name="dishName"
                value={formdata.dishName}
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
                value={formdata.dishCategory}
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
                value={formdata.price}
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
                    id="isVaccumSealed"
                    checked={formdata.isVaccumSealed}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  isVaccumSelected
                </label>
                <label htmlFor="isActive">
                  <input
                    id="isActive"
                    name="isActive"
                    checked={formdata.isActive}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  isActive
                </label>
                <label htmlFor="isCertified">
                  <input
                    id="isCertified"
                    name="isCertified"
                    checked={formdata.isCertified}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  certified
                </label>
                <label htmlFor="isPreservativeFree">
                  <input
                    id="isPreservativeFree"
                    name="isPreservativeFree"
                    checked={formdata.isPreservativeFree}
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
                  value={formdata.energy}
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
                    value={formdata.fat}
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
                    value={formdata.carbs}
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
                    value={formdata.fiber}
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
                    value={formdata.protein}
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
                value={formdata.description}
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
                value={formdata.imgUrl}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl1">Image Url 1</label>
              <input
                type="text"
                placeholder="image url 1"
                name="imgUrl1"
                required
                value={formdata.imgUrl1}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl2">Image Url 2</label>
              <input
                type="text"
                placeholder="image url 2"
                name="imgUrl2"
                required
                value={formdata.imgUrl2}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl3">Image Url 3</label>
              <input
                type="text"
                placeholder="image url 3"
                name="imgUrl3"
                required
                value={formdata.imgUrl3}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
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
    </>
  );
}
export default NewDish;
