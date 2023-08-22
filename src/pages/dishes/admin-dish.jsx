import { useState } from "react";
function AdminForm() {
  const [formdata, setFromdata] = useState({
    dishName: "",
    price: "",
    dishCategory: "",
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`value`);
    console.log(value);

    setFromdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleChecked = (event) => {
    const { name, checked } = event.target;
    console.log(`value`);
    console.log(checked);
    setFromdata({
      ...formdata,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://192.168.29.179:3001/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then(console.log);
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
              <input
                name="dishCategory"
                required
                value={formdata.dishCategory}
                onChange={handleChange}
                type="text"
                placeholder="Choose Your Option"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
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
                    checked={formdata.isVaccumSealed}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  isVaccumSelected
                </label>
                <label htmlFor="isActive">
                  <input
                    name="isActive"
                    checked={formdata.isActive}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  isActive
                </label>
                <label htmlFor="isCertified">
                  <input
                    name="isCertified"
                    checked={formdata.isCertified}
                    onChange={handleChecked}
                    type="checkbox"
                  />
                  certified
                </label>
                <label htmlFor="isPreservativeFree">
                  <input
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
            <div className="">
              <button
                className="px-5 py-3 my-5 text-white  rounded-sm"
                type="submit"
                style={{ backgroundColor: "rgb(83,197,8)" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default AdminForm;
