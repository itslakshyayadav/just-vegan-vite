// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
export default function BaseNavLink(props) {
  const { to, variant, children } = props;

  let btnClasses = "";
  switch (variant) {
    case "headerLink":
      btnClasses = "navbar-link py-3 px-2 text-white md:hover:text-teal-100";
      break;
    case "accountLink":
      btnClasses = "list-link px-5 py-3 divide-y hover:bg-neutral-100";
      break;
    case "breadcrumbLink":
      btnClasses =
        "breadcrumb-link py-3 px-2 text-white md:hover:text-teal-100";
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
