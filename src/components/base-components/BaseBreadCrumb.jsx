import { Link } from "react-router-dom";
import BaseIcon from "./BaseIcon";
import { ICONS } from "@/helpers/constants";

function BaseBreadCrumb(props) {
  const { breadcrumb } = props;

  return (
    <ul className="flex gap-2">
      {breadcrumb &&
        breadcrumb.map((crumb, index) => {
          return (
            <li className="flex items-center" key={"crump" + index}>
              <Link
                className="text-neutral-500 text-sm font-semibold p-2"
                to={crumb.to}
              >
                {crumb.name}
              </Link>

              {index < breadcrumb.length - 1 && (
                <BaseIcon
                  className="flex h-3 w-3"
                  iconName={ICONS.ChevronRight}
                ></BaseIcon>
              )}
            </li>
          );
        })}
    </ul>
  );
}

export default BaseBreadCrumb;
