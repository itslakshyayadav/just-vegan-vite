import loginFormImgSrc from "../assets/loginform-image/go-vegan.jpg";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import BrandLogo from "../components/base-components/BrandLogo.jsx";
import { API_BASE_PATH } from "../helpers/constants";
import BaseButton from "@/components/base-components/BaseButton";
// import userService from "@/services/userService";

export default function Login() {
  const [login, setLogin] = useState({
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  useEffect(() => {
    const myUser = localStorage.getItem("sessionUser");
    console.log("myUser");
    console.log(myUser);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_BASE_PATH}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.payload);
        localStorage.setItem("userAuth", JSON.stringify(response.payload));
        navigate("/");
      });
  };
  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const response = await userService.loginUser(login);
  //     if (response.status == 200) {
  //       toast.success("You are logged in successfully.");
  //     }
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       toast.error(error.response.data);
  //     }
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <div className="w-4/6  p-8">
            {/* <div className=" "> */}
            <div className="mb-20">
              <Link to="/">
                <BrandLogo />
              </Link>
              <h1 className="text-center font-semibold text-5xl mb-2.5">
                Welcome Back
              </h1>
              <p className="text-center text-xl ">Login in to your justvegan</p>
            </div>
            <div className="text-center mb-4">
              {/* <label htmlFor="emailId"> UserName : </label> */}

              <input
                style={{ backgroundColor: "rgb(246,247,245)" }}
                type="text"
                name="emailId"
                value={login.emailId}
                onChange={handleChange}
                className="w-3/4  px-2 py-2  rounded-md"
                placeholder="Username"
              />
            </div>
            <div className="text-center mb-6">
              {/* <label htmlFor="password"> Password : </label> */}
              <input
                style={{ backgroundColor: "rgb(246,247,245)" }}
                type="password"
                name="password"
                value={login.password}
                onChange={handleChange}
                className="w-3/4  px-2 py-2  rounded-md"
                placeholder="password"
              />
            </div>

            <ul className="flex gap-4 justify-center mb-6 ">
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
              <li>
                <a
                  href="sign-up"
                  className="text-cyan-950 underline decoration-1"
                >
                  Sign-up
                </a>
              </li>
            </ul>
            <div className="text-center ">
              <BaseButton btnType="submit" variant="loginBtn">
                Login
              </BaseButton>
            </div>
            {/* </div> */}
          </div>
          <div className="w-2/5 h-screen">
            <img
              src={loginFormImgSrc}
              alt=""
              className="w-full object-cover object-center h-full"
            />
          </div>
        </div>
      </form>
    </>
  );
}
