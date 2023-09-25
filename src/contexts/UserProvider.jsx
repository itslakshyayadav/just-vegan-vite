import UserContext from "@/contexts/UserContext";
import { useState } from "react";
import userService from "@/services/userService";

export default function UserProvider({ children }) {
  const userPayload = JSON.parse(localStorage.getItem("userPayload") || "{}");
  const [user, setUser] = useState(userPayload);
  // console.log(user);

  const reFetchUser = async () => {
    try {
      const userResponse = await userService.fetchUser();
      if (userResponse.status === 200) {
        localStorage.setItem(
          "userPayload",
          JSON.stringify(userResponse.data.payload)
        );
        setUser(userResponse.data.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        reFetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
