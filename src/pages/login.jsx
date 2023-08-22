import loginFormImgSrc from "../assets/loginform-image/go-vegan.jpg";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  //   const notify = () => toast;

  const [login, setLogin] = useState({
    emailId: "",
    password: "",
  });

  //   const [userData, setUserData] = useState({});

  useEffect(() => {
    const myUser = localStorage.getItem("sessionUser");
    console.log("myUser");
    console.log(myUser);

    // if (!myUser) {
    //   localStorage.setItem(
    //     "sessionUser",
    //     JSON.stringify({
    //       username: "visahlyadaviit@gmail.com",
    //       accessToken: "abcd1234",
    //     })
    //   );

    // }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://192.168.29.179:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
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
                <h1 className="text-center font-semibold text-5xl mb-2.5">
                  Welcome Back
                </h1>
                <p className="text-center text-xl ">
                  Login in to your justvegan
                </p>
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
              </ul>
              <div className="text-center ">
                <button
                  type="submit"
                  style={{ backgroundColor: "rgb(224,226,217)" }}
                  className="w-1/2 p-3 rounded-md "
                  //   onClick={notify}
                >
                  Login
                </button>
                {/* <ToastContainer
                //   position="top-right"
                //   autoClose={5000}
                //   hideProgressBar={false}
                //   newestOnTop={false}
                //   closeOnClick
                //   rtl={false}
                //   pauseOnFocusLoss
                //   draggable
                //   pauseOnHover
                //   theme="light"
                /> */}
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <img
              src={loginFormImgSrc}
              alt=""
              className="w-full object-cover object-center"
              style={{ height: "41.7rem" }}
            />
          </div>
        </div>
      </form>
    </>
  );
}
