import { Outlet } from "react-router-dom";

const CreateAddress = () => {
  return (
    <>
      <h1 className="text-black float-right bg-cyan-500">New Arrdess</h1>
      <Outlet></Outlet>
    </>
  );
};

export default CreateAddress;
