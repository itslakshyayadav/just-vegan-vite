import { useState } from "react";
import { Controller } from "react-hook-form";

const BaseInput = (props) => {
  const { control, errors, label, name, rules, type = "text" } = props;
  //   const [asterisk]
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-neutral-700">
        {label}
        {rules ? <span>*</span> : null}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          console.log(`field`);
          console.log(field);

          return (
            <input
              type={type}
              className="px-2 py-1 border-2 rounded-sm"
              {...field}
            />
          );
        }}
      ></Controller>
      {errors && errors[name]?.type === "required" && (
        <p role="alert" className="text-red-500">
          {label} is required
        </p>
      )}
      {errors && errors[name]?.type === "min" && (
        <p role="alert" className="text-red-500">
          {label} min limit is reached.
        </p>
      )}
      {errors && errors[name]?.type === "max" && (
        <p role="alert" className="text-red-500">
          {label} max limit is reached.
        </p>
      )}
    </div>
  );
};

export default BaseInput;
