import { useState } from "react";
import { Header } from "../Header/Header";
import { AppRoutes } from "../Routes/Routes";
import s from "./App.module.css";
import AuthContext from "../../utils/context";

export function App() {
  const [isAuth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div className={s.app}>
      <AuthContext.Provider value={{ isAuth, setAuth, userInfo, setUserInfo }}>
        <Header />
        <AppRoutes />
      </AuthContext.Provider>
    </div>
  );
}
