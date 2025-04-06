import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import ItemDetails from "../ItemDetails/ItemDetails";
import { SignUp } from "../SignUp/SignUp";
import { SignIn } from "../SignIn/SignIn";
import { Favorites } from "../Favorites/Favorites";
import { History } from "../History/History";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/pokemon/:id" element={<ItemDetails />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
