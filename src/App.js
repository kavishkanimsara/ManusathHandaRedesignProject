import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Rec from "./pages/Rec";


function App() {
  return (
    <>

       {/* <BrowserRouter> */}
<Routes>
            <Route path="/category" element={<Category></Category>}></Route>
            <Route path="/" element={<Hero></Hero>}></Route>
            <Route path="/rec" element={<Rec></Rec>}></Route>
          </Routes>
       {/* </BrowserRouter> */}
    </>
  );
}

export default App;
