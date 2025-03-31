import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import ItemDetails from "../ItemDetails/ItemDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/pokemon/:id" element={<ItemDetails />}/>
    </Routes>
  );
};
