import BaseBreadCrumb from "@/components/base-components/BaseBreadCrumb";
import BaseButton from "@/components/base-components/BaseButton";
import offerService from "@/services/offerService";
// import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

function AdminNewOffer() {
  const offerBreadcrumb = [
    { name: "Admin", to: "/admin" },
    { name: " NewOffer", to: "/admin/new-offer" },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [offers, setOffers] = useState({
  //   offerName: "",
  //   offerDescription: "",
  //   minPurchase: "",
  //   maxDiscount: "",
  //   discountPercent: "",
  //   discountAmount: "",

  //   offerCode: "",
  //   imgUrl: "",
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setOffers({
  //     ...offers,
  //     [name]: value,
  //   });
  // };

  const onFormSubmit = async (formData) => {
    try {
      // event.preventDefault();
      const response = await offerService.createOffer(formData);
      if (response.status == 200) {
        toast.success("A new offer created successfully.");
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
        <BaseBreadCrumb breadcrumb={offerBreadcrumb}></BaseBreadCrumb>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="container m-auto py-4 max-w-screen-md p-2">
            <div className="flex flex-col gap-3 rounded-sm px-5 py-3">
              <div>
                <h1 className="text-center font-semibold text-gray-700 text-3xl">
                  Offers Admin
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="offerName">Offer Name*</label>
                <Controller
                  name="offerName"
                  control={control}
                  rules={{ required: true, maxLength: 100 }}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        placeholder="offerName"
                        className=" px-2 py-1 border-2 rounded-sm mb-2.5"
                        {...field}
                      />
                    );
                  }}
                ></Controller>
                {errors.offerName?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Offer name is required
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="offerCode">offerCode*</label>
                <Controller
                  name="offerCode"
                  control={control}
                  rules={{ required: true, maxLength: 20 }}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        placeholder="offerCode"
                        className=" px-2 py-1 border-2 rounded-sm mb-2.5"
                        {...field}
                      />
                    );
                  }}
                ></Controller>
                {errors.offerCode?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Offer Code is required
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 mb-6 gap-4">
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="maxDiscount">maxDiscount</label>
                  <Controller
                    name="maxDiscount"
                    control={control}
                    rules={{ required: true, maxLength: 1000 }}
                    render={({ field }) => {
                      return (
                        <input
                          type="text"
                          placeholder="maxDiscount"
                          className=" px-2 py-1 border-2 rounded-sm mb-2.5"
                          {...field}
                        />
                      );
                    }}
                  ></Controller>
                  {errors.maxDiscount?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      max Discount is required
                    </p>
                  )}
                </div>
                <div>
                  <div className=" flex flex-col gap-1 ">
                    <label htmlFor="minPurchase">minPurchase</label>
                    <Controller
                      name="minPurchase"
                      control={control}
                      rules={{ required: true, maxLength: 1000 }}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            placeholder="minPurchase"
                            className=" px-2 py-1 border-2 rounded-sm mb-2.5"
                            {...field}
                          />
                        );
                      }}
                    ></Controller>
                    {errors.minPurchase?.type === "required" && (
                      <p role="alert" className="text-red-500">
                        Min Purchase is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="">
                  <div className=" flex flex-col gap-1">
                    <label htmlFor="discountAmount">discountAmount</label>
                    <Controller
                      name="discountAmount"
                      control={control}
                      rules={{ required: true, maxLength: 1000 }}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            placeholder="discountAmount"
                            className="px-2 py-1 border-2 rounded-sm"
                            {...field}
                          />
                        );
                      }}
                    ></Controller>
                    {errors.discountAmount?.type === "required" && (
                      <p role="alert" className="text-red-500">
                        Discount Amount is required
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className=" flex flex-col gap-1 ">
                    <label htmlFor="discountPercent">discountPercent</label>
                    <Controller
                      name="discountPercent"
                      control={control}
                      rules={{ required: true, maxLength: 1000 }}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            placeholder="discountPercent"
                            className="px-2 py-1 border-2 rounded-sm"
                            {...field}
                          />
                        );
                      }}
                    ></Controller>
                    {errors.discountPercent?.type === "required" && (
                      <p role="alert" className="text-red-500">
                        Discount Percent is required
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="offerDescription">Description</label>
                <Controller
                  name="offerDescription"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        placeholder="offerDescription"
                        className="px-2 py-1 border-2 rounded-sm"
                        {...field}
                      />
                    );
                  }}
                ></Controller>
                {errors.offerDescription?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Offer Description is required
                  </p>
                )}
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
                        placeholder="imgUrl"
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
              <div className=" flex gap-3">
                <BaseButton variant="primary" type="submit">
                  Submit
                </BaseButton>
                <BaseButton type="button" variant="neutral">
                  Cancel
                </BaseButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default AdminNewOffer;
