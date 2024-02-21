import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Hero from "./components/Hero";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
