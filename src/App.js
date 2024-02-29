import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
import { CategoryPath } from "./firebase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path={"/"+CategoryPath+"/*"} element={<Category></Category>}></Route>
      </Routes>
    </>
  );
}

export default App;
