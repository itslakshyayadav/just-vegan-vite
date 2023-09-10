// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
export default function BaseNavLink(props) {
  const { to, variant, children } = props;

  let btnClasses = "";
  switch (variant) {
    case "headerLink":
      btnClasses = "navbar-link py-3 px-5 text-white md:hover:text-green-500";
      break;
    case "accountLink":
      btnClasses = "list-link px-5 py-3 border hover:bg-neutral-100";
      break;

    default:
      break;
  }
  return (
    <>
      <NavLink to={to} className={btnClasses} {...props}>
        {children}
      </NavLink>
    </>
  );
}
