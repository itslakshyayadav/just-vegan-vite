import BaseIcon from "./BaseIcon";

BaseIcon;
export default function BaseButton(props) {
  const { type, variant, children } = props;
  let btnClasses = "";
  switch (variant) {
    case "primary":
      btnClasses = "text-white rounded-md py-3 px-5 bg-emerald-500";
      break;
    case "secondary":
      btnClasses = "rounded-md py-3 px-5 bg-neutral-100";
      break;
    case "neutral":
      btnClasses = "rounded-md py-2 px-4 border hover:bg-neutral-100";
      break;
    case "loginBtn":
      btnClasses = "w-1/2 p-3 text-white rounded-md bg-emerald-500";
      break;
    case "signupBtn":
      btnClasses = "w-1/2 p-3 text-white rounded-md bg-emerald-500";
      break;
    case "logoutBtn":
      btnClasses = "rounded-md py-2 px-4  text-left hover:bg-gray-100 w-full";
      break;
    default:
      break;
  }

  return (
    <>
      <button type={type} className={btnClasses} {...props}>
        {children}
      </button>
    </>
  );
}

//
