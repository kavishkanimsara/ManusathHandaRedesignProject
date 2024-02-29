import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Catagory from "./pages/Catagory";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/catagories/*" element={<Catagory></Catagory>}></Route>
      </Routes>
    </>
  );
}

export default App;
