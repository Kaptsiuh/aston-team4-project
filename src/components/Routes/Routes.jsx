import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import ItemDetails from "../ItemDetails/ItemDetails";
import { SignUp } from "../SignUp/SignUp";
import { SignIn } from "../SignIn/SignIn";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/pokemon/:id" element={<ItemDetails />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
