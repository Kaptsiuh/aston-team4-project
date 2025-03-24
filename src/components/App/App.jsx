import { Header } from "../Header/Header";
import { AppRoutes } from "../Routes/Routes";
import s from "./App.module.css";

export function App() {
  return (
    <div className={s.app}>
      <Header />
      <AppRoutes />
    </div>
  );
}
