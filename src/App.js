import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Hero from "./components/Hero";


function App() {
  return (
    <>

       {/* <BrowserRouter> */}
<Routes>
            <Route path="/category" element={<Category></Category>}></Route>
            <Route path="/" element={<Hero></Hero>}></Route>
          </Routes>
       {/* </BrowserRouter> */}
    </>
  );
}

export default App;
