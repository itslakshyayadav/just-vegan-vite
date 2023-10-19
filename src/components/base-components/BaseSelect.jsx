import { Controller } from "react-hook-form";

const BaseSelect = (props) => {
  const { control, errors, label, name, rules, children } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>
        {" "}
        {label}
        {rules ? (
          <>
            <span>*</span>
          </>
        ) : null}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <select className="px-2 py-1 border-2 rounded-sm" {...field}>
              <option value="">Please select</option>
              {children}
            </select>
          );
        }}
      ></Controller>
      {errors && errors[name]?.type === "required" && (
        <p role="alert" className="text-red-500">
          {label} is required
        </p>
      )}
    </div>
  );
};
export default BaseSelect;
