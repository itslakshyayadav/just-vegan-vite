// import { useState } from "react";
import dishService from "@/services/dishService";
import { toast } from "react-toastify";
import BaseButton from "@/components/base-components/BaseButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BaseInput from "@/components/base-components/BaseInput";
import BaseSelect from "../../components/base-components/BaseSelect";
import BaseCheckbox from "@/components/base-components/BaseCheckbox";

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
            <BaseInput
              name="dishName"
              label="Dish Name"
              control={control}
              errors={errors}
              rules={{ required: true, maxLength: 100 }}
            ></BaseInput>

            <div className="flex flex-col gap-2">
              <BaseSelect
                name="dishCategory"
                label="Dish Category"
                control={control}
                errors={errors}
                rules={{ required: true }}
              >
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="breakfast">Breakfast</option>
              </BaseSelect>
            </div>
            <BaseInput
              name="price"
              label="Price"
              control={control}
              errors={errors}
              type="number"
              rules={{ required: true, max: 3000, min: 100 }}
            ></BaseInput>

            <div className="py-4">
              <h2 className="text-xl font-semibold mb-1">Quality Checks</h2>
              <div className="flex gap-5">
                <BaseCheckbox
                  name="isVaccumSealed"
                  label="isVaccumSealed"
                  control={control}
                  rules={{ required: true }}
                  errors={errors}
                ></BaseCheckbox>

                <BaseCheckbox
                  name="isActive"
                  label="isActive"
                  type="checkbox"
                  control={control}
                  rules={{ required: true }}
                  errors={errors}
                ></BaseCheckbox>

                <BaseCheckbox
                  name="isCertified"
                  label="isCertified"
                  type="checkbox"
                  control={control}
                  rules={{ required: true }}
                  errors={errors}
                ></BaseCheckbox>

                <BaseCheckbox
                  name="isPreservativeFree"
                  label="isPreservativeFree"
                  type="checkbox"
                  control={control}
                  rules={{ required: true }}
                  errors={errors}
                ></BaseCheckbox>
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
              <BaseInput
                name="imgUrl"
                label="ImgUrl"
                type="url"
                control={control}
                rules={{ required: true }}
                errors={errors}
              ></BaseInput>
            </div>
            <div className="flex flex-col gap-2">
              <BaseInput
                name="imgUrl1"
                label="ImgUrl 1"
                type="url"
                control={control}
                rules={{ required: true }}
                errors={errors}
              ></BaseInput>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl2">Image Url 2</label>
              <input
                type="url"
                className="px-2 py-1 border-2 rounded-sm mb-2.5"
                {...register("imgUrl2", {})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl3">Image Url 3</label>
              <input
                type="text"
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
