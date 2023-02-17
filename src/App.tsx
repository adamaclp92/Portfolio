import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import CircleDrawer from "./projects/circle-drawer/circle-drawer.component";
import SynonymApi from "./projects/synonym-api/synonym-api.component";
import ColorChooser from "./projects/color-chooser/color-chooser";
import Tenzies from "./projects/tenzies/tenzies";
import FoodOrder from "./projects/food-order/src/App";
import ClothesShop from "./projects/clothes-shop/App";

import "semantic-ui-css/semantic.min.css";
import React from "react";

const App = () => {
  //  <Route path="clothesshop" element={<ClothesShop />} />
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="circledrawer" element={<CircleDrawer />} />
        <Route path="synonymapi" element={<SynonymApi />} />
        <Route path="colorchooser" element={<ColorChooser />} />
        <Route path="tenzies" element={<Tenzies />} />
        <Route path="foodorder" element={<FoodOrder />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
