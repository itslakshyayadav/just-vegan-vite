import { useState } from "react";
import dishService from "@/services/dishService";
import { toast } from "react-toastify";
import BaseButton from "@/components/base-components/BaseButton";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

function NewDish() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [formdata, setFromdata] = useState({
  //   dishName: "",
  //   price: "",
  //   dishCategory: "lunch",
  //   isVaccumSealed: false,
  //   isActive: false,
  //   isPreservativeFree: false,
  //   isCertified: false,
  //   energy: "",
  //   fat: "",
  //   carbs: "",
  //   fiber: "",
  //   protein: "",
  //   description: "",
  //   imgUrl: "",
  //   imgUrl1: "",
  //   imgUrl2: "",
  //   imgUrl3: "",
  // });
  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFromdata({
  //     ...formdata,
  //     [name]: value,
  //   });
  // };

  // const handleChecked = (event) => {
  //   const { name, checked } = event.target;
  //   setFromdata({
  //     ...formdata,
  //     [name]: checked,
  //   });
  // };
  // console.log(errors);

  const onFormSubmit = async (formData) => {
    try {
      const response = await dishService.createDish(formData);
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
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="container m-auto py-4 max-w-screen-md p-2">
          <div className="flex flex-col gap-3 rounded-sm px-5 py-3 ">
            <div>
              <h1 className="text-center font-semibold text-gray-700 text-3xl">
                NewDish Page
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dishName">Dish Name *</label>
              <Controller
                name="dishName"
                control={control}
                rules={{ required: true, maxLength: 100 }}
                render={({ field }) => {
                  return (
                    <input
                      type="text"
                      id="dishName"
                      className="px-2 py-1 border-2 rounded-sm"
                      {...field}
                    />
                  );
                }}
              ></Controller>

              {errors.dishName?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Dish name is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dishCategory">Dish Category*</label>

              <Controller
                name="dishCategory"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <select
                      className="px-2 py-1 border-2 rounded-sm"
                      {...field}
                    >
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                      <option value="breakfast">Breakfast</option>
                    </select>
                  );
                }}
              ></Controller>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price*</label>
              <Controller
                name="price"
                control={control}
                rules={{ required: true, max: 3000, min: 100 }}
                render={({ field }) => {
                  return (
                    <input
                      type="number"
                      className="px-2 py-1 border-2 rounded-sm"
                      {...field}
                    />
                  );
                }}
              ></Controller>
              {errors.price?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Dish price is required
                </p>
              )}
              {errors.price?.type === "min" && (
                <p role="alert" className="text-red-500">
                  Dish price min limit is reached.
                </p>
              )}
              {errors.price?.type === "max" && (
                <p role="alert" className="text-red-500">
                  Dish price max limit is reached.
                </p>
              )}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-semibold mb-1">Quality Checks</h2>
              <div className="flex  gap-5">
                <label htmlFor="isVaccumSealed">
                  <Controller
                    name="isVaccumSealed"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                      return (
                        <input
                          type="checkbox"
                          id="isVaccumSealed"
                          value={true}
                          {...field}
                        />
                      );
                    }}
                  ></Controller>
                  isVaccumSealed
                  {errors.isVaccumSealed?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Is isVaccumSealed is required
                    </p>
                  )}
                </label>

                <label htmlFor="isActive">
                  <Controller
                    name="isActive"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                      return <input type="checkbox" value={true} {...field} />;
                    }}
                  ></Controller>
                  isActive
                  {errors.isActive?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Is active is required
                    </p>
                  )}
                </label>
                <label htmlFor="isCertified">
                  <Controller
                    name="isCertified"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                      return <input type="checkbox" value={true} {...field} />;
                    }}
                  ></Controller>
                  certified
                  {errors.isCertified?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Is isCertified is required
                    </p>
                  )}
                </label>
                <label htmlFor="isPreservativeFree">
                  <Controller
                    name="isPreservativeFree"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                      return <input type="checkbox" value={true} {...field} />;
                    }}
                  ></Controller>
                  isPreservativeFree
                  {errors.isPreservativeFree?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Is isPreservativeFree is required
                    </p>
                  )}
                </label>
              </div>
            </div>

            <h2 className="text-xl font-semibold">Nutrition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-6 gap-4">
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="energy">Energy</label>
                <input
                  type="text"
                  className=" px-2 py-1 border-2 rounded-sm "
                  {...register("energy")}
                />
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="fat">Fat</label>
                  <input
                    type="text"
                    className=" px-2 py-1 border-2 rounded-sm "
                    {...register("fat")}
                  />
                </div>
              </div>
              <div className="">
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="carbs">Carbs</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-2 rounded-sm"
                    {...register("carbs")}
                  />
                </div>
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="fiber">Fiber</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-2 rounded-sm"
                    {...register("fiber")}
                  />
                </div>
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="protein">Protien</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-2 rounded-sm"
                    {...register("protein")}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <input
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
                {...register("description")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl">Image Url</label>
              <Controller
                name="imgUrl"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <input
                      type="url"
                      className="px-2 py-1 border-2 rounded-sm"
                      placeholder="image url"
                      value={true}
                      {...field}
                    />
                  );
                }}
              ></Controller>
              {errors.imgUrl?.type === "required" && (
                <p role="alert" className="text-red-500">
                  url is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl1"> Image Url 1</label>
              <Controller
                name="imgUrl1"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <input
                      type="url"
                      className="px-2 py-1 border-2 rounded-sm"
                      placeholder="image url 1"
                      value={true}
                      {...field}
                    />
                  );
                }}
              ></Controller>
              {errors.imgUrl1?.type === "required" && (
                <p role="alert" className="text-red-500">
                  url is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl2">Image Url 2</label>
              <input
                type="url"
                placeholder="image url 2"
                className="px-2 py-1 border-2 rounded-sm mb-2.5"
                {...register("imgUrl2", {})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl3">Image Url 3</label>
              <input
                type="text"
                placeholder="image url 3"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
                {...register("imgUrl3", {})}
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
