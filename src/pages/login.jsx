import loginFormImgSrc from "../assets/loginform-image/go-vegan.jpg";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/base-components/BrandLogo.jsx";
// import { API_BASE_PATH } from "../helpers/constants";
import BaseButton from "@/components/base-components/BaseButton";
import userService from "@/services/userService";
import UserContext from "@/contexts/UserContext";
import { ICONS } from "@/helpers/constants";
import BaseIcon from "@/components/base-components/BaseIcon";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [login, setLogin] = useState({
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  useEffect(() => {
    const myUser = localStorage.getItem("sessionUser");

    console.log(myUser);
  }, []);

  // const fetchUsers = (event) => {
  //   event.preventDefault();

  //   fetch(`${API_BASE_PATH}/auth/login`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(login),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response.payload);
  //       localStorage.setItem("userPayload", JSON.stringify(response.payload));
  //     });
  // };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await userService.loginUser(login);
      if (response.status == 200) {
        localStorage.setItem("userAuth", JSON.stringify(response.data.payload));
        await userContext.reFetchUser();
        toast.success("You are logged in successfully.");
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("invalid password");
      }
    }
  };

  const passwordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex flex-col items-center px-5 py-3 mt-8 sm:w-full">
        {/* <div className=" "> */}
        <div className="flex justify-center">
          <Link to="/" className="px-3 py-3">
            <BrandLogo className="w-36" />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-center font-semibold text-5xl">Welcome Back</h1>
          <p className="text-center text-xl mb-8">Login in to your justvegan</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full max-w-lg justify-center"
        >
          <div className="flex">
            {/* <label htmlFor="emailId"> UserName : </label> */}
            <input
              style={{ backgroundColor: "rgb(246,247,245)" }}
              type="text"
              name="emailId"
              value={login.emailId}
              onChange={handleChange}
              className="px-2 py-2 rounded-md w-full"
              placeholder="abcd@gmail.com"
            />
          </div>
          <div className="flex grow text-center relative">
            {/* <label htmlFor="password"> Password : </label> */}
            <input
              style={{ backgroundColor: "rgb(246,247,245)" }}
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={login.password}
              onChange={handleChange}
              className="px-2 py-2 rounded-md w-full  "
              placeholder="Password"
            />
            <button
              type="button"
              onClick={passwordVisibility}
              className="absolute  right-5 top-2.5"
            >
              {!passwordVisible ? (
                <BaseIcon iconName={ICONS.eyeHide} />
              ) : (
                <BaseIcon iconName={ICONS.eyeShow} />
              )}
            </button>
          </div>
          <ul className="flex flex-col md:flex-row gap-1 justify-center">
            <li>
              <a href="/" className="text-cyan-950 underline decoration-1">
                forgot password?
              </a>
            </li>
            <li>
              <a href="/" className="text-cyan-950 underline decoration-1">
                forgot Username?
              </a>
            </li>
            {/* <li>
              <a
                href="sign-up"
                className="text-cyan-950 underline decoration-1"
              >
                Sign-up
              </a>
            </li> */}
          </ul>
          <div className="flex">
            <BaseButton btnType="submit" variant="loginBtn">
              Login
            </BaseButton>
          </div>
          <div className="">
            <Link to="/sign-up">
              <BaseButton btnType="submit" variant="transparent">
                Sign-up
              </BaseButton>
            </Link>
          </div>
        </form>

        {/* </div> */}
      </div>
      <div className="h-screen sm:w-full hidden lg:flex">
        <img
          src={loginFormImgSrc}
          alt=""
          className="w-full object-cover object-center h-full"
        />
      </div>
    </div>
  );
}
