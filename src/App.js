import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Hero from "./components/Hero";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <>

          <Routes>
            <Route path="/category" element={<Category></Category>}></Route>
            <Route path="/" element={<Hero></Hero>}></Route>
          </Routes>
    </>
  );
}

export default App;
