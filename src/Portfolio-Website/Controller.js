import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import Error from "./Pages/Error/Error";
import SharedLayout from "./Navigation/SharedLayout";
import FoodMenu from "./Pages/Projects/FoodMenu/index";

const Controller = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="Projects" element={<Projects />} />

          <Route path="Resume" element={<Resume />} />

          <Route path="*" element={<Error />} />
        </Route>
        <Route path="food-menu" element={<FoodMenu />}>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Controller;
