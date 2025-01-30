import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

import FoodItems from "./pages/FoodItems";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
}

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard  />} />
        <Route path="/giftsandarts" element={<FoodItems type= "giftsandarts" />} />
        <Route path="/fooditems" element={<FoodItems type = "fooditems" />}  />
        <Route path="/fertilizers" element={<FoodItems type = "fertilizers" />} />
        <Route path="/beverages" element={<FoodItems type = "beverages" />} />
        <Route path="/beautycare" element={<FoodItems type = "beautycare" />} />
        <Route path="/groceryitems" element={<FoodItems type = "groceryitems" />} />
        <Route path="/cowdungproducts" element={<FoodItems type = "cowdungproducts" />} />
        <Route path="/sanitarynapkins" element={<FoodItems type = "sanitarynapkins" />} />
        <Route path="/clothing" element={<FoodItems type = "clothing" />} />
        <Route path="/ecofriendlyproducts" element={<FoodItems type = "ecofriendlyproducts" />} />
        <Route path="/brassitems" element={<FoodItems type = "brassitems" />} />
        <Route path="/householditems" element={<FoodItems type = "householditems" />} />
        <Route path="/books" element={<FoodItems type = "books" />} />
        <Route path="/machines" element={<FoodItems type = "machines" />} />
        <Route path="/jewellery" element={<FoodItems type = "jewellery" />} />
        <Route path="/furniture" element={<FoodItems type = "furniture" />} />
        <Route path="/homefurnishing" element={<FoodItems type = "homefurnishing" />} />
        <Route path="/ecofriendlygifts" element={<FoodItems type = "ecofriendlygifts" />} />
        <Route path="/stationary" element={<FoodItems type = "stationary" />} />
        <Route path="/cleaningliquid" element={<FoodItems type = "cleaningliquid" />} />
        <Route path="/silverjewellery" element={<FoodItems type = "silverjewellery" />} />
        <Route path="/homedecorates" element={<FoodItems type = "homedecorates" />} />
        <Route path="/naturalleafplates" element={<FoodItems type = "naturalleafplates" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
