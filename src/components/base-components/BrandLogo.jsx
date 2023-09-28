// import justVeganLogo from "../../assets/logo/just-vegan.png";
// import justVeganLogo from "@/assets/logo/just-vegan-simple-logo.svg";
import justVeganLogo from "@/assets/logo/just-vegan-simple-logo-primary.svg";
// import justVeganLogo from "../../../public/just-vegan.svg"
// import justVeganLogo from "../../../public/just-vegan-text-white.svg"

export default function BrandLogo(props) {
  return <img src={justVeganLogo} alt="logo" {...props} />;
}
