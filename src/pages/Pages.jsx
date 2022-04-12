import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Favourite from "./Favourite/Favourite";
import Searched from "./Searched/Searched";
import Recipe from "./Recipe/Recipe";

function Pages() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favourite/" element={<Favourite />} />
          <Route path="searched/:search" element={<Searched />} />
          <Route path="recipe/:id" element={<Recipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Pages;
