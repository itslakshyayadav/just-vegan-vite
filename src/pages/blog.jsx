function blog() {
  return (
    <>
      <div className="container m-auto py-4 max-w-screen-md p-2">
        <div className=" border-2 rounded-sm px-5 py-3 ">
          <div>
            <h1 className="text-center font-semibold text-gray-700 text-3xl">
              NewDish Page
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Dish Name *</label>
            <input
              type="text"
              placeholder="dishname"
              className=" px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Dish Category*</label>
            <input
              type="text"
              placeholder="Choose Your Option"
              className=" px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Price*</label>
            <input
              type="text"
              className=" px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <div className="py-4">
            <h2 className="text-xl font-semibold mb-1">Quality Checks</h2>
            <div className="flex  gap-5  ">
              <label htmlFor="">
                <input type="checkbox" />
                isVaccumSelected
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                isPreservativefree
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                certified
              </label>
            </div>
          </div>
          <h2 className="text-xl font-semibold"> Nutrition</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 mb-6 gap-4">
            <div className=" flex flex-col gap-1 ">
              <label htmlFor="">Energy</label>
              <input
                placeholder="energy"
                type="text"
                className=" px-2 py-1 border-2 rounded-sm "
              />
            </div>
            <div>
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="">Fat</label>
                <input
                  placeholder="fat"
                  type="text"
                  className=" px-2 py-1 border-2 rounded-sm "
                />
              </div>
            </div>
            <div className="">
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="">Carbs</label>
                <input
                  placeholder="carb"
                  type="text"
                  className="px-2 py-1 border-2 rounded-sm"
                />
              </div>
            </div>
            <div>
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="">Fiber</label>
                <input
                  placeholder="fiber"
                  type="text"
                  className="px-2 py-1 border-2 rounded-sm"
                />
              </div>
            </div>
            <div>
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="">Protien</label>
                <input
                  placeholder="protien"
                  type="text"
                  className="px-2 py-1 border-2 rounded-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="description"
              className=" px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Image Url</label>
            <input
              type="text"
              placeholder="Url"
              className=" px-2 py-1 border-2 rounded-sm mb-2.5"
            />
          </div>
          <div className="">
            <button
              className="px-5 py-3 my-5 text-white  rounded-md"
              type="submit"
              style={{ backgroundColor: "rgb(83,197,8)" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default blog;
