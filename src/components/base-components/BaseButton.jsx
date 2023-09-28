export default function BaseButton(props) {
  const { type, variant, children, ...rest } = props;
  let btnClasses = "";
  switch (variant) {
    case "primary":
      btnClasses =
        "text-white rounded-md py-2 px-4 bg-teal-700 hover:bg-teal-800";
      break;
    case "secondary":
      btnClasses = "rounded-md py-3 px-5 bg-neutral-100";
      break;
    case "neutral":
      btnClasses =
        "rounded-md py-2 px-4 border bg-neutral-50 hover:bg-neutral-100";
      break;
    case "loginBtn":
      btnClasses =
        "w-full p-3 text-white rounded-md bg-teal-500 uppercase font-semibold";
      break;
    case "signupBtn":
      btnClasses =
        "w-full p-3 text-white rounded-md bg-teal-500 uppercase font-semibold";
      break;
    case "logoutBtn":
      btnClasses = "rounded-md py-2 px-4  text-left hover:bg-gray-100 w-full";
      break;
    case "transparent":
      btnClasses = "rounded-md py-2 px-5 w-full";
      break;
    case "danger":
      btnClasses =
        "text-white rounded-md py-3 px-5 bg-red-600 hover:bg-red-700";
      break;
    default:
      break;
  }

  return (
    <>
      <button type={type} className={btnClasses} {...rest}>
        {children}
      </button>
    </>
  );
}

//
