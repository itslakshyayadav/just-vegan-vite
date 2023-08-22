import { useState, useEffect } from "react";
import loginFormImgSrc from "../assets/loginform-image/go-vegan.jpg";
export default function SignUP() {
  const [signup, setSignup] = useState({
    name: "",
    emailId: "",
    password: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://192.168.29.179:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signup),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.payload);
        localStorage.setItem("userAuth", JSON.stringify(response.payload));
        window.location = "/";
      });
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
                  name=""
                  //   value={login.password}
                  onChange={handleChange}
                  className="w-2/3  px-2 py-2  rounded-md"
                  placeholder="confrim password"
                />
              </div>

              <div className="text-center ">
                <button
                  type="submit"
                  // style={{ backgroundColor: "rgb(224,226,217)" }}
                  style={{ backgroundColor: "rgb(83,197,8)" }}
                  className="w-1/2 p-3 text-white rounded-md mb-6"
                >
                  create account
                </button>
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
