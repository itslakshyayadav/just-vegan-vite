import { useState, useEffect } from "react";
import loginFormImgSrc from "../assets/loginform-image/go-vegan.jpg";
import userService from "@/services/userService";
import { toast } from "react-toastify";
import BaseButton from "@/components/base-components/BaseButton";

export default function SignUP() {
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
    console.log("myUser");
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <div className="w-4/6  p-8">
            <div className=" ">
              <div className="mb-20">
                <h1 className="text-center font-bold text-5xl mb-2.5">
                  Create your account
                </h1>
                <p className="text-center text-lg ">
                  Choose your Justvegan username. You can always change it
                  later.
                </p>
              </div>
              <div className="text-center mb-4">
                <input
                  style={{ backgroundColor: "rgb(246,247,245)" }}
                  type="text"
                  name="name"
                  value={signup.name}
                  onChange={handleChange}
                  className="w-2/3  px-2 py-2  rounded-md"
                  placeholder="name"
                  required
                />
              </div>
              <div className="text-center mb-4">
                <input
                  style={{ backgroundColor: "rgb(246,247,245)" }}
                  type="email"
                  required
                  name="emailId"
                  value={signup.emailId}
                  onChange={handleChange}
                  className="w-2/3  px-2 py-2  rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="text-center mb-4">
                <input
                  style={{ backgroundColor: "rgb(246,247,245)" }}
                  type="text"
                  required
                  name="phone"
                  value={signup.phone}
                  onChange={handleChange}
                  className="w-2/3  px-2 py-2  rounded-md"
                  placeholder="Enter phone"
                />
              </div>
              <div className="text-center mb-6">
                <input
                  style={{ backgroundColor: "rgb(246,247,245)" }}
                  type="password"
                  name="password"
                  value={signup.password}
                  onChange={handleChange}
                  className="w-2/3  px-2 py-2  rounded-md"
                  placeholder="password"
                  required
                />
              </div>
              <div className="text-center mb-6">
                <input
                  style={{ backgroundColor: "rgb(246,247,245)" }}
                  type="password"
                  name="confirmPassword"
                  value={signup.confirmPassword}
                  onChange={handleChange}
                  className="w-2/3  px-2 py-2  rounded-md"
                  placeholder="Confirm password"
                />
              </div>

              <div className="text-center ">
                <BaseButton type="submit" variant="signupBtn">
                  create account
                </BaseButton>
              </div>
              <ul className="flex gap-4 justify-center mb-6 ">
                <li>
                  Already have an account?{" "}
                  <a
                    href="login"
                    className="text-cyan-950 underline decoration-1"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-2/5 h-screen">
            <img
              src={loginFormImgSrc}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </form>
    </>
  );
}
