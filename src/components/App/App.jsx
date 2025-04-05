import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { AppRoutes } from "../Routes/Routes";
import s from "./App.module.css";
import AuthContext from "../../utils/context";
import { login } from "../../utils/login";
import { Ash } from "../../utils/mockUsers";

export function App() {
  const [isAuth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("localUsers"))) {
      localStorage.setItem("localUsers", JSON.stringify([Ash]));
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    localStorage.getItem("currentUser") &&
      login(currentUser, () => {
        setAuth(true);
        setUserInfo(currentUser);
      });
  }, []);

  return (
    <div className={s.app}>
      <AuthContext.Provider value={{ isAuth, setAuth, userInfo, setUserInfo }}>
        <Header />
        <AppRoutes />
      </AuthContext.Provider>
    </div>
  );
}
