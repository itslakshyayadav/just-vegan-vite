// import justVeganLogo from "../../assets/logo/just-vegan.png";
import justVeganLogo from "../../../public/just-vegan.svg"

export default function BrandLogo(props) {
  return <img className="w-16" src={justVeganLogo} alt="logo" {...props} />;
}
