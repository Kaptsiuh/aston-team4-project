import { createContext } from "react";

const authObject = {
  isAuth: false,
  setAuth: (newStatus) => {},
  userInfo: {
    name: "",
    email: "",
    favourites: [],
  },
  setUserInfo: (newUserData) => {},
};

export const AuthContext = createContext(authObject);

export default AuthContext;
