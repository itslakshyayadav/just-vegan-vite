import { useState, useEffect } from "react";
import loginFormImgSrc from "../assets/loginform-image/go-vegan.jpg";
import userService from "@/services/userService";
import { toast } from "react-toastify";
import BaseButton from "@/components/base-components/BaseButton";
import BrandLogo from "../components/base-components/BrandLogo.jsx";
import { Link } from "react-router-dom";
import BaseIcon from "@/components/base-components/BaseIcon";
import { ICONS } from "@/helpers/constants";

export default function SignUP() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signup, setSignup] = useState({
    name: "",
    emailId: "",
    password: "",
    phone: "",
    userType: "customer",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignup({
      ...signup,
      [name]: value,
    });
  };

  useEffect(() => {
    const myUser = localStorage.getItem("sessionUser");
    console.log(myUser);
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await userService.createUser(signup);
      if (response.status == 200) {
        toast.success("A new user created successfully.");
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };

  const passwordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col items-center px-5 py-3 mt-8 sm:w-full">
          <div className="flex justify-center">
            <Link to="/" className="px-3 py-3">
              <BrandLogo />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-center font-semibold text-5xl">
              Create your account
            </h1>
            <p className="text-center text-xl mb-8">
              Choose your Justvegan username. You can always change it later.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-lg justify-center"
          >
            <div className="flex">
              <input
                style={{ backgroundColor: "rgb(246,247,245)" }}
                type="text"
                name="name"
                value={signup.name}
                onChange={handleChange}
                className="px-2 py-2 rounded-md w-full"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex">
              <input
                style={{ backgroundColor: "rgb(246,247,245)" }}
                type="email"
                required
                name="emailId"
                value={signup.emailId}
                onChange={handleChange}
                className="px-2 py-2 rounded-md w-full"
                placeholder="Email"
              />
            </div>
            <div className="flex">
              <input
                style={{ backgroundColor: "rgb(246,247,245)" }}
                type="text"
                required
                name="phone"
                value={signup.phone}
                onChange={handleChange}
                className="px-2 py-2 rounded-md w-full"
                placeholder="Enter phone"
              />
            </div>
            <div className="flex">
              <input
                style={{ backgroundColor: "rgb(246,247,245)" }}
                type="password"
                name="password"
                value={signup.password}
                onChange={handleChange}
                className="px-2 py-2 rounded-md w-full"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex text-center relative">
              <input
                style={{ backgroundColor: "rgb(246,247,245)" }}
                type={!passwordVisible ? "text" : "password"}
                name="confirmPassword"
                value={signup.confirmPassword}
                onChange={handleChange}
                className="px-2 py-2 rounded-md w-full"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={passwordVisibility}
                className="absolute  right-5 top-2.5"
              >
                {passwordVisible ? (
                  <BaseIcon iconName={ICONS.eyeHide} />
                ) : (
                  <BaseIcon iconName={ICONS.eyeShow} />
                )}
              </button>
            </div>

            {/* <ul className="flex flex-col md:flex-row gap-1 justify-center">
              <li>
                Already have an account?{" "}
                 <Link
                  to="/login"
                  className="text-cyan-950 underline decoration-1"
                >
                  Login
                </Link> 
              </li>
            </ul>*/}

            <div className="flex flex-col gap-4">
              <BaseButton type="submit" variant="signupBtn">
                Create Account
              </BaseButton>
              <div>
                <p className="text-center mb-2">Already have an account?</p>
                <Link to="/login">
                  <BaseButton type="submit" variant="transparent">
                    Login
                  </BaseButton>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="h-screen sm:w-full hidden lg:flex">
          <img
            src={loginFormImgSrc}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
}
