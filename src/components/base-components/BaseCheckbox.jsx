import { Controller } from "react-hook-form";

const BaseCheckbox = (props) => {
  const { control, errors, label, name, rules, type = "checkbox" } = props;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <label htmlFor={name} className="text-neutral-700">
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
      </div>
      <div>
        {errors && errors[name]?.type === "required" && (
          <p role="alert" className="text-red-500">
            {label} is required
          </p>
        )}
      </div>
    </div>
  );
};

export default BaseCheckbox;
