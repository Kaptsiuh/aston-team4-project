import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import ItemDetails from "../ItemDetails/ItemDetails";
import { SignUp } from "../SignUp/SignUp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/pokemon/:id" element={<ItemDetails />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
