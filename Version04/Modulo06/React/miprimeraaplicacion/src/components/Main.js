import { Routes, Route } from "react-router-dom";

import SharedComponent from "./sharedComponent/SharedComponent";
import Welcome from "./welcome/Welcome";
import Vehicles from "./consumingAPI/vehicles/Vehicles";
import PageNotFound from "./pageNotFound/PageNotFound";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/sharedComponent" element={<SharedComponent />}></Route>
      <Route path="/consumingAPI" element={<Vehicles />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default Main;
